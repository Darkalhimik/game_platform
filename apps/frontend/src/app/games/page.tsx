"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { mockGameCatalog } from "@/entities";
import {
  GameFiltersSidebar,
  initialGameFilters,
  type GameFiltersState,
} from "@/game-system/filters";
import { type GameSortOption } from "@/game-system/search";
import {
  areGameCatalogControlsAtDefault,
  GameCatalogActiveFiltersSummary,
  applyGameCatalogPipeline,
  GameCatalogGrid,
  GameCatalogSearch,
  GameCatalogSortControls,
  updateGameFilters,
} from "@/features/game-catalog";
import { navigationConfig } from "@/shared/config";
import { IconNavButton, SidebarToggleButton } from "@/shared/ui";

const defaultSortOption: GameSortOption = "title-asc";

export default function GamesPage() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState<GameFiltersState>(initialGameFilters);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<GameSortOption>(defaultSortOption);

  function handleFilterChange(
    sectionId: keyof GameFiltersState,
    value: string | number | null,
  ) {
    setFilters((prev: GameFiltersState) => updateGameFilters(prev, sectionId, value));
  }

  function handleResetFilters() {
    setFilters(initialGameFilters);
  }

  function handleResetAllControls() {
    setFilters(initialGameFilters);
    setSearchQuery("");
    setSortOption(defaultSortOption);
  }

  function isNavItemActive(href: string): boolean {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const filteredGames = useMemo(() => {
    return applyGameCatalogPipeline({
      games: mockGameCatalog,
      filters,
      searchQuery,
      sortOption,
    });
  }, [filters, searchQuery, sortOption]);

  const isResetAllDisabled = areGameCatalogControlsAtDefault({
    filters,
    searchQuery,
    sortOption,
    defaultFilters: initialGameFilters,
    defaultSortOption,
  });

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(to_bottom,#111827,#030712)] text-white">
      <GameFiltersSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        filters={filters}
        onChange={handleFilterChange}
        onReset={handleResetFilters}
      />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <SidebarToggleButton onClick={() => setIsSidebarOpen(true)} />
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.25em] text-white/50">
                  Game catalog
                </p>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Games
                </h1>
              </div>
            </div>

            <nav className="flex items-center gap-2" aria-label="Quick navigation">
              {navigationConfig.map((item) => {
                const Icon = item.icon;

                return (
                  <IconNavButton
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    icon={<Icon className="h-4 w-4" />}
                    isActive={isNavItemActive(item.href)}
                  />
                );
              })}
            </nav>
          </div>
        </header>

        {/* Search & Controls */}
        <div className="mb-6 space-y-4">
          <GameCatalogSearch
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery("")}
          />

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-white/60">
              Showing{" "}
              <span className="font-semibold text-white/90">
                {filteredGames.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-white/90">
                {mockGameCatalog.length}
              </span>{" "}
              games
            </div>

            <div className="flex items-end gap-2">
              <GameCatalogSortControls value={sortOption} onChange={setSortOption} />
              <button
                type="button"
                onClick={handleResetAllControls}
                disabled={isResetAllDisabled}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium text-white/75 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:border-white/5 disabled:bg-white/3 disabled:text-white/35 disabled:hover:border-white/5 disabled:hover:bg-white/3"
              >
                Reset all
              </button>
            </div>
          </div>
        </div>

        <GameCatalogActiveFiltersSummary
          filters={filters}
          searchQuery={searchQuery}
          defaultDifficulty={initialGameFilters.difficulty}
        />

        {/* Game Grid */}
        <main className="flex-1 pb-8">
          <GameCatalogGrid games={filteredGames} />
        </main>
      </div>
    </div>
  );
}