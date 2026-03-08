import type { GameFiltersState } from "@/game-system/filters";
import type { GameSortOption } from "@/game-system/search";

type AreGameCatalogControlsAtDefaultParams = {
  filters: GameFiltersState;
  searchQuery: string;
  sortOption: GameSortOption;
  defaultFilters: GameFiltersState;
  defaultSortOption: GameSortOption;
};

export function areGameCatalogControlsAtDefault({
  filters,
  searchQuery,
  sortOption,
  defaultFilters,
  defaultSortOption,
}: AreGameCatalogControlsAtDefaultParams): boolean {
  const isSearchDefault = searchQuery.trim() === "";
  const isSortDefault = sortOption === defaultSortOption;
  const areFiltersDefault =
    filters.genre === defaultFilters.genre &&
    filters.players === defaultFilters.players &&
    filters.difficulty === defaultFilters.difficulty;

  return isSearchDefault && isSortDefault && areFiltersDefault;
}
