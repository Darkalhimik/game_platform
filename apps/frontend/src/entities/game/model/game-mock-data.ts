import type { GameItem } from "./game-types";

export const mockGameCatalog: GameItem[] = [
  {
    id: "1",
    title: "Snake",
    genre: "arcade",
    players: 1,
    difficulty: 2,
  },
  {
    id: "2",
    title: "Chess",
    genre: "strategy",
    players: 2,
    difficulty: 7,
  },
  {
    id: "3",
    title: "Poker",
    genre: "cards",
    players: 4,
    difficulty: 6,
  },
  {
    id: "4",
    title: "2048",
    genre: "puzzle",
    players: 1,
    difficulty: 4,
  },
  {
    id: "5",
    title: "Checkers",
    genre: "strategy",
    players: 2,
    difficulty: 3,
  },
  {
    id: "6",
    title: "Memory Cards",
    genre: "cards",
    players: 1,
    difficulty: 1,
  },
];
