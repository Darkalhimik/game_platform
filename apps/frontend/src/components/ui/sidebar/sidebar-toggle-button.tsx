"use client";

import { PanelLeft } from "lucide-react";

type SidebarToggleButtonProps = {
  onClick: () => void;
  ariaLabel?: string;
};

export function SidebarToggleButton({
  onClick,
  ariaLabel = "Open sidebar",
}: SidebarToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="
        inline-flex h-12 w-12 items-center justify-center
        rounded-xl border border-white/10
        bg-white/5 text-white/80 shadow-md backdrop-blur-sm
        transition-all duration-200
        hover:-translate-y-0.5 hover:border-white/20
        hover:bg-white/10 hover:text-white hover:shadow-lg
        active:translate-y-0 active:scale-95
      "
    >
      <PanelLeft className="h-5 w-5" />
    </button>
  );
}