import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/[.08] bg-white/50 backdrop-blur dark:border-white/[.12] dark:bg-white/[.04]">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold tracking-tight">Skorin</div>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              Cloud and AI engineering for modern products.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Company
            </div>
            <Link className="text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="/about">
              About
            </Link>
            <Link className="text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="/services">
              Services
            </Link>
            <Link className="text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="/products">
              Products
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Get in touch
            </div>
            <Link className="text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="/contact">
              Contact
            </Link>
            <a className="text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="mailto:hello@skorin.com">
              hello@skorin.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Social
            </div>
            <a
              className="flex items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M17.5 6.5h.01"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              Instagram
            </a>
            <a
              className="flex items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6.5 9.5V18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6.5 6.5h.01"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M10.5 18v-4.5c0-2 1-3.5 3-3.5s3 1.5 3 3.5V18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M10.5 9.5V18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M21 4.5v15A1.5 1.5 0 0 1 19.5 21h-15A1.5 1.5 0 0 1 3 19.5v-15A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              LinkedIn
            </a>
            <a
              className="flex items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M21 5 3.8 11.7c-.8.3-.8 1.4 0 1.7l4.2 1.4 1.6 5.1c.2.6 1 .7 1.4.2l2.5-3.1 4.8 3.5c.5.3 1.2.1 1.3-.6L22 5.9c.1-.8-.6-1.4-1.3-.9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 14.8 20.5 6.4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Telegram
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/[.06] pt-6 text-sm text-zinc-600 dark:border-white/[.10] dark:text-zinc-300 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Skorin. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link className="hover:text-zinc-900 dark:hover:text-white" href="/">
              Privacy
            </Link>
            <Link className="hover:text-zinc-900 dark:hover:text-white" href="/">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
