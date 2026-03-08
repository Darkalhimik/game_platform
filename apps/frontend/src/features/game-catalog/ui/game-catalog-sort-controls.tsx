"use client";

import { ArrowUpDown } from "lucide-react";
import type { GameSortOption } from "@/game-system/search";

type SortOptionItem = {
  value: GameSortOption;
  label: string;
};

const sortOptions: SortOptionItem[] = [
  { value: "title-asc", label: "Name (A-Z)" },
  { value: "title-desc", label: "Name (Z-A)" },
  { value: "genre-asc", label: "Genre (A-Z)" },
  { value: "players-asc", label: "Players (Low to High)" },
  { value: "players-desc", label: "Players (High to Low)" },
  { value: "difficulty-asc", label: "Difficulty (Easy to Hard)" },
  { value: "difficulty-desc", label: "Difficulty (Hard to Easy)" },
];

type GameCatalogSortControlsProps = {
  value: GameSortOption;
  onChange: (nextValue: GameSortOption) => void;
};

export function GameCatalogSortControls({
  value,
  onChange,
}: GameCatalogSortControlsProps) {
  return (
    <div className="relative inline-flex min-w-60">
      <ArrowUpDown
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
        aria-hidden="true"
      />

      <select
        id="games-sort-select"
        value={value}
        onChange={(event) => onChange(event.target.value as GameSortOption)}
        className="w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-10 text-sm font-medium text-white/90 shadow-sm backdrop-blur-sm outline-none transition-all hover:border-white/20 hover:bg-white/8 focus:border-white/25 focus:bg-white/10 focus:ring-2 focus:ring-white/10"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value} className="bg-gray-900 text-white">
            {option.label}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
        <svg
          className="h-4 w-4 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
