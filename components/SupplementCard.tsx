import { Supplement } from "@/data/supplements";
import VerdictBadge from "./VerdictBadge";

interface SupplementCardProps {
  supplement: Supplement;
}

function getAmazonUrl(name: string) {
  const slug = name.toLowerCase().replace(/\s+/g, "+");
  return `https://www.amazon.com/s?k=${slug}&tag=broscience-20`;
}

export default function SupplementCard({ supplement }: SupplementCardProps) {
  return (
    <article className="flex flex-col gap-3 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-black text-gray-900 text-lg leading-tight">
          {supplement.name}
        </h3>
        <VerdictBadge verdict={supplement.verdict} size="md" />
      </div>

      <div className="space-y-2">
        <p className="text-sm text-gray-400 line-through leading-snug">
          &ldquo;{supplement.broMyth}&rdquo;
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          {supplement.reality}
        </p>
      </div>

      {supplement.hasAmazonLink && (
        <a
          href={getAmazonUrl(supplement.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center min-h-[48px] rounded-full bg-blue-600 text-white text-sm font-bold px-5 hover:bg-blue-500 active:scale-95 transition-all duration-150 shadow-sm"
          aria-label={`Buy ${supplement.name} on Amazon`}
        >
          Buy on Amazon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      )}
    </article>
  );
}
