"use client";

type SidebarRangeProps = {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
};

export function SidebarRange({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
}: SidebarRangeProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-white/70">Value</span>
        <span className="rounded-lg bg-white/10 px-3 py-1 text-sm font-bold text-white">{value}</span>
      </div>

      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full cursor-pointer accent-white"
      />

      <div className="flex items-center justify-between text-xs font-medium text-white/50">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}