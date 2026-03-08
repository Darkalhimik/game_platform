import type { GameFiltersState } from "@/game-system/filters";

type GameCatalogActiveFiltersSummaryProps = {
  filters: GameFiltersState;
  searchQuery: string;
  defaultDifficulty: number;
};

const playersLabelByValue: Record<Exclude<GameFiltersState["players"], null>, string> = {
  "1": "1 player",
  "2": "2 players",
  "3plus": "3+ players",
};

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function GameCatalogActiveFiltersSummary({
  filters,
  searchQuery,
  defaultDifficulty,
}: GameCatalogActiveFiltersSummaryProps) {
  const activeItems: string[] = [];
  const trimmedQuery = searchQuery.trim();

  if (trimmedQuery.length > 0) {
    activeItems.push(`Search: "${trimmedQuery}"`);
  }

  if (filters.genre !== null) {
    activeItems.push(`Genre: ${capitalize(filters.genre)}`);
  }

  if (filters.players !== null) {
    activeItems.push(`Players: ${playersLabelByValue[filters.players]}`);
  }

  if (filters.difficulty !== defaultDifficulty) {
    activeItems.push(`Difficulty: up to ${filters.difficulty}`);
  }

  if (activeItems.length === 0) {
    return null;
  }

  return (
    <section className="mb-5 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
          Active filters
        </span>
        {activeItems.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-white/15 bg-white/8 px-2.5 py-1 text-xs text-white/80"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
