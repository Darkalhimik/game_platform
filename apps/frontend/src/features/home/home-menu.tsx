import { MenuCard } from "../../components/ui/menu-card";

const menuItems = [
  {
    title: "Games",
    description: "Browse the list of available games and choose what to play.",
    href: "/games",
    icon: "🎮",
  },
  {
    title: "Statistics",
    description: "View player activity, match history, and performance data.",
    href: "/statistics",
    icon: "📊",
  },
  {
    title: "Settings",
    description: "Manage interface, preferences, and future platform options.",
    href: "/settings",
    icon: "⚙️",
  },
  {
    title: "Authorization",
    description: "Sign in, create an account, or continue as a guest later.",
    href: "/auth",
    icon: "🔐",
  },
];

export function HomeMenu() {
  return (
    <section className="w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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