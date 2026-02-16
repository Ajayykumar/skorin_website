export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
        <section className="pt-14 sm:pt-20">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">About</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            We’re an IT company focused on cloud engineering and AI product development.
            We build with strong fundamentals: security, reliability, and maintainability.
          </p>
        </section>

        <section className="pt-10 sm:pt-14">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-black/[.08] bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-white/[.06]">
              <div className="text-sm font-semibold">Mission</div>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                Deliver modern software that is stable in production and easy to evolve.
              </p>
            </div>
            <div className="rounded-3xl border border-black/[.08] bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-white/[.06]">
              <div className="text-sm font-semibold">Delivery</div>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                Weekly demos, measurable milestones, and clear communication.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
