"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/myths", label: "Myth Lab" },
  { href: "/supplements", label: "Supplements" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-5xl px-4 py-12 pb-24 md:pb-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-black text-2xl tracking-tight">
              Bro<span className="text-blue-500">Science</span>
              <span className="text-blue-500">.ai</span>
            </span>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              We fact-check what your gym bro tells you. Science-backed, bro-approved.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Pages
            </p>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-3 md:max-w-xs w-full">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Stay in the loop
            </p>
            <p className="text-gray-400 text-sm">
              Get the latest myth busts delivered to your inbox.
            </p>
            {submitted ? (
              <p className="text-green-400 font-semibold text-sm">
                You&apos;re in! Welcome to the lab.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  aria-label="Email address"
                  className="flex-1 min-h-[44px] rounded-full px-4 text-sm bg-gray-800 border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                />
                <button
                  type="submit"
                  className="min-h-[44px] px-5 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 active:scale-95 transition-all"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} BroScience.ai — For educational purposes only. Not medical advice.
        </div>
      </div>
    </footer>
  );
}
