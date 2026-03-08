import Link from "next/link";
import type { ReactNode } from "react";

type MenuCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
};

export function MenuCard({
  title,
  description,
  href,
  icon,
}: MenuCardProps) {
  return (
    <Link
      href={href}
      className="group flex min-h-44 flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
    >
      <div className="space-y-4">
        {icon ? (
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
            {icon}
          </div>
        ) : null}

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-sm leading-6 text-white/65">{description}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center text-sm font-medium text-white/75 transition group-hover:text-white">
        Open
        <span className="ml-2 transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}