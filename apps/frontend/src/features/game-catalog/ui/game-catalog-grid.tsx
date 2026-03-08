import type { GameItem } from "@/entities";

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
        <article
          key={game.id}
          className="group flex min-h-40 flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/8 hover:shadow-xl"
        >
          <div>
            <h2 className="text-xl font-semibold text-white">{game.title}</h2>

            <div className="mt-4 space-y-2 text-sm leading-relaxed text-white/65">
              <p>
                <span className="font-medium text-white/80">Genre:</span>{" "}
                <span className="capitalize">{game.genre}</span>
              </p>
              <p>
                <span className="font-medium text-white/80">Players:</span> {game.players}
              </p>
              <p>
                <span className="font-medium text-white/80">Difficulty:</span>{" "}
                {game.difficulty}/10
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
      ))}
    </div>
  );
}
