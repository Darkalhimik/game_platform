"use client";

import type { GameItem } from "@/entities";

/**
 * Helper functions for formatting game catalog display values
 */
const formatters = {
  genre: (genre: string): string => {
    const genreMap: Record<string, string> = {
      arcade: "Arcade",
      cards: "Cards",
      puzzle: "Puzzle",
      strategy: "Strategy",
    };
    return genreMap[genre] || genre;
  },

  players: (players: number | string): string => {
    if (typeof players === "string") {
      const playersMap: Record<string, string> = {
        "1": "Single Player",
        "2": "2 Players",
        "3plus": "3+ Players",
      };
      return playersMap[players] || String(players);
    }
    return String(players);
  },
};

interface GameCatalogCardProps {
  game: GameItem;
}

export function GameCatalogCard({ game }: GameCatalogCardProps) {
  return (
    <article className="group flex min-h-40 flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/8 hover:shadow-xl">
      <div>
        <h2 className="text-xl font-semibold text-white">{game.title}</h2>

        <div className="mt-4 space-y-2 text-sm leading-relaxed text-white/65">
          <p>
            <span className="font-medium text-white/80">Genre:</span>{" "}
            <span>{formatters.genre(game.genre)}</span>
          </p>
          <p>
            <span className="font-medium text-white/80">Players:</span>{" "}
            <span>{formatters.players(game.players)}</span>
          </p>
          <p>
            <span className="font-medium text-white/80">Difficulty:</span>{" "}
            <span>{game.difficulty}/10</span>
          </p>
        </div>
      </div>

      <div className="mt-4 border-t border-white/10 pt-4">
        <span className="inline-flex items-center text-sm font-medium text-white/75 transition group-hover:text-white">
          View details
          <span className="ml-1 transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </article>
  );
}
