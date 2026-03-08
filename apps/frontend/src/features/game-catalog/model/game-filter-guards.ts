import type { GameGenre } from "@/entities";
import type { GamePlayersFilter } from "@/game-system/filters";

/**
 * Runtime list of allowed game genres.
 * 
 * IMPORTANT: Must be kept in sync with GameGenre type in @/entities/game/model/game-types.ts
 * If you add a new genre to the type, add it here too.
 */
export const allowedGameGenres: readonly GameGenre[] = [
  "arcade",
  "cards",
  "puzzle",
  "strategy",
];

/**
 * Runtime list of allowed player filter values.
 * 
 * IMPORTANT: Must be kept in sync with GamePlayersFilter type in @/game-system/filters
 * If you add a new player filter, add it here too.
 */
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
