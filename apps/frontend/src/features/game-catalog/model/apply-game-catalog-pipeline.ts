import type { GameItem } from "@/entities";
import {
  filterGames,
  type GameFiltersState,
} from "@/game-system/filters";
import { searchGames, sortGames, type GameSortOption } from "@/game-system/search";

type ApplyGameCatalogPipelineParams = {
  games: GameItem[];
  filters: GameFiltersState;
  query: string;
  sortOption: GameSortOption;
};

export function applyGameCatalogPipeline({
  games,
  filters,
  query,
  sortOption,
}: ApplyGameCatalogPipelineParams): GameItem[] {
  const byFilters = filterGames(games, filters);
  const bySearch = searchGames(byFilters, query);
  return sortGames(bySearch, sortOption);
}
