"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastYRef = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const last = lastYRef.current;
    lastYRef.current = latest;

    if (latest < 16) {
      setVisible(true);
      return;
    }

    const goingDown = latest > last;
    setVisible(!goingDown);
    if (goingDown) setOpen(false);
  });

  const items = useMemo<NavItem[]>(
    () => [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    [],
  );

  const ctaHref = "/contact";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -24 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="pointer-events-none mx-auto mt-4 w-full px-4 sm:px-6"
      >
        <div className="pointer-events-auto mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-black/[.08] bg-white/70 px-3 py-2 shadow-lg shadow-black/[.06] backdrop-blur dark:border-white/[.12] dark:bg-black/50">
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
            onClick={() => setOpen(false)}
          >
            <span className="relative">
              Skorin
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-zinc-900/70 transition-all duration-300 group-hover:w-full dark:bg-zinc-100/70" />
            </span>
          </Link>

          <div className="hidden items-center gap-1 sm:flex">
            {items.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm text-zinc-700 transition-colors hover:bg-black/[.05] hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/[.10] dark:hover:text-white",
                    active &&
                      "bg-black/[.06] text-zinc-900 dark:bg-white/[.14] dark:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={ctaHref}
                className={cn(
                  "ml-1 inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold",
                  "bg-[color:var(--brand)] text-[color:var(--brand-foreground)] shadow-sm shadow-black/[.12]",
                  "hover:opacity-95",
                )}
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/[.08] text-zinc-900 transition-colors hover:bg-black/[.05] dark:border-white/[.12] dark:text-zinc-100 dark:hover:bg-white/[.10] sm:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="mx-auto w-full max-w-5xl overflow-hidden"
        >
          <div className="mt-2 rounded-2xl border border-black/[.08] bg-white/80 p-2 shadow-lg shadow-black/[.06] backdrop-blur dark:border-white/[.12] dark:bg-black/60">
            {items.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-sm text-zinc-700 transition-colors hover:bg-black/[.05] hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/[.10] dark:hover:text-white",
                    active &&
                      "bg-black/[.06] text-zinc-900 dark:bg-white/[.14] dark:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <motion.div whileTap={{ scale: 0.98 }}>
              <Link
                href={ctaHref}
                onClick={() => setOpen(false)}
                className={cn(
                  "mt-1 block rounded-xl px-4 py-3 text-center text-sm font-semibold",
                  "bg-[color:var(--brand)] text-[color:var(--brand-foreground)] shadow-sm shadow-black/[.12]",
                  "hover:opacity-95",
                )}
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}
