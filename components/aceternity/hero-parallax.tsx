"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type HeroParallaxProps = {
  className?: string;
  title: string;
  subtitle?: string;
  cards: Array<{ title: string; description: string }>;
};

export function HeroParallax({ className, title, subtitle, cards }: HeroParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={ref} className={cn("relative overflow-hidden", className)}>
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="py-16 sm:py-20">
          <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl">{title}</h1>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">{subtitle}</p>
          ) : null}

          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {cards.slice(0, 3).map((c, idx) => (
              <motion.div
                key={c.title}
                style={{ y: idx % 2 === 0 ? y1 : y2 }}
                className="rounded-3xl border border-black/[.08] bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-white/[.06]"
              >
                <div className="text-sm font-semibold">{c.title}</div>
                <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
