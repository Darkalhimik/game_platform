"use client";

import { mainNavigationItems } from "@/shared/config/navigation";
import { MenuCard } from "@/shared/ui";

export function HomeMenu() {
  return (
    <section className="w-full">
      <div className="grid gap-4 sm:grid-cols-2">
        {mainNavigationItems.map((item) => (
          <MenuCard
            key={item.id}
            title={item.label}
            description={item.description || ""}
            href={item.href}
            icon={<item.icon className="h-6 w-6" />}
          />
        ))}
      </div>
    </section>
  );
}