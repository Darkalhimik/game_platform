import type { GameItem } from "@/entities";
import {
  filterGames,
  type GameFiltersState,
} from "@/game-system/filters";
import { searchGames, sortGames, type GameSortOption } from "@/game-system/search";

type ApplyGameCatalogPipelineParams = {
  games: GameItem[];
  filters: GameFiltersState;
  searchQuery: string;
  sortOption: GameSortOption;
};

/**
 * Canonical order of game catalog pipeline operations:
 * 1. Filter by configured filters (genre, players, difficulty)
 * 2. Search by query string (title, description, etc.)
 * 3. Sort by selected option
 *
 * This order ensures optimal performance and user-expected results.
 */
export function applyGameCatalogPipeline({
  games,
  filters,
  searchQuery,
  sortOption,
}: ApplyGameCatalogPipelineParams): GameItem[] {
  const byFilters = filterGames(games, filters);
  const bySearch = searchGames(byFilters, searchQuery);
  return sortGames(bySearch, sortOption);
}
