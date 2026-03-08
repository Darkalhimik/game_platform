import type { GameGenre } from "@/entities";
import type { GamePlayersFilter } from "@/game-system/filters";
import { genreLabels, playersLabels } from "@/shared/config";

/**
 * Runtime list of allowed game genres.
 * Automatically derived from centralized display config.
 */
export const allowedGameGenres: readonly GameGenre[] = Object.keys(
  genreLabels,
) as GameGenre[];

/**
 * Runtime list of allowed player filter values.
 * Automatically derived from centralized display config.
 */
export const allowedGamePlayers: readonly NonNullable<GamePlayersFilter>[] =
  Object.keys(playersLabels) as NonNullable<GamePlayersFilter>[];

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
