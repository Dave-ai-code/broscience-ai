import Link from "next/link";
import Image from "next/image";
import MythCard from "@/components/MythCard";
import SupplementCard from "@/components/SupplementCard";
import StatsBar from "@/components/StatsBar";
import VerdictBadge from "@/components/VerdictBadge";
import { myths } from "@/data/myths";
import { supplements } from "@/data/supplements";

const latestMyths = myths.slice(0, 6);
const featuredMyth = myths[4]; // "Can you spot-reduce belly fat?" — Debunked
const featuredSupplements = supplements.slice(0, 4);

const photoGrid = [
  { id: "1571019613454-1cb2f99b2d8b", label: "Strength Training" },
  { id: "1544367567-0f2fcb009e0b", label: "Recovery" },
  { id: "1583454110551-21f2fa2afe61", label: "Performance" },
  { id: "1549060279-7e168fcee0c2", label: "Nutrition" },
];

export default function HomePage() {
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

        <div className="relative z-10 mt-auto px-4 pb-8 md:pb-12 mx-auto w-full max-w-3xl">
          <div className="mb-6">
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

          {/* Featured myth card */}
          <Link href={`/myths/${featuredMyth.id}`} className="block group">
            <div className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors duration-200">
              <div className="px-4 pt-3 pb-1">
                <p className="text-white/50 text-xs font-black uppercase tracking-widest">
                  Bro Myth #{featuredMyth.id}
                </p>
              </div>
              <div className="px-4 pb-4 flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <VerdictBadge verdict={featuredMyth.verdict} size="sm" />
                  </div>
                  <p className="text-white font-bold text-base md:text-lg leading-snug mb-1">
                    {featuredMyth.question}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                    {featuredMyth.answer}
                  </p>
                </div>
                <span className="text-white/40 group-hover:text-white/80 transition-colors mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* CTAs */}
          <div className="flex gap-3 mt-4">
            <Link
              href="/myths"
              className="flex-1 text-center min-h-[48px] flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 active:scale-95 transition-all shadow-lg"
            >
              Explore all myths
            </Link>
            <Link
              href="/supplements"
              className="flex-1 text-center min-h-[48px] flex items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm font-bold hover:bg-white/25 active:scale-95 transition-all"
            >
              Check supplements
            </Link>
          </div>
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
