"use client";

interface ChipRowProps {
  chips: string[];
  activeChip: string | null;
  onSelect: (chip: string | null) => void;
}

export default function ChipRow({ chips, activeChip, onSelect }: ChipRowProps) {
  return (
    <div
      className="flex gap-2.5 overflow-x-auto pb-1 px-4 md:px-0 scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      aria-label="Topic filters"
    >
      {chips.map((chip) => {
        const isActive = activeChip === chip;
        return (
          <button
            key={chip}
            onClick={() => onSelect(isActive ? null : chip)}
            className={`flex-shrink-0 min-h-[42px] rounded-full px-4 py-2 text-sm font-semibold transition-all duration-150 ${
              isActive
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "bg-white/15 text-white border border-white/30 hover:bg-white/25 active:scale-95"
            }`}
            aria-pressed={isActive}
          >
            {chip}
          </button>
        );
      })}
    </div>
  );
}
