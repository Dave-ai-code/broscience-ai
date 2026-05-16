"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { myths } from "@/data/myths";
import { supplements } from "@/data/supplements";
import VerdictBadge from "./VerdictBadge";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const q = query.toLowerCase().trim();

  const mythResults = q
    ? myths
        .filter(
          (m) =>
            m.question.toLowerCase().includes(q) ||
            m.answer.toLowerCase().includes(q)
        )
        .slice(0, 5)
    : [];

  const suppResults = q
    ? supplements
        .filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.broMyth.toLowerCase().includes(q) ||
            s.reality.toLowerCase().includes(q)
        )
        .slice(0, 3)
    : [];

  const hasResults = mythResults.length > 0 || suppResults.length > 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col" role="dialog" aria-modal="true" aria-label="Search">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel slides in from top */}
      <div className="relative z-10 bg-white w-full shadow-2xl max-h-[80vh] flex flex-col animate-[fadeIn_0.15s_ease-out]">
        {/* Input row */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-100">
          <svg
            className="w-5 h-5 text-gray-400 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search myths, supplements…"
            className="flex-1 text-base text-gray-900 outline-none placeholder-gray-400 bg-transparent"
          />
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-xs font-bold px-2.5 py-1 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Results */}
        <div className="overflow-y-auto flex-1">
          {!q && (
            <div className="px-4 py-10 text-center">
              <p className="text-gray-400 text-sm">
                Type to search {myths.length} myths and {supplements.length} supplements
              </p>
            </div>
          )}

          {q && !hasResults && (
            <div className="px-4 py-10 text-center">
              <p className="text-gray-600 text-sm font-medium">
                No results for &ldquo;{query}&rdquo;
              </p>
              <Link
                href="/myths"
                onClick={onClose}
                className="inline-block mt-3 text-blue-600 font-semibold text-sm hover:underline"
              >
                Browse all myths →
              </Link>
            </div>
          )}

          {mythResults.length > 0 && (
            <section>
              <p className="px-4 pt-4 pb-1 text-xs font-black uppercase tracking-widest text-gray-400">
                Myths
              </p>
              {mythResults.map((myth) => (
                <Link
                  key={myth.id}
                  href={`/myths/${myth.id}`}
                  onClick={onClose}
                  className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                >
                  <span className="mt-0.5 flex-shrink-0">
                    <VerdictBadge verdict={myth.verdict} size="sm" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm leading-snug line-clamp-1">
                      {myth.question}
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-1 mt-0.5">
                      {myth.answer}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </section>
          )}

          {suppResults.length > 0 && (
            <section>
              <p className="px-4 pt-4 pb-1 text-xs font-black uppercase tracking-widest text-gray-400">
                Supplements
              </p>
              {suppResults.map((supp) => (
                <Link
                  key={supp.id}
                  href="/supplements"
                  onClick={onClose}
                  className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                >
                  <span className="mt-0.5 flex-shrink-0">
                    <VerdictBadge verdict={supp.verdict} size="sm" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm leading-snug">
                      {supp.name}
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-1 mt-0.5">
                      {supp.reality}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </section>
          )}

          {hasResults && (
            <div className="px-4 py-3 border-t border-gray-100">
              <Link
                href={`/myths?q=${encodeURIComponent(query)}`}
                onClick={onClose}
                className="text-blue-600 font-semibold text-sm hover:underline"
              >
                See all myth results for &ldquo;{query}&rdquo; →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
