export type SidebarOption = {
  label: string;
  value: string;
};

export type SidebarSectionConfig = {
  id: string;
  title: string;
  type: "chips" | "select" | "range";
  options?: SidebarOption[];
};