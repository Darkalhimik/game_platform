"use client";

import { Search, X } from "lucide-react";

type GameSearchWindowProps = {
  value: string;
  onChange: (nextValue: string) => void;
  onClear: () => void;
};

export function GameSearchWindow({
  value,
  onChange,
  onClear,
}: GameSearchWindowProps) {
  const hasValue = value.trim().length > 0;

  return (
    <div className="relative">
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50"
        aria-hidden="true"
      />

      <input
        id="games-search-input"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by name, genre, players or difficulty..."
        className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-12 text-base text-white placeholder:text-white/40 shadow-sm backdrop-blur-sm outline-none transition-all focus:border-white/25 focus:bg-white/10 focus:shadow-md focus:ring-2 focus:ring-white/10"
      />

      {hasValue ? (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-white/50 transition-all hover:bg-white/10 hover:text-white/80 active:scale-95"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
}
