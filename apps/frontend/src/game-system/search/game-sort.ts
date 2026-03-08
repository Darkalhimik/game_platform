import type { GameItem } from "@/entities";

export type GameSortOption =
  | "title-asc"
  | "title-desc"
  | "genre-asc"
  | "players-asc"
  | "players-desc"
  | "difficulty-asc"
  | "difficulty-desc";

function sortByText(
  left: string,
  right: string,
  direction: "asc" | "desc",
): number {
  const result = left.localeCompare(right, undefined, {
    sensitivity: "base",
    numeric: true,
  });

  return direction === "asc" ? result : -result;
}

export function sortGames(games: GameItem[], option: GameSortOption): GameItem[] {
  const sorted = [...games];

  sorted.sort((left, right) => {
    switch (option) {
      case "title-asc":
        return sortByText(left.title, right.title, "asc");
      case "title-desc":
        return sortByText(left.title, right.title, "desc");
      case "genre-asc": {
        const genreCompare = sortByText(left.genre, right.genre, "asc");
        if (genreCompare !== 0) {
          return genreCompare;
        }
        return sortByText(left.title, right.title, "asc");
      }
      case "players-asc": {
        const playersCompare = left.players - right.players;
        if (playersCompare !== 0) {
          return playersCompare;
        }
        return sortByText(left.title, right.title, "asc");
      }
      case "players-desc": {
        const playersCompare = right.players - left.players;
        if (playersCompare !== 0) {
          return playersCompare;
        }
        return sortByText(left.title, right.title, "asc");
      }
      case "difficulty-asc": {
        const difficultyCompare = left.difficulty - right.difficulty;
        if (difficultyCompare !== 0) {
          return difficultyCompare;
        }
        return sortByText(left.title, right.title, "asc");
      }
      case "difficulty-desc": {
        const difficultyCompare = right.difficulty - left.difficulty;
        if (difficultyCompare !== 0) {
          return difficultyCompare;
        }
        return sortByText(left.title, right.title, "asc");
      }
      default:
        return 0;
    }
  });

  return sorted;
}
