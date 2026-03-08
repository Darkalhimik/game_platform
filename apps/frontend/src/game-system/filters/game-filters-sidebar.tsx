"use client";

import {
  SidebarHeader,
  SidebarSection,
  SidebarShell,
  type SidebarFilterValue,
} from "@/shared/ui";
import { gameFilterSections } from "./game-filter-config";
import type { GameFiltersState } from "./game-filter-types";

type GameFiltersSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  filters: GameFiltersState;
  onChange: (
    sectionId: keyof GameFiltersState,
    value: SidebarFilterValue,
  ) => void;
  onReset: () => void;
};

export function GameFiltersSidebar({
  isOpen,
  onClose,
  filters,
  onChange,
  onReset,
}: GameFiltersSidebarProps) {
  return (
    <SidebarShell isOpen={isOpen} onClose={onClose}>
      <SidebarHeader
        title="Game Filters"
        subtitle="Filter games by category and difficulty"
        actions={
          <button
            type="button"
            onClick={onReset}
            className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Reset
          </button>
        }
      />

      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {gameFilterSections.map((section) => (
          <SidebarSection
            key={section.id}
            section={section}
            value={filters[section.id as keyof GameFiltersState]}
            onChange={(sectionId, value) =>
              onChange(sectionId as keyof GameFiltersState, value)
            }
          />
        ))}
      </div>
    </SidebarShell>
  );
}