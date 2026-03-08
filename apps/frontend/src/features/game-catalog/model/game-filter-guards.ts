import type { GameGenre } from "@/entities";
import type { GamePlayersFilter } from "@/game-system/filters";

export const allowedGameGenres: readonly GameGenre[] = [
  "arcade",
  "cards",
  "puzzle",
  "strategy",
];

export const allowedGamePlayers: readonly NonNullable<GamePlayersFilter>[] = [
  "1",
  "2",
  "3plus",
];

const allowedGameGenresSet = new Set<GameGenre>(allowedGameGenres);
const allowedGamePlayersSet = new Set<NonNullable<GamePlayersFilter>>(
  allowedGamePlayers,
);

export function isGameGenre(value: string): value is GameGenre {
  return allowedGameGenresSet.has(value as GameGenre);
}

export function isGamePlayersFilter(
  value: string,
): value is NonNullable<GamePlayersFilter> {
  return allowedGamePlayersSet.has(value as NonNullable<GamePlayersFilter>);
}
