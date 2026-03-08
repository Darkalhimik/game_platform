"use client";

import type { ReactNode } from "react";

type SidebarShellProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function SidebarShell({
  isOpen,
  onClose,
  children,
}: SidebarShellProps) {
  return (
    <>
      {isOpen ? (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          onClick={onClose}
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-md transition-opacity"
        />
      ) : null}

      <aside
        className={[
          "fixed left-0 top-0 z-40 h-screen w-85 max-w-[85vw]",
          "border-r border-white/10 shadow-2xl",
          "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_50%),linear-gradient(to_bottom,#1f2937,#0f172a)]",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex h-full flex-col">{children}</div>
      </aside>
    </>
  );
}