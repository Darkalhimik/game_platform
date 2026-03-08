import type { GameFiltersState } from "@/game-system/filters";
import type { GameSortOption } from "@/game-system/search";

type AreGameCatalogControlsAtDefaultParams = {
  filters: GameFiltersState;
  searchQuery: string;
  sortOption: GameSortOption;
  defaultFilters: GameFiltersState;
  defaultSortOption: GameSortOption;
};

/**
 * Compares two filter states for equality.
 * Uses Object.keys to ensure all filter fields are checked.
 */
function areFiltersEqual(
  a: GameFiltersState,
  b: GameFiltersState,
): boolean {
  const keys = Object.keys(a) as Array<keyof GameFiltersState>;
  return keys.every((key) => a[key] === b[key]);
}

export function areGameCatalogControlsAtDefault({
  filters,
  searchQuery,
  sortOption,
  defaultFilters,
  defaultSortOption,
}: AreGameCatalogControlsAtDefaultParams): boolean {
  const isSearchDefault = searchQuery.trim() === "";
  const isSortDefault = sortOption === defaultSortOption;
  const areFiltersDefault = areFiltersEqual(filters, defaultFilters);

  return isSearchDefault && isSortDefault && areFiltersDefault;
}
