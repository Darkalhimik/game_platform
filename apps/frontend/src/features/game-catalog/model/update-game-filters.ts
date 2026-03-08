import type { GameFiltersState } from "@/game-system/filters";
import { isGameGenre, isGamePlayersFilter } from "./game-filter-guards";

export type GameFilterChangeValue = string | number | null;

/**
 * Updates a single filter value in the game filters state.
 * Uses runtime guards to validate filter values at the domain boundary.
 */
export function updateGameFilters(
  prev: GameFiltersState,
  sectionId: keyof GameFiltersState,
  value: GameFilterChangeValue,
): GameFiltersState {
  switch (sectionId) {
    case "genre": {
      const nextGenre =
        value === null ? null : typeof value === "string" && isGameGenre(value) ? value : prev.genre;
      return { ...prev, genre: nextGenre };
    }

    case "players": {
      const nextPlayers =
        value === null
          ? null
          : typeof value === "string" && isGamePlayersFilter(value)
            ? value
            : prev.players;
      return { ...prev, players: nextPlayers };
    }

    case "difficulty": {
      const nextDifficulty = typeof value === "number" ? value : prev.difficulty;
      return { ...prev, difficulty: nextDifficulty };
    }

    default: {
      const exhaustiveCheck: never = sectionId;
      return exhaustiveCheck;
    }
  }
}
