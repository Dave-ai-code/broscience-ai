"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const suggestions = [
  "Does creatine cause hair loss?",
  "Is fasted cardio better for fat loss?",
  "Do I need 1g of protein per pound?",
  "Should I ice bath after lifting?",
  "Are BCAAs worth it?",
];

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function submit(q: string) {
    const trimmed = q.trim();
    if (!trimmed) return;
    router.push(`/myths?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <div>
      {/* Search bar */}
      <form
        onSubmit={(e) => { e.preventDefault(); submit(query); }}
        className="flex items-center gap-3 rounded-2xl p-[14px] mb-4"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--line-2)",
          boxShadow: "0 8px 32px -12px rgba(0,0,0,0.5)",
        }}
      >
        <svg
          className="w-5 h-5 flex-shrink-0"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          style={{ color: "var(--muted-2)" }} aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Does creatine cause hair loss?"
          aria-label="Search fitness myths"
          className="flex-1 text-[15.5px] outline-none bg-transparent min-w-0"
          style={{ color: "var(--ink)" }}
        />
        <button
          type="submit"
          disabled={!query.trim()}
          className="flex-shrink-0 flex items-center gap-1.5 h-9 px-4 rounded-xl text-[13px] font-semibold transition-opacity disabled:opacity-40 active:scale-95"
          style={{ background: "var(--blue)", color: "#fff" }}
        >
          <span aria-hidden="true">⚡</span>
          Ask
        </button>
      </form>

      {/* Suggestion chips */}
      <div className="flex flex-col gap-2">
        {suggestions.slice(0, 3).map((s) => (
          <button
            key={s}
            onClick={() => submit(s)}
            className="flex items-center gap-3 w-full text-left px-4 py-[11px] rounded-full text-[13px] font-medium transition-colors active:scale-[0.98]"
            style={{
              background: "var(--bg-soft)",
              border: "1px solid var(--line)",
              color: "var(--ink-2)",
            }}
          >
            <span className="text-[13px]" style={{ color: "var(--muted-2)" }}>✳</span>
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
