export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
        <section className="pt-14 sm:pt-20">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Services</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Cloud engineering, AI product development, and platform delivery—built for production.
          </p>
        </section>

        <section className="pt-10 sm:pt-14">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-black/[.08] bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-white/[.06]">
              <div className="text-sm font-semibold">Cloud App Development</div>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                Web apps, APIs, and backends with scalability, observability, and cost awareness.
              </p>
            </div>
            <div className="rounded-3xl border border-black/[.08] bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-white/[.06]">
              <div className="text-sm font-semibold">AI Engineering</div>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                LLM features, RAG pipelines, evaluation, and safe deployment patterns.
              </p>
            </div>
            <div className="rounded-3xl border border-black/[.08] bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-white/[.06]">
              <div className="text-sm font-semibold">DevOps & Platform</div>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                CI/CD, IaC, containers, monitoring, and reliable releases.
              </p>
            </div>
            <div className="rounded-3xl border border-black/[.08] bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-white/[.06]">
              <div className="text-sm font-semibold">UI / Frontend</div>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                Clean UX, responsive design, accessibility, and performance tuning.
              </p>
            </div>
            <div className="rounded-3xl border border-black/[.08] bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-white/[.06]">
              <div className="text-sm font-semibold">Security & Reviews</div>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                Secure architecture guidance and best-practice reviews for safer delivery.
              </p>
            </div>
            <div className="rounded-3xl border border-black/[.08] bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-white/[.06]">
              <div className="text-sm font-semibold">Maintenance</div>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                Long-term support, enhancements, performance improvements, and roadmap help.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
