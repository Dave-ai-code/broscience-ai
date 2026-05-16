import Link from "next/link";
import MythCard from "@/components/MythCard";
import SupplementCard from "@/components/SupplementCard";
import StatsBar from "@/components/StatsBar";
import HeroSearch from "@/components/HeroSearch";
import { myths } from "@/data/myths";
import { supplements } from "@/data/supplements";

const latestMyths = myths.slice(0, 6);
const featuredSupplements = supplements.slice(0, 4);

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ── */}
      <section className="px-[18px] pt-8 pb-8">
        <p
          className="text-[11px] uppercase tracking-[0.12em] font-medium mb-5"
          style={{ color: "var(--muted)", fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          AI · FITNESS MYTH-BUSTING
        </p>

        <h1
          className="font-bold leading-[1.02] tracking-[-0.04em] mb-4"
          style={{ color: "var(--ink)", fontSize: "clamp(32px, 8vw, 48px)" }}
        >
          Half the gym<br />is wrong.<br />
          <em
            className="not-italic"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 700,
            }}
          >
            Find out which half.
          </em>
        </h1>

        <p
          className="text-[15px] leading-[1.6] mb-7 max-w-sm"
          style={{ color: "var(--muted)" }}
        >
          Ask any fitness question. We pit the loudest guy in the gym against
          actual peer-reviewed research.
        </p>

        <HeroSearch />
      </section>

      {/* ─── STATS ── */}
      <StatsBar />

      {/* ─── LATEST MYTHS ── */}
      <section className="px-[18px] pt-6 pb-4">
        <div className="flex items-end justify-between mb-4">
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.1em] font-semibold mb-1"
              style={{ color: "var(--muted-2)", fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Research-backed
            </p>
            <h2
              className="text-[22px] font-semibold tracking-[-0.02em]"
              style={{ color: "var(--ink)" }}
            >
              Myth Lab
            </h2>
          </div>
          <Link
            href="/myths"
            className="text-[12px] font-semibold uppercase tracking-[0.06em] transition-opacity hover:opacity-70"
            style={{ color: "var(--muted)", fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            See all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {latestMyths.map((myth) => (
            <MythCard key={myth.id} myth={myth} />
          ))}
        </div>
      </section>

      {/* ─── SUPPLEMENTS ── */}
      <section className="px-[18px] pt-6 pb-4">
        <div className="flex items-end justify-between mb-4">
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.1em] font-semibold mb-1"
              style={{ color: "var(--muted-2)", fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Evidence-rated
            </p>
            <h2
              className="text-[22px] font-semibold tracking-[-0.02em]"
              style={{ color: "var(--ink)" }}
            >
              Supplement picks
            </h2>
          </div>
          <Link
            href="/supplements"
            className="text-[12px] font-semibold uppercase tracking-[0.06em] transition-opacity hover:opacity-70"
            style={{ color: "var(--muted)", fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            See all →
          </Link>
        </div>

        <div
          className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {featuredSupplements.map((supp) => (
            <div key={supp.id} className="flex-shrink-0 w-72 md:w-auto">
              <SupplementCard supplement={supp} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
