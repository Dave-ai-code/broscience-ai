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
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-4 pt-8 pb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">
            Evidence-rated
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Supplement Checker
          </h1>
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search supplements..."
          />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8 pb-24 md:pb-12">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((supp) => (
              <SupplementCard key={supp.id} supplement={supp} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="text-5xl mb-4">💊</span>
            <h3 className="text-xl font-black text-gray-900 mb-2">
              No supplements found
            </h3>
            <p className="text-gray-500 text-sm max-w-xs">
              Try a different search term.
            </p>
            <button
              onClick={() => setQuery("")}
              className="mt-5 min-h-[48px] px-6 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 active:scale-95 transition-all"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Disclaimer */}
        <p className="mt-12 text-xs text-gray-400 text-center leading-relaxed max-w-lg mx-auto">
          We may earn a small commission from Amazon links at no extra cost to
          you. We only recommend stuff that&apos;s actually backed by evidence.
        </p>
      </div>
    </>
  );
}
