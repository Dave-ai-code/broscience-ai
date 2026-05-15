interface SearchResultProps {
  query: string;
  broAnswer: string;
  scienceAnswer: string;
  onClear: () => void;
}

export default function SearchResult({
  query,
  broAnswer,
  scienceAnswer,
  onClear,
}: SearchResultProps) {
  return (
    <div className="w-full mt-4 rounded-2xl overflow-hidden shadow-xl animate-[fadeIn_0.25s_ease-out]">
      {/* Query header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/10 px-4 py-2.5 flex items-center justify-between">
        <p className="text-white/70 text-xs font-semibold uppercase tracking-wider truncate max-w-[80%]">
          &ldquo;{query}&rdquo;
        </p>
        <button
          onClick={onClear}
          aria-label="Clear search result"
          className="text-white/50 hover:text-white transition-colors text-xs font-bold"
        >
          ✕
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Bro answer */}
        <div className="bg-blue-600/90 backdrop-blur-sm p-4 sm:border-r border-white/10">
          <p className="text-xs font-black uppercase tracking-widest text-blue-200 mb-2">
            🤙 Bro Says
          </p>
          <p className="text-white text-sm leading-relaxed font-medium">
            {broAnswer}
          </p>
        </div>

        {/* Science answer */}
        <div className="bg-gray-900/80 backdrop-blur-sm p-4">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
            🔬 Science Says
          </p>
          <p className="text-gray-200 text-sm leading-relaxed">
            {scienceAnswer}
          </p>
        </div>
      </div>
    </div>
  );
}
