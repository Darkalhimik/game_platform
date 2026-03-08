export type GameGenre = "arcade" | "cards" | "puzzle" | "strategy";

export type GameItem = {
  id: string;
  title: string;
  genre: GameGenre;
  players: number;
  difficulty: number;
};
