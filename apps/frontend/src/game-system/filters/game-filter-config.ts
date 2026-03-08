import type { SidebarSectionConfig } from "@/shared/ui";
import { genreLabels, playersLabels } from "@/shared/config";
import type { GameGenre } from "@/entities";
import type { GamePlayersFilter } from "./game-filter-types";

// Build genre options from centralized display config
const genreOptions = (Object.keys(genreLabels) as GameGenre[]).map((genre) => ({
  label: genreLabels[genre],
  value: genre,
}));

// Build players options from centralized display config
const playersOptions = (Object.keys(playersLabels) as NonNullable<GamePlayersFilter>[]).map((players) => ({
  label: playersLabels[players],
  value: players,
}));

export const gameFilterSections: SidebarSectionConfig[] = [
  {
    id: "genre",
    title: "Genre",
    type: "chips",
    options: genreOptions,
  },
  {
    id: "players",
    title: "Players",
    type: "select",
    placeholder: "Choose players count",
    options: playersOptions,
  },
  {
    id: "difficulty",
    title: "Difficulty",
    type: "range",
    min: 1,
    max: 10,
    step: 1,
    defaultValue: 5,
  },
];