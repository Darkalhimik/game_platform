import type { GameFiltersState } from "@/game-system/filters";
import { isGameGenre, isGamePlayersFilter } from "./game-filter-guards";

export type GameFilterChangeValue = string | number | null;

export function updateGameFilters(
  prev: GameFiltersState,
  sectionId: keyof GameFiltersState,
  value: GameFilterChangeValue,
): GameFiltersState {
  return {
    ...prev,
    genre:
      sectionId === "genre"
        ? value === null
          ? null
          : typeof value === "string" && isGameGenre(value)
            ? value
            : prev.genre
        : prev.genre,
    players:
      sectionId === "players"
        ? value === null
          ? null
          : typeof value === "string" && isGamePlayersFilter(value)
            ? value
            : prev.players
        : prev.players,
    difficulty:
      sectionId === "difficulty" && typeof value === "number"
        ? value
        : prev.difficulty,
  };
}
