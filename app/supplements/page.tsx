"use client";

import { useState, useMemo } from "react";
import SupplementCard from "@/components/SupplementCard";
import SearchBar from "@/components/SearchBar";
import { supplements } from "@/data/supplements";

export default function SupplementsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return supplements;
    return supplements.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.reality.toLowerCase().includes(q) ||
        s.broMyth.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      {/* Header */}
      <div className="px-[18px] pt-8 pb-4" style={{ borderBottom: "1px solid var(--line)" }}>
        <p
          className="text-[11px] uppercase tracking-[0.12em] font-medium mb-1"
          style={{ color: "var(--muted-2)", fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          Evidence-rated
        </p>
        <h1 className="text-[28px] font-semibold tracking-[-0.025em] mb-4" style={{ color: "var(--ink)" }}>
          Supplement Checker
        </h1>
        <SearchBar value={query} onChange={setQuery} placeholder="Search supplements…" />
      </div>

      {/* Cards */}
      <div className="px-[18px] py-6">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filtered.map((supp) => (
              <SupplementCard key={supp.id} supplement={supp} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="text-5xl mb-4">💊</span>
            <h3 className="text-[19px] font-semibold mb-2" style={{ color: "var(--ink)" }}>
              No supplements found
            </h3>
            <p className="text-[13px]" style={{ color: "var(--muted)" }}>
              Try a different search term.
            </p>
            <button
              onClick={() => setQuery("")}
              className="mt-5 h-[44px] px-6 rounded-full text-sm font-semibold active:scale-95 transition-all"
              style={{ background: "var(--blue)", color: "#fff" }}
            >
              Clear search
            </button>
          </div>
        )}

        <p className="mt-10 text-[11px] text-center leading-relaxed max-w-sm mx-auto" style={{ color: "var(--muted-2)" }}>
          We may earn a small commission from Amazon links at no extra cost to you. We only recommend evidence-backed products.
        </p>
      </div>
    </>
  );
}
