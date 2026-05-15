import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

const client = new Anthropic();

const SYSTEM_PROMPT = `You are BroScience.ai — the fun, science-backed fitness myth buster.
When someone asks a fitness or gym question, respond with EXACTLY this JSON shape and nothing else:

{
  "broAnswer": "1-2 punchy casual sentences like a gym bro would say. Include one relevant emoji.",
  "scienceAnswer": "2-3 concise evidence-based sentences. Mention the research context if relevant."
}

Rules:
- broAnswer must sound like an enthusiastic gym bro talking to their buddy
- scienceAnswer must be accurate, concise, and mention what evidence says
- Both answers must be SHORT (under 60 words each)
- Return ONLY valid JSON, no markdown, no extra text`;

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY is not configured." },
      { status: 500 }
    );
  }

  let query: string;
  try {
    const body = await request.json();
    query = (body.query ?? "").trim();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!query) {
    return NextResponse.json({ error: "Query is required." }, { status: 400 });
  }

  try {
    // claude-haiku-4-5: chosen for real-time search latency on a consumer app
    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 512,
      system: [
        {
          type: "text",
          text: SYSTEM_PROMPT,
          // Cache the stable system prompt — reads are ~0.1× cost after first request
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: [{ role: "user", content: query }],
    });

    const raw =
      response.content[0]?.type === "text" ? response.content[0].text : "";

    const parsed = JSON.parse(raw) as {
      broAnswer: string;
      scienceAnswer: string;
    };

    if (typeof parsed.broAnswer !== "string" || typeof parsed.scienceAnswer !== "string") {
      throw new Error("Unexpected response shape");
    }

    return NextResponse.json({
      broAnswer: parsed.broAnswer,
      scienceAnswer: parsed.scienceAnswer,
    });
  } catch (err) {
    if (err instanceof Anthropic.APIError) {
      return NextResponse.json(
        { error: `API error ${err.status}: ${err.message}` },
        { status: err.status ?? 500 }
      );
    }
    return NextResponse.json(
      { error: "Could not generate an answer. Try again." },
      { status: 500 }
    );
  }
}
