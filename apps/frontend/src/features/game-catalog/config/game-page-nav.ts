import type { NavigationItem } from "@/shared/config/navigation";
import { navigationConfig } from "@/shared/config/navigation";

export type QuickNavItem = NavigationItem;

/**
 * Quick navigation items for game pages.
 * All items including home for page navigation purposes.
 */
export const gamePageQuickNavItems: readonly QuickNavItem[] = navigationConfig;

