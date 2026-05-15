const stats = [
  { value: "12+", label: "Myths busted" },
  { value: "50+", label: "Studies cited" },
  { value: "8", label: "Supplements rated" },
];

export default function StatsBar() {
  return (
    <div className="bg-blue-600 text-white">
      <div className="mx-auto max-w-5xl px-4 py-8 md:py-10">
        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl md:text-5xl font-black tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-medium text-blue-100 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
