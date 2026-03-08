import { BarChart3, Gamepad2, House, LogIn, Settings } from "lucide-react";

export type NavigationItem = {
  id: string;
  href: string;
  label: string;
  description?: string;
  icon: React.ComponentType<{ className?: string }>;
};

/**
 * Canonical navigation structure for the application.
 * Used by both quick nav and home menu to ensure consistency.
 */
export const navigationConfig: readonly NavigationItem[] = [
  {
    id: "home",
    href: "/",
    label: "Home",
    icon: House,
  },
  {
    id: "games",
    href: "/games",
    label: "Games",
    description: "Browse available games and start playing solo or with others.",
    icon: Gamepad2,
  },
  {
    id: "statistics",
    href: "/statistics",
    label: "Statistics",
    description: "View play history, session data, and platform statistics.",
    icon: BarChart3,
  },
  {
    id: "settings",
    href: "/settings",
    label: "Settings",
    description: "Manage preferences, appearance, and platform configuration.",
    icon: Settings,
  },
  {
    id: "account",
    href: "/auth",
    label: "Account",
    description: "Sign in, create an account, and manage your access.",
    icon: LogIn,
  },
];

export const mainNavigationItems = navigationConfig.filter(
  (item) => item.id !== "home"
);
