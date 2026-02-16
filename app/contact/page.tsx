export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
        <section className="pt-14 sm:pt-20">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Contact</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Tell us what you’re building. We’ll get back with next steps.
          </p>
        </section>

        <section className="pt-10 sm:pt-14">
          <div className="rounded-[32px] border border-black/[.08] bg-white/70 p-8 shadow-lg shadow-black/[.06] backdrop-blur dark:border-white/[.12] dark:bg-white/[.06] sm:p-10">
            <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                className="h-12 rounded-2xl border border-black/[.10] bg-white/80 px-4 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-black/[.22] dark:border-white/[.14] dark:bg-black/20 dark:placeholder:text-zinc-400 dark:focus:border-white/[.26]"
                placeholder="Your name"
                name="name"
              />
              <input
                className="h-12 rounded-2xl border border-black/[.10] bg-white/80 px-4 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-black/[.22] dark:border-white/[.14] dark:bg-black/20 dark:placeholder:text-zinc-400 dark:focus:border-white/[.26]"
                placeholder="Email"
                name="email"
                type="email"
              />
              <input
                className="h-12 rounded-2xl border border-black/[.10] bg-white/80 px-4 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-black/[.22] dark:border-white/[.14] dark:bg-black/20 dark:placeholder:text-zinc-400 dark:focus:border-white/[.26] sm:col-span-2"
                placeholder="What do you want to build?"
                name="subject"
              />
              <textarea
                className="min-h-32 rounded-2xl border border-black/[.10] bg-white/80 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-black/[.22] dark:border-white/[.14] dark:bg-black/20 dark:placeholder:text-zinc-400 dark:focus:border-white/[.26] sm:col-span-2"
                placeholder="Brief details (timeline, platform, constraints)"
                name="message"
              />
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-[color:var(--brand)] px-5 text-sm font-semibold text-[color:var(--brand-foreground)] shadow-sm shadow-black/[.12] transition-opacity hover:opacity-95 sm:col-span-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
