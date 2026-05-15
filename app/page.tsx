"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ChipRow from "@/components/ChipRow";
import MythCard from "@/components/MythCard";
import SupplementCard from "@/components/SupplementCard";
import StatsBar from "@/components/StatsBar";
import SearchResult from "@/components/SearchResult";
import { myths } from "@/data/myths";
import { supplements } from "@/data/supplements";

const chips = [
  "Creatine",
  "Protein timing",
  "Fasted training",
  "Spot reduction",
  "Pre-workout",
  "Cold showers",
];

const latestMyths = myths.slice(0, 6);
const featuredSupplements = supplements.slice(0, 4);

const photoGrid = [
  { id: "1571019613454-1cb2f99b2d8b", label: "Strength Training" },
  { id: "1544367567-0f2fcb009e0b", label: "Recovery" },
  { id: "1583454110551-21f2fa2afe61", label: "Performance" },
  { id: "1549060279-7e168fcee0c2", label: "Nutrition" },
];

type SearchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; query: string; broAnswer: string; scienceAnswer: string }
  | { status: "error"; message: string };

export default function HomePage() {
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchState, setSearchState] = useState<SearchState>({ status: "idle" });

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const query = searchValue.trim();
    if (!query) return;

    setSearchState({ status: "loading" });

    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();

      if (!res.ok) {
        setSearchState({ status: "error", message: data.error ?? "Something went wrong." });
        return;
      }

      setSearchState({
        status: "success",
        query,
        broAnswer: data.broAnswer,
        scienceAnswer: data.scienceAnswer,
      });
    } catch {
      setSearchState({ status: "error", message: "Network error. Try again." });
    }
  }

  function handleChipSelect(chip: string | null) {
    setActiveChip(chip);
    if (chip) {
      setSearchValue(chip);
      setSearchState({ status: "idle" });
    }
  }

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="relative h-[100svh] min-h-[600px] flex flex-col">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
          alt="Gym lifestyle"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/85" />

        <div className="relative z-10 mt-auto px-4 pb-6 md:pb-10 mx-auto w-full max-w-3xl">
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Science-backed
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-3">
              Gym wisdom or<br />gym fiction?
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-medium">
              We fact-check what your gym bro tells you
            </p>
          </div>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="w-full mb-3">
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                {searchState.status === "loading" ? (
                  <svg className="h-5 w-5 animate-spin text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                  </svg>
                )}
              </span>
              <input
                type="search"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  if (searchState.status !== "idle") setSearchState({ status: "idle" });
                }}
                placeholder='Ask anything — "does creatine work?" "is cardio bad?"'
                aria-label="Ask a fitness question"
                className="w-full min-h-[56px] rounded-full bg-white/95 backdrop-blur-sm pl-14 pr-32 text-base text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500/50 shadow-xl transition"
              />
              <button
                type="submit"
                disabled={searchState.status === "loading" || !searchValue.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 min-h-[42px] px-5 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 active:scale-95 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                {searchState.status === "loading" ? "Asking…" : "Ask"}
              </button>
            </div>
          </form>

          {/* Search result */}
          {searchState.status === "success" && (
            <SearchResult
              query={searchState.query}
              broAnswer={searchState.broAnswer}
              scienceAnswer={searchState.scienceAnswer}
              onClear={() => setSearchState({ status: "idle" })}
            />
          )}

          {searchState.status === "error" && (
            <p className="text-red-300 text-sm font-medium mt-2 px-1">
              {searchState.message}
            </p>
          )}

          {/* Chip row — visible when no result showing */}
          {searchState.status !== "success" && (
            <div className="mt-3">
              <ChipRow chips={chips} activeChip={activeChip} onSelect={handleChipSelect} />
            </div>
          )}
        </div>
      </section>

      {/* ─── LATEST FROM THE MYTH LAB ───────────────────────── */}
      <section className="px-4 py-12 md:py-16 mx-auto w-full max-w-5xl">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">
              Research-backed
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
              Latest from the Myth Lab
            </h2>
          </div>
          <Link href="/myths" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors flex-shrink-0">
            See all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestMyths.map((myth) => (
            <MythCard key={myth.id} myth={myth} />
          ))}
        </div>
      </section>

      {/* ─── SUPPLEMENT PICKS ───────────────────────────────── */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-5xl">
          <div className="flex items-end justify-between mb-6 px-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">
                Evidence-rated
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                Supplement picks
              </h2>
            </div>
            <Link href="/supplements" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors flex-shrink-0">
              See all →
            </Link>
          </div>

          <div
            className="flex gap-4 overflow-x-auto pb-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {featuredSupplements.map((supp) => (
              <div key={supp.id} className="flex-shrink-0 w-72 md:w-auto">
                <SupplementCard supplement={supp} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHOTO GRID ─────────────────────────────────────── */}
      <section className="px-4 py-12 md:py-16 mx-auto w-full max-w-5xl">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">
            The lifestyle
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">
            Science meets the gym floor
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {photoGrid.map((photo) => (
            <div key={photo.id} className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200 group">
              <Image
                src={`https://images.unsplash.com/photo-${photo.id}?w=600&q=80`}
                alt={photo.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-white text-sm font-bold leading-tight">
                {photo.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── STATS BAR ──────────────────────────────────────── */}
      <StatsBar />
    </>
  );
}
