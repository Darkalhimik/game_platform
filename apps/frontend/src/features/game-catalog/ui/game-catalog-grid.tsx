import type { GameItem } from "@/entities";
import { GameCatalogCard } from "./game-catalog-card";

interface GameCatalogGridProps {
  games: GameItem[];
}

export function GameCatalogGrid({ games }: GameCatalogGridProps) {
  if (games.length === 0) {
    return (
      <div className="flex min-h-75 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm">
        <div>
          <p className="text-lg font-medium text-white/80">No games found</p>
          <p className="mt-2 text-sm text-white/50">
            Try adjusting your filters or search query
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {games.map((game) => (
        <GameCatalogCard key={game.id} game={game} />
      ))}
    </div>
  );
}
