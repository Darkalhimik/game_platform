"use client";

type SidebarChipButtonProps = {
  label: string;
  active?: boolean;
  onClick: () => void;
};

export function SidebarChipButton({
  label,
  active = false,
  onClick,
}: SidebarChipButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-200",
        active
          ? "border-white/30 bg-white/20 text-white shadow-sm"
          : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95",
      ].join(" ")}
    >
      {label}
    </button>
  );
}