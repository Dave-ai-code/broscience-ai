"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import MythCard from "@/components/MythCard";
import SearchBar from "@/components/SearchBar";
import { myths, Verdict } from "@/data/myths";

const filters: Array<{ label: string; value: Verdict | "All" }> = [
  { label: "All", value: "All" },
  { label: "Debunked", value: "Debunked" },
  { label: "Legit", value: "Legit" },
  { label: "Partial", value: "Partial" },
];

function MythLabContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [activeFilter, setActiveFilter] = useState<Verdict | "All">("All");

  useEffect(() => {
    const q = searchParams.get("q") ?? "";
    setQuery(q);
  }, [searchParams]);

  function handleQueryChange(value: string) {
    setQuery(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    router.replace(`/myths?${params.toString()}`, { scroll: false });
  }

  const filtered = useMemo(() => {
    return myths.filter((myth) => {
      const matchesFilter =
        activeFilter === "All" || myth.verdict === activeFilter;
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
      {/* Page header */}
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-4 pt-8 pb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">
            Research-backed
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Myth Lab
          </h1>
          <SearchBar
            value={query}
            onChange={handleQueryChange}
            placeholder="Search myths..."
          />
        </div>

        {/* Sticky filter tabs */}
        <div
          className="sticky top-14 md:top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100"
        >
          <div
            className="mx-auto max-w-5xl flex gap-1 overflow-x-auto px-4 py-3 scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
            role="tablist"
            aria-label="Filter myths by verdict"
          >
            {filters.map(({ label, value }) => {
              const isActive = activeFilter === value;
              return (
                <button
                  key={value}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(value)}
                  className={`flex-shrink-0 min-h-[40px] rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 active:scale-95"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-5xl px-4 py-8 pb-24 md:pb-12">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((myth) => (
              <MythCard key={myth.id} myth={myth} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="text-5xl mb-4">🔬</span>
            <h3 className="text-xl font-black text-gray-900 mb-2">
              No myths found
            </h3>
            <p className="text-gray-500 text-sm max-w-xs">
              Try a different search term or clear the filter to see all myths.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setActiveFilter("All");
                router.replace("/myths", { scroll: false });
              }}
              className="mt-5 min-h-[48px] px-6 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 active:scale-95 transition-all"
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
        <div className="w-8 h-8 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
      </div>
    }>
      <MythLabContent />
    </Suspense>
  );
}
