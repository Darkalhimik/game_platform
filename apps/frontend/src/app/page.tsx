import { HomeMenu } from "@/features/home";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(to_bottom,#111827,#030712)] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-10 sm:px-6 lg:px-8">
        <section className="flex flex-1 flex-col justify-center">
          <div className="mx-auto w-full max-w-4xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/50">
                LAN game platform
              </p>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Home
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
                A local multiplayer and solo gaming platform built as a
                full-stack learning project with a focus on clean architecture,
                scalable structure, and polished UI.
              </p>
            </div>

            <HomeMenu />
          </div>
        </section>
      </div>
    </main>
  );
}