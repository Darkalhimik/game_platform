"use client";

import type { SidebarOption } from "./sidebar-types";

type SidebarSelectProps = {
  value: string | number | null;
  options: SidebarOption[];
  placeholder?: string;
  onChange: (value: string | null) => void;
};

export function SidebarSelect({
  value,
  options,
  placeholder = "Select option",
  onChange,
}: SidebarSelectProps) {
  return (
    <select
      value={typeof value === "string" ? value : ""}
      onChange={(event) => onChange(event.target.value || null)}
      className="
        w-full cursor-pointer rounded-xl border border-white/10
        bg-white/5 px-4 py-2.5 text-sm font-medium text-white
        outline-none transition-all
        hover:border-white/20 hover:bg-white/10
        focus:border-white/30 focus:bg-white/10 focus:ring-2 focus:ring-white/10
      "
    >
      <option value="" className="bg-gray-900 text-white">
        {placeholder}
      </option>

      {options.map((option) => (
        <option key={option.value} value={option.value} className="bg-gray-900 text-white">
          {option.label}
        </option>
      ))}
    </select>
  );
}