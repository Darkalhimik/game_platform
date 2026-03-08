import { BarChart3, Gamepad2, LogIn, Settings } from "lucide-react";
import { MenuCard } from "../../components/ui/menu-card";

const menuItems = [
  {
    title: "Games",
    description: "Browse available games and start playing solo or with others.",
    href: "/games",
    icon: <Gamepad2 className="h-6 w-6" />,
  },
  {
    title: "Statistics",
    description: "View play history, session data, and platform statistics.",
    href: "/statistics",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: "Settings",
    description: "Manage preferences, appearance, and platform configuration.",
    href: "/settings",
    icon: <Settings className="h-6 w-6" />,
  },
  {
    title: "Authorization",
    description: "Sign in, create an account, and manage your access.",
    href: "/authorization",
    icon: <LogIn className="h-6 w-6" />,
  },
];

export function HomeMenu() {
  return (
    <section className="w-full">
      <div className="grid gap-4 sm:grid-cols-2">
        {menuItems.map((item) => (
          <MenuCard
            key={item.title}
            title={item.title}
            description={item.description}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}