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
    ? myths.filter(
        (m) =>
          m.question.toLowerCase().includes(q) ||
          m.answer.toLowerCase().includes(q)
      ).slice(0, 5)
    : [];

  const suppResults = q
    ? supplements.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.broMyth.toLowerCase().includes(q) ||
          s.reality.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const hasResults = mythResults.length > 0 || suppResults.length > 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col" role="dialog" aria-modal="true" aria-label="Search">
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="relative z-10 w-full max-h-[80vh] flex flex-col animate-[fadeIn_0.15s_ease-out]"
        style={{
          background: "var(--bg-soft)",
          borderBottom: "1px solid var(--line-2)",
          boxShadow: "0 24px 48px rgba(0,0,0,0.5)",
        }}
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-[18px] py-4" style={{ borderBottom: "1px solid var(--line)" }}>
          <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "var(--muted)" }} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search myths, supplements…"
            className="flex-1 text-[15.5px] outline-none bg-transparent"
            style={{ color: "var(--ink)" }}
          />
          <button
            onClick={onClose}
            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-colors"
            style={{ color: "var(--muted)", borderColor: "var(--line-2)", background: "var(--bg-card)" }}
          >
            Esc
          </button>
        </div>

        {/* Results */}
        <div className="overflow-y-auto flex-1">
          {!q && (
            <p className="px-[18px] py-10 text-center text-[13px]" style={{ color: "var(--muted)" }}>
              Search across {myths.length} myths and {supplements.length} supplements
            </p>
          )}

          {q && !hasResults && (
            <div className="px-[18px] py-10 text-center">
              <p className="text-[14px] font-medium" style={{ color: "var(--ink-2)" }}>
                No results for &ldquo;{query}&rdquo;
              </p>
              <Link
                href="/myths"
                onClick={onClose}
                className="inline-block mt-3 text-[13px] font-semibold hover:underline"
                style={{ color: "var(--blue)" }}
              >
                Browse all myths →
              </Link>
            </div>
          )}

          {mythResults.length > 0 && (
            <section>
              <p
                className="px-[18px] pt-4 pb-2 text-[11px] uppercase tracking-[0.1em] font-semibold"
                style={{ color: "var(--muted-2)", fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                Myths
              </p>
              {mythResults.map((myth) => (
                <Link
                  key={myth.id}
                  href={`/myths/${myth.id}`}
                  onClick={onClose}
                  className="flex items-start gap-3 px-[18px] py-3 transition-colors"
                  style={{ borderBottom: "1px solid var(--line)" }}
                >
                  <span className="mt-0.5 flex-shrink-0">
                    <VerdictBadge verdict={myth.verdict} size="sm" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[14px] leading-snug line-clamp-1" style={{ color: "var(--ink)" }}>
                      {myth.question}
                    </p>
                    <p className="text-[12px] leading-relaxed line-clamp-1 mt-0.5" style={{ color: "var(--muted)" }}>
                      {myth.answer}
                    </p>
                  </div>
                  <svg className="w-4 h-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "var(--muted-2)" }} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </section>
          )}

          {suppResults.length > 0 && (
            <section>
              <p
                className="px-[18px] pt-4 pb-2 text-[11px] uppercase tracking-[0.1em] font-semibold"
                style={{ color: "var(--muted-2)", fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                Supplements
              </p>
              {suppResults.map((supp) => (
                <Link
                  key={supp.id}
                  href="/supplements"
                  onClick={onClose}
                  className="flex items-start gap-3 px-[18px] py-3 transition-colors"
                  style={{ borderBottom: "1px solid var(--line)" }}
                >
                  <span className="mt-0.5 flex-shrink-0">
                    <VerdictBadge verdict={supp.verdict} size="sm" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[14px] leading-snug" style={{ color: "var(--ink)" }}>
                      {supp.name}
                    </p>
                    <p className="text-[12px] leading-relaxed line-clamp-1 mt-0.5" style={{ color: "var(--muted)" }}>
                      {supp.reality}
                    </p>
                  </div>
                  <svg className="w-4 h-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "var(--muted-2)" }} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </section>
          )}

          {hasResults && (
            <div className="px-[18px] py-4">
              <Link
                href={`/myths?q=${encodeURIComponent(query)}`}
                onClick={onClose}
                className="text-[13px] font-semibold hover:underline"
                style={{ color: "var(--blue)" }}
              >
                See all results for &ldquo;{query}&rdquo; →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
