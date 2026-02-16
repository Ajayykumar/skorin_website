export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
        <section className="pt-14 sm:pt-20">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Products</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            A few productized offerings and accelerators we use to ship faster.
          </p>
        </section>

        <section className="pt-10 sm:pt-14">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="rounded-3xl border border-black/[.08] bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-white/[.06] lg:col-span-2">
              <div className="text-sm font-semibold">AI Knowledge Base (RAG) Starter</div>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                A production-ready template to connect your documents, search, and an LLM with evaluation hooks.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-black/[.10] bg-white/70 px-3 py-1 text-xs text-zinc-700 dark:border-white/[.14] dark:bg-white/[.06] dark:text-zinc-300">
                  RAG
                </span>
                <span className="rounded-full border border-black/[.10] bg-white/70 px-3 py-1 text-xs text-zinc-700 dark:border-white/[.14] dark:bg-white/[.06] dark:text-zinc-300">
                  Evaluation
                </span>
                <span className="rounded-full border border-black/[.10] bg-white/70 px-3 py-1 text-xs text-zinc-700 dark:border-white/[.14] dark:bg-white/[.06] dark:text-zinc-300">
                  Guardrails
                </span>
              </div>
            </div>
            <div className="rounded-3xl border border-black/[.08] bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-white/[.06]">
              <div className="text-sm font-semibold">Cloud CI/CD Blueprint</div>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                A baseline pipeline for safe deployments with environments, approvals, and rollbacks.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
