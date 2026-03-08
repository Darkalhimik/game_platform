import Link from "next/link";
import type { ReactNode } from "react";

type IconNavButtonProps = {
  href: string;
  icon: ReactNode;
  label?: string;
  isActive?: boolean;
};

export function IconNavButton({
  href,
  icon,
  label,
  isActive = false,
}: IconNavButtonProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={isActive ? "page" : undefined}
      className={[
        "group inline-flex h-11 w-11 items-center justify-center rounded-xl border shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:translate-y-0",
        isActive
          ? "border-white/35 bg-white/15 text-white"
          : "border-white/10 bg-white/5 text-white/70 hover:border-white/25 hover:bg-white/10 hover:text-white"
      ].join(" ")}
    >
      {icon}
    </Link>
  );
}