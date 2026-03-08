import type {
  SidebarFiltersState,
  SidebarSectionConfig,
} from "./sidebar-types";

export function buildInitialSidebarFilters(
  sections: SidebarSectionConfig[],
): SidebarFiltersState {
  return sections.reduce<SidebarFiltersState>((acc, section) => {
    if (section.type === "range") {
      acc[section.id] = section.defaultValue ?? section.min ?? 0;
      return acc;
    }

    acc[section.id] = null;
    return acc;
  }, {});
}

export function toggleChipValue(
  currentValue: string | null,
  nextValue: string,
): string | null {
  return currentValue === nextValue ? null : nextValue;
}

export function resetSidebarFilters(
  sections: SidebarSectionConfig[],
): SidebarFiltersState {
  return buildInitialSidebarFilters(sections);
}