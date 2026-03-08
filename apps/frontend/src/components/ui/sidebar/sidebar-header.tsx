"use client";

import type { ReactNode } from "react";

type SidebarHeaderProps = {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
};

export function SidebarHeader({
  title,
  subtitle,
  actions,
}: SidebarHeaderProps) {
  return (
    <div className="border-b border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-white">{title}</h2>
          {subtitle ? (
            <p className="mt-1.5 text-sm leading-relaxed text-white/60">{subtitle}</p>
          ) : null}
        </div>

        {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>
    </div>
  );
}