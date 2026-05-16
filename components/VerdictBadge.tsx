import { Verdict } from "@/data/myths";
import { SupplementVerdict } from "@/data/supplements";

type AnyVerdict = Verdict | SupplementVerdict;

interface VerdictBadgeProps {
  verdict: AnyVerdict;
  size?: "sm" | "md";
}

const config: Record<AnyVerdict, { label: string; bg: string; color: string }> = {
  Debunked: { label: "Debunked", bg: "var(--debunked-soft)", color: "var(--debunked)" },
  Partial:  { label: "Partial",  bg: "var(--partial-soft)",  color: "var(--partial)" },
  Legit:    { label: "Legit",    bg: "var(--legit-soft)",    color: "var(--legit)" },
  Skip:     { label: "Skip",     bg: "var(--skip-soft)",     color: "var(--muted)" },
};

export default function VerdictBadge({ verdict, size = "sm" }: VerdictBadgeProps) {
  const { label, bg, color } = config[verdict];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold ${
        size === "sm" ? "px-[10px] py-[3px] text-[11.5px]" : "px-3 py-1 text-[13px]"
      }`}
      style={{ background: bg, color }}
    >
      <span
        className="rounded-full flex-shrink-0"
        style={{ width: 5, height: 5, background: color }}
      />
      {label}
    </span>
  );
}
