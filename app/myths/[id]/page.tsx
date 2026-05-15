import Link from "next/link";
import { notFound } from "next/navigation";
import { myths } from "@/data/myths";
import VerdictBadge from "@/components/VerdictBadge";
import MythCard from "@/components/MythCard";

export function generateStaticParams() {
  return myths.map((m) => ({ id: String(m.id) }));
}

const verdictMeta: Record<string, { headline: string; detail: string }> = {
  Debunked: {
    headline: "This is a myth.",
    detail: "The scientific evidence does not support this claim.",
  },
  Partial: {
    headline: "There's some truth here.",
    detail: "The science is nuanced — context matters a lot.",
  },
  Legit: {
    headline: "This one checks out.",
    detail: "Research backs this up pretty well.",
  },
};

const heroIds = [
  "1571019613454-1cb2f99b2d8b",
  "1544367567-0f2fcb009e0b",
  "1583454110551-21f2fa2afe61",
  "1549060279-7e168fcee0c2",
];

export default async function MythDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const myth = myths.find((m) => m.id === Number(id));
  if (!myth) notFound();

  const meta = verdictMeta[myth.verdict];
  const heroId = heroIds[(myth.id - 1) % heroIds.length];
  const related = myths.filter((m) => m.id !== myth.id && m.verdict === myth.verdict).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ─── HERO ── */}
      <div className="relative h-64 md:h-80 bg-gray-900 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://images.unsplash.com/photo-${heroId}?w=1200&q=80`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
        <div className="relative z-10 h-full flex flex-col justify-end px-4 pb-6 mx-auto max-w-3xl">
          <Link
            href="/myths"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-semibold mb-4 transition-colors w-fit"
          >
            ← Back to Myth Lab
          </Link>
          <VerdictBadge verdict={myth.verdict} size="md" />
        </div>
      </div>

      {/* ─── CONTENT ── */}
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-6">
          {myth.question}
        </h1>

        {/* Verdict callout */}
        <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5 mb-6">
          <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-1">
            The verdict
          </p>
          <p className="font-bold text-gray-900 text-lg mb-1">{meta.headline}</p>
          <p className="text-gray-500 text-sm">{meta.detail}</p>
        </div>

        {/* Full answer */}
        <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5 mb-6">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">
            What the science says
          </p>
          <p className="text-gray-800 text-base leading-relaxed">{myth.answer}</p>
        </div>

        {/* Source */}
        <div className="rounded-2xl bg-blue-50 border border-blue-100 p-4 mb-10">
          <p className="text-xs font-black uppercase tracking-widest text-blue-500 mb-1">
            Source
          </p>
          <p className="text-blue-900 text-sm font-semibold">{myth.source}</p>
        </div>

        {/* Related myths */}
        {related.length > 0 && (
          <section>
            <h2 className="text-lg font-black text-gray-900 mb-4">
              More {myth.verdict.toLowerCase()} myths
            </h2>
            <div className="flex flex-col gap-3">
              {related.map((m) => (
                <MythCard key={m.id} myth={m} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
