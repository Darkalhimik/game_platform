import type { GameFiltersState, GameItem } from "./game-filter-types";

export function filterGames(
  games: GameItem[],
  filters: GameFiltersState,
): GameItem[] {
  return games.filter((game) => {
    const matchesGenre =
      filters.genre === null || game.genre === filters.genre;

    const matchesPlayers =
      filters.players === null ||
      (filters.players === "3plus"
        ? game.players >= 3
        : String(game.players) === filters.players);

    const matchesDifficulty = game.difficulty <= filters.difficulty;

    return matchesGenre && matchesPlayers && matchesDifficulty;
  });
}