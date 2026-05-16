const stats = [
  { value: "1,284",  label: "Myths analysed" },
  { value: "47,392", label: "Questions asked" },
  { value: "68%",    label: "Debunk rate" },
];

export default function StatsBar() {
  return (
    <div
      className="grid grid-cols-3 mx-[18px] my-6"
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        paddingTop: 16,
        paddingBottom: 16,
      }}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="flex flex-col gap-[2px] px-3"
          style={{ borderRight: i < stats.length - 1 ? "1px solid var(--line)" : "none" }}
        >
          <span
            className="text-[18px] font-medium tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "var(--ink)" }}
          >
            {stat.value}
          </span>
          <span className="text-[10.5px]" style={{ color: "var(--muted)" }}>
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
