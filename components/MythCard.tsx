import Link from "next/link";
import { Myth } from "@/data/myths";
import VerdictBadge from "./VerdictBadge";

interface MythCardProps {
  myth: Myth;
}

export default function MythCard({ myth }: MythCardProps) {
  return (
    <Link href={`/myths/${myth.id}`} className="block group">
      <article
        className="flex flex-col gap-2 rounded-2xl p-[14px] transition-colors duration-150"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--line)",
        }}
      >
        <VerdictBadge verdict={myth.verdict} />
        <h3
          className="font-semibold text-[15.5px] leading-[1.3] tracking-[-0.015em]"
          style={{ color: "var(--ink)" }}
        >
          {myth.question}
        </h3>
        <p
          className="text-[13px] leading-[1.45] line-clamp-2"
          style={{ color: "var(--ink-2)", opacity: 0.78 }}
        >
          {myth.answer}
        </p>
        <div
          className="flex items-center justify-between mt-[2px]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          <span
            className="text-[10px] uppercase tracking-[0.06em]"
            style={{ color: "var(--muted)" }}
          >
            {myth.source}
          </span>
          <svg
            className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            style={{ color: "var(--muted-2)" }}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  );
}
