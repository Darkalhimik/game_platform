export type SidebarOption = {
  label: string;
  value: string;
};

type SidebarBaseSection = {
  id: string;
  title: string;
};

export type SidebarChipsSection = SidebarBaseSection & {
  type: "chips";
  options: SidebarOption[];
};

export type SidebarSelectSection = SidebarBaseSection & {
  type: "select";
  options: SidebarOption[];
  placeholder?: string;
};

export type SidebarRangeSection = SidebarBaseSection & {
  type: "range";
  min: number;
  max: number;
  step?: number;
  defaultValue?: number;
};

export type SidebarSectionType = "chips" | "select" | "range";

export type SidebarSectionConfig =
  | SidebarChipsSection
  | SidebarSelectSection
  | SidebarRangeSection;

export type SidebarFilterValue = string | number | null;

export type SidebarFiltersState = Record<string, SidebarFilterValue>;