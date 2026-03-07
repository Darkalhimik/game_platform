import Link from "next/link";
import type { ReactNode } from "react";

type MenuCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
};

export function MenuCard({ title, description, href, icon }: MenuCardProps) {
  return (
    <Link
      href={href}
      className="group flex min-h-45 flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-white/70">{description}</p>
        </div>

        <div className="text-3xl transition group-hover:scale-110">{icon}</div>
      </div>

      <div className="mt-6 text-sm font-medium text-white/80 group-hover:text-white">
        Open →
      </div>
    </Link>
  );
}