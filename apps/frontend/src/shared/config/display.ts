import type { GameGenre } from "@/entities";
import type { GamePlayersFilter } from "@/game-system/filters";
import type { GameSortOption } from "@/game-system/search";

/**
 * Centralized display configuration for game catalog
 * Single source of truth for all user-facing labels and formatters
 */

// Genre display configuration
export const genreLabels: Record<GameGenre, string> = {
  arcade: "Arcade",
  cards: "Cards",
  puzzle: "Puzzle",
  strategy: "Strategy",
};

export function formatGenre(genre: GameGenre): string {
  return genreLabels[genre] || genre;
}

// Players display configuration
export const playersLabels: Record<NonNullable<GamePlayersFilter>, string> = {
  "1": "Single Player",
  "2": "2 Players",
  "3plus": "3+ Players",
};

export function formatPlayers(players: GamePlayersFilter): string {
  if (players === null) return "Any";
  return playersLabels[players] || String(players);
}

// Sort options configuration
export type SortOptionConfig = {
  value: GameSortOption;
  label: string;
};

export const sortOptionsConfig: readonly SortOptionConfig[] = [
  { value: "title-asc", label: "Name (A-Z)" },
  { value: "title-desc", label: "Name (Z-A)" },
  { value: "genre-asc", label: "Genre (A-Z)" },
  { value: "players-asc", label: "Players (Low to High)" },
  { value: "players-desc", label: "Players (High to Low)" },
  { value: "difficulty-asc", label: "Difficulty (Easy to Hard)" },
  { value: "difficulty-desc", label: "Difficulty (Hard to Easy)" },
];

// Difficulty display configuration
export function formatDifficulty(difficulty: number): string {
  return `${difficulty}/10`;
}

// Filter section labels
export const filterSectionLabels = {
  genre: "Genre",
  players: "Players",
  difficulty: "Difficulty",
} as const;
