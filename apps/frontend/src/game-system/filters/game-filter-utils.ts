import type { GameFiltersState } from "./game-filter-types";

export function createInitialGameFilters(): GameFiltersState {
  return {
    genre: null,
    players: null,
    difficulty: 5,
  };
}

export function resetGameFilters(): GameFiltersState {
  return createInitialGameFilters();
}