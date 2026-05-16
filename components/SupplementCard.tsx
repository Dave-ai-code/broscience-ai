import { Supplement } from "@/data/supplements";
import VerdictBadge from "./VerdictBadge";

interface SupplementCardProps {
  supplement: Supplement;
}

function getAmazonUrl(name: string) {
  const slug = name.toLowerCase().replace(/\s+/g, "+");
  return `https://www.amazon.com/s?k=${slug}&tag=broscience-20`;
}

export default function SupplementCard({ supplement }: SupplementCardProps) {
  return (
    <article className="flex flex-col rounded-2xl overflow-hidden" style={{ border: "1px solid var(--line)" }}>
      {/* Crossed-out bro myth */}
      <div
        className="px-[14px] py-[10px]"
        style={{
          background: "var(--bg-soft)",
          borderBottom: "1px dashed var(--line-2)",
        }}
      >
        <p
          className="text-[10px] uppercase tracking-[0.08em] font-semibold mb-1"
          style={{ color: "var(--muted-2)", fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          Bro says
        </p>
        <p
          className="text-[13px] leading-snug"
          style={{
            color: "var(--muted)",
            textDecoration: "line-through",
            textDecorationColor: "var(--debunked)",
            textDecorationThickness: "1.5px",
          }}
        >
          &ldquo;{supplement.broMyth}&rdquo;
        </p>
      </div>

      {/* Science reality */}
      <div className="flex flex-col gap-2 px-[14px] py-[14px] flex-1" style={{ background: "var(--bg-card)" }}>
        <div className="flex items-start justify-between gap-3">
          <h3
            className="font-semibold text-base leading-tight tracking-[-0.01em]"
            style={{ color: "var(--ink)" }}
          >
            {supplement.name}
          </h3>
          <VerdictBadge verdict={supplement.verdict} size="sm" />
        </div>
        <p className="text-[13px] leading-[1.5]" style={{ color: "var(--ink-2)" }}>
          {supplement.reality}
        </p>

        {supplement.hasAmazonLink && (
          <a
            href={getAmazonUrl(supplement.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center w-full h-[38px] rounded-xl text-[13px] font-semibold transition-opacity hover:opacity-80"
            style={{ background: "var(--blue)", color: "#fff" }}
            aria-label={`Buy ${supplement.name} on Amazon`}
          >
            Buy on Amazon ↗
          </a>
        )}
      </div>
    </article>
  );
}
