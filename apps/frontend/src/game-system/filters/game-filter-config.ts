import type { SidebarSectionConfig } from "@/shared/ui";

export const gameFilterSections: SidebarSectionConfig[] = [
  {
    id: "genre",
    title: "Genre",
    type: "chips",
    options: [
      { label: "Arcade", value: "arcade" },
      { label: "Cards", value: "cards" },
      { label: "Puzzle", value: "puzzle" },
      { label: "Strategy", value: "strategy" },
    ],
  },
  {
    id: "players",
    title: "Players",
    type: "select",
    placeholder: "Choose players count",
    options: [
      { label: "1 Player", value: "1" },
      { label: "2 Players", value: "2" },
      { label: "3+ Players", value: "3plus" },
    ],
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