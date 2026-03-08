import type { LucideIcon } from "lucide-react";
import { BarChart3, Gamepad2, House, LogIn, Settings } from "lucide-react";

export type QuickNavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const gamePageQuickNavItems: QuickNavItem[] = [
  {
    href: "/",
    label: "Home",
    icon: House,
  },
  {
    href: "/games",
    label: "Games",
    icon: Gamepad2,
  },
  {
    href: "/statistics",
    label: "Statistics",
    icon: BarChart3,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
  },
  {
    href: "/auth",
    label: "Authorization",
    icon: LogIn,
  },
];
