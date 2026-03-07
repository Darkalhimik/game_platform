import { HomeMenu } from "../features/home/home-menu";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0b1020] px-6 py-12 text-white">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          LAN Game Platform
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Home Hub
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Central entry point for your game platform. Choose where to go next:
          browse games, check statistics, configure settings, or authorize.
        </p>
      </div>

      <HomeMenu />
    </main>
  );
}