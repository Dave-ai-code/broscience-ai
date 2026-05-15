"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/myths", label: "Myth Lab" },
  { href: "/supplements", label: "Supplements" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="mx-auto max-w-5xl px-4 flex items-center justify-between h-14 md:h-16">
          <Link
            href="/"
            className="font-black text-xl tracking-tight text-gray-900"
            onClick={() => setOpen(false)}
          >
            Bro<span className="text-blue-600">Science</span>
            <span className="text-blue-600">.ai</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
          <div className="absolute top-4 left-4 font-black text-xl tracking-tight text-gray-900">
            Bro<span className="text-blue-600">Science</span>
            <span className="text-blue-600">.ai</span>
          </div>
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`w-full text-center py-4 rounded-2xl text-2xl font-black transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
