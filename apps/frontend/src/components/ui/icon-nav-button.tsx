import Link from "next/link";
import type { ReactNode } from "react";

type IconNavButtonProps = {
  href: string;
  icon: ReactNode;
  label?: string;
};

export function IconNavButton({ href, icon, label }: IconNavButtonProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="
        group
        inline-flex
        h-11 w-11
        items-center justify-center
        rounded-xl
        border border-white/10
        bg-white/5
        text-white/80
        transition-all
        hover:-translate-y-0.5
        hover:border-white/20
        hover:bg-white/10
        hover:text-white
      "
    >
      {icon}
    </Link>
  );
}