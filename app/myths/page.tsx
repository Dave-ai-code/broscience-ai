"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import MythCard from "@/components/MythCard";
import SearchBar from "@/components/SearchBar";
import { myths, Verdict } from "@/data/myths";

const filters: Array<{ label: string; value: Verdict | "All" }> = [
  { label: "All",      value: "All" },
  { label: "Debunked", value: "Debunked" },
  { label: "Legit",    value: "Legit" },
  { label: "Partial",  value: "Partial" },
];

function MythLabContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [activeFilter, setActiveFilter] = useState<Verdict | "All">("All");

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  function handleQueryChange(value: string) {
    setQuery(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value) { params.set("q", value); } else { params.delete("q"); }
    router.replace(`/myths?${params.toString()}`, { scroll: false });
  }

  const filtered = useMemo(() => {
    return myths.filter((myth) => {
      const matchesFilter = activeFilter === "All" || myth.verdict === activeFilter;
      const q = query.toLowerCase();
      const matchesSearch =
        !q ||
        myth.question.toLowerCase().includes(q) ||
        myth.answer.toLowerCase().includes(q) ||
        myth.source.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  }, [query, activeFilter]);

  return (
    <>
      {/* Header */}
      <div className="px-[18px] pt-8 pb-4" style={{ borderBottom: "1px solid var(--line)" }}>
        <p
          className="text-[11px] uppercase tracking-[0.12em] font-medium mb-1"
          style={{ color: "var(--muted-2)", fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          Research-backed
        </p>
        <h1 className="text-[28px] font-semibold tracking-[-0.025em] mb-4" style={{ color: "var(--ink)" }}>
          Myth Lab
        </h1>
        <SearchBar value={query} onChange={handleQueryChange} placeholder="Search myths…" />
      </div>

      {/* Filter pills */}
      <div
        className="sticky top-14 z-30 flex gap-2 overflow-x-auto px-[18px] py-3 scrollbar-hide"
        style={{
          background: "rgba(14,14,16,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--line)",
          scrollbarWidth: "none",
        }}
        role="tablist"
        aria-label="Filter by verdict"
      >
        {filters.map(({ label, value }) => {
          const active = activeFilter === value;
          return (
            <button
              key={value}
              role="tab"
              aria-selected={active}
              onClick={() => setActiveFilter(value)}
              className="flex-shrink-0 h-[32px] px-[13px] rounded-full text-[12.5px] font-medium transition-all duration-150 active:scale-95"
              style={{
                background: active ? "var(--ink)" : "var(--bg)",
                color: active ? "var(--bg)" : "var(--ink-2)",
                border: `1px solid ${active ? "var(--ink)" : "var(--line-2)"}`,
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="px-[18px] py-6">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((myth) => (
              <MythCard key={myth.id} myth={myth} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="text-5xl mb-4">🔬</span>
            <h3 className="text-[19px] font-semibold mb-2" style={{ color: "var(--ink)" }}>
              No myths found
            </h3>
            <p className="text-[13px] max-w-xs" style={{ color: "var(--muted)" }}>
              Try a different search or clear the filter.
            </p>
            <button
              onClick={() => { setQuery(""); setActiveFilter("All"); router.replace("/myths", { scroll: false }); }}
              className="mt-5 h-[44px] px-6 rounded-full text-sm font-semibold active:scale-95 transition-all"
              style={{ background: "var(--blue)", color: "#fff" }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default function MythLabPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-7 h-7 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: "var(--line-2)", borderTopColor: "var(--blue)" }} />
      </div>
    }>
      <MythLabContent />
    </Suspense>
  );
}
