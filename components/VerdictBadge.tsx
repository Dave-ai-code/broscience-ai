import { Verdict } from "@/data/myths";
import { SupplementVerdict } from "@/data/supplements";

type AnyVerdict = Verdict | SupplementVerdict;

interface VerdictBadgeProps {
  verdict: AnyVerdict;
  size?: "sm" | "md";
}

const config: Record<AnyVerdict, { label: string; classes: string }> = {
  Debunked: {
    label: "Debunked",
    classes: "bg-red-100 text-red-700",
  },
  Partial: {
    label: "Partial",
    classes: "bg-amber-100 text-amber-700",
  },
  Legit: {
    label: "Legit ✅",
    classes: "bg-green-100 text-green-700",
  },
  Skip: {
    label: "Skip ❌",
    classes: "bg-gray-100 text-gray-600",
  },
};

export default function VerdictBadge({ verdict, size = "sm" }: VerdictBadgeProps) {
  const { label, classes } = config[verdict];
  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold tracking-wide ${classes} ${
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm"
      }`}
    >
      {label}
    </span>
  );
}
