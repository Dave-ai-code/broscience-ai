import Link from "next/link";
import { notFound } from "next/navigation";
import { myths } from "@/data/myths";
import VerdictBadge from "@/components/VerdictBadge";
import MythCard from "@/components/MythCard";

export function generateStaticParams() {
  return myths.map((m) => ({ id: String(m.id) }));
}

const verdictMeta: Record<string, { headline: string; detail: string }> = {
  Debunked: {
    headline: "This is a myth.",
    detail: "The scientific evidence does not support this claim.",
  },
  Partial: {
    headline: "There's some truth here.",
    detail: "The science is nuanced — context matters a lot.",
  },
  Legit: {
    headline: "This one checks out.",
    detail: "Research backs this up pretty well.",
  },
};

export default async function MythDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const myth = myths.find((m) => m.id === Number(id));
  if (!myth) notFound();

  const meta = verdictMeta[myth.verdict];
  const related = myths
    .filter((m) => m.id !== myth.id && m.verdict === myth.verdict)
    .slice(0, 3);

  return (
    <div>
      {/* Back */}
      <div className="px-[18px] pt-6 pb-0">
        <Link
          href="/myths"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium transition-opacity hover:opacity-70"
          style={{ color: "var(--muted)" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Myth Lab
        </Link>
      </div>

      {/* Hero */}
      <div className="px-[18px] pt-5 pb-6" style={{ borderBottom: "1px solid var(--line)" }}>
        <VerdictBadge verdict={myth.verdict} size="md" />
        <h1
          className="text-[26px] md:text-[30px] font-semibold leading-[1.15] tracking-[-0.025em] mt-3"
          style={{ color: "var(--ink)" }}
        >
          {myth.question}
        </h1>
      </div>

      {/* Content */}
      <div className="px-[18px] py-6 max-w-2xl flex flex-col gap-4">
        {/* Verdict callout */}
        <div className="rounded-2xl p-4" style={{ background: "var(--bg-card)", border: "1px solid var(--line)" }}>
          <p
            className="text-[10px] uppercase tracking-[0.1em] font-semibold mb-1"
            style={{ color: "var(--muted-2)", fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            The verdict
          </p>
          <p className="font-semibold text-[17px] mb-1" style={{ color: "var(--ink)" }}>
            {meta.headline}
          </p>
          <p className="text-[13px]" style={{ color: "var(--muted)" }}>
            {meta.detail}
          </p>
        </div>

        {/* Split: bro says / science says */}
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--line-2)" }}>
          {/* Bro */}
          <div className="px-4 py-4" style={{ background: "#2a1418", borderBottom: "1px solid var(--line)" }}>
            <p
              className="text-[10px] uppercase tracking-[0.1em] font-semibold mb-2"
              style={{ color: "var(--debunked)", fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              💪 Bro Says
            </p>
            <p className="text-[14.5px] leading-[1.5] font-medium" style={{ color: "#fecaca" }}>
              &ldquo;Trust me bro, {myth.question.toLowerCase().replace("?", "")} — everyone in my gym knows this.&rdquo;
            </p>
          </div>
          {/* Science */}
          <div className="px-4 py-4" style={{ background: "#16223e" }}>
            <p
              className="text-[10px] uppercase tracking-[0.1em] font-semibold mb-2"
              style={{ color: "var(--blue)", fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              🔬 Science Says
            </p>
            <p className="text-[14.5px] leading-[1.5] font-medium" style={{ color: "#a8c5ff" }}>
              {myth.answer}
            </p>
          </div>
        </div>

        {/* Source */}
        <div className="rounded-2xl p-4" style={{ background: "var(--bg-soft)", border: "1px solid var(--line)" }}>
          <p
            className="text-[10px] uppercase tracking-[0.1em] font-semibold mb-1"
            style={{ color: "var(--muted-2)", fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            Source
          </p>
          <p className="text-[13px] font-medium" style={{ color: "var(--ink-2)" }}>
            {myth.source}
          </p>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="px-[18px] pb-6" style={{ borderTop: "1px solid var(--line)" }}>
          <h2
            className="text-[17px] font-semibold tracking-[-0.01em] mt-5 mb-3"
            style={{ color: "var(--ink)" }}
          >
            More {myth.verdict.toLowerCase()} myths
          </h2>
          <div className="flex flex-col gap-3">
            {related.map((m) => (
              <MythCard key={m.id} myth={m} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
