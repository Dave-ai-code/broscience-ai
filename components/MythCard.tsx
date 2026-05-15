import { Myth } from "@/data/myths";
import VerdictBadge from "./VerdictBadge";

interface MythCardProps {
  myth: Myth;
}

const thumbnails = [
  "1571019613454-1cb2f99b2d8b",
  "1544367567-0f2fcb009e0b",
  "1583454110551-21f2fa2afe61",
  "1549060279-7e168fcee0c2",
];

export default function MythCard({ myth }: MythCardProps) {
  const thumb = thumbnails[(myth.id - 1) % thumbnails.length];

  return (
    <article className="group flex gap-4 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex-1 flex flex-col gap-2 min-w-0">
        <VerdictBadge verdict={myth.verdict} />
        <h3 className="font-bold text-gray-900 text-base leading-snug line-clamp-2">
          {myth.question}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {myth.answer}
        </p>
        <p className="text-xs text-gray-400 font-medium mt-auto pt-1">
          — {myth.source}
        </p>
      </div>
      <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-gray-100 self-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://images.unsplash.com/photo-${thumb}?w=160&q=75`}
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          width={80}
          height={80}
        />
      </div>
    </article>
  );
}
