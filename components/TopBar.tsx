"use client";

import { useState } from "react";
import Link from "next/link";
import SearchOverlay from "./SearchOverlay";

export default function TopBar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[18px] h-14"
        style={{
          background: "rgba(14,14,16,0.88)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-bold text-[17px] tracking-[-0.02em] select-none"
            style={{ color: "var(--ink)" }}
          >
            Bro<span style={{ color: "var(--blue)" }}>Science</span>
            <span style={{ color: "var(--muted)", fontWeight: 500 }}>.AI</span>
          </Link>
          <span
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full"
            style={{
              color: "var(--blue)",
              background: "rgba(79,139,255,0.12)",
              fontFamily: "var(--font-ibm-plex-mono)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--blue)" }} />
            LIVE
          </span>
        </div>

        <button
          onClick={() => setSearchOpen(true)}
          aria-label="Search"
          className="flex items-center justify-center w-9 h-9 rounded-xl transition-colors"
          style={{ color: "var(--muted)" }}
        >
          <svg
            className="w-5 h-5"
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
        </button>
      </header>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
