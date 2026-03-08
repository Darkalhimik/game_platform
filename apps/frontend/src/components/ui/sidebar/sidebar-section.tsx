"use client";

import { SidebarChipButton } from "./sidebar-chip-button";
import { SidebarRange } from "./sidebar-range";
import { SidebarSelect } from "./sidebar-select";
import type {
  SidebarFilterValue,
  SidebarSectionConfig,
} from "./sidebar-types";
import { toggleChipValue } from "./sidebar-utils";

type SidebarSectionProps = {
  section: SidebarSectionConfig;
  value: SidebarFilterValue;
  onChange: (sectionId: string, value: SidebarFilterValue) => void;
};

export function SidebarSection({
  section,
  value,
  onChange,
}: SidebarSectionProps) {
  return (
    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-white/15">
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
        {section.title}
      </h3>

      {section.type === "chips" && section.options ? (
        <div className="flex flex-wrap gap-2">
          {section.options.map((option) => (
            <SidebarChipButton
              key={option.value}
              label={option.label}
              active={value === option.value}
              onClick={() =>
                onChange(section.id, toggleChipValue(value as string | null, option.value))
              }
            />
          ))}
        </div>
      ) : null}

      {section.type === "select" && section.options ? (
        <SidebarSelect
          value={value}
          options={section.options}
          placeholder={section.placeholder}
          onChange={(nextValue) => onChange(section.id, nextValue)}
        />
      ) : null}

      {section.type === "range" ? (
        <SidebarRange
          value={typeof value === "number" ? value : section.defaultValue ?? 0}
          min={section.min}
          max={section.max}
          step={section.step}
          onChange={(nextValue) => onChange(section.id, nextValue)}
        />
      ) : null}
    </section>
  );
}