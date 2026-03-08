"use client";

import type { GameItem } from "@/entities";
import { formatGenre, formatDifficulty } from "@/shared/config";

interface GameCatalogCardProps {
  game: GameItem;
}

export function GameCatalogCard({ game }: GameCatalogCardProps) {
  return (
    <article className="group flex min-h-40 flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-all hover:border-white/15 hover:bg-white/7">
      <div>
        <h2 className="text-xl font-semibold text-white">{game.title}</h2>

        <div className="mt-4 space-y-2 text-sm leading-relaxed text-white/65">
          <p>
            <span className="font-medium text-white/80">Genre:</span>{" "}
            <span>{formatGenre(game.genre)}</span>
          </p>
          <p>
            <span className="font-medium text-white/80">Players:</span>{" "}
            <span>{game.players}</span>
          </p>
          <p>
            <span className="font-medium text-white/80">Difficulty:</span>{" "}
            <span>{formatDifficulty(game.difficulty)}</span>
          </p>
        </div>
      </div>
    </article>
  );
}
