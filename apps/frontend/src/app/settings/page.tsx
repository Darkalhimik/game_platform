import Link from "next/link";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(to_bottom,#111827,#030712)] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center px-4 py-10 sm:px-6">
        <div className="text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/50">
            Platform configuration
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Settings</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
            Manage appearance, preferences, and platform configuration in this area.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/games"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white/80 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-md"
          >
            Back to games
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white/80 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-md"
          >
            Go home
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
