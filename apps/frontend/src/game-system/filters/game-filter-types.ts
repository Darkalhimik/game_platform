import type { GameGenre, GameItem } from "@/entities";

export type { GameGenre, GameItem };

export type GamePlayersFilter = "1" | "2" | "3plus" | null;

export type GameFiltersState = {
  genre: GameGenre | null;
  players: GamePlayersFilter;
  difficulty: number;
};