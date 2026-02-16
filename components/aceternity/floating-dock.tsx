"use client";

import Link from "next/link";
import {
  AnimatePresence,
  type MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils";

type DockItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
};

type FloatingDockProps = {
  className?: string;
  items: DockItem[];
};

function DockItemButton({ item, mouseX }: { item: DockItem; mouseX: MotionValue<number> }) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (x) => {
    const el = ref.current;
    if (!el) return 9999;
    const rect = el.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    return x - center;
  });

  const width = useTransform(distance, [-160, 0, 160], [44, 64, 44]);
  const height = useTransform(distance, [-160, 0, 160], [44, 64, 44]);
  const y = useTransform(distance, [-160, 0, 160], [0, -10, 0]);

  const springWidth = useSpring(width, { stiffness: 450, damping: 28, mass: 0.5 });
  const springHeight = useSpring(height, { stiffness: 450, damping: 28, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 450, damping: 28, mass: 0.5 });

  return (
    <motion.div style={{ y: springY }} className="relative">
      <AnimatePresence>
        {hovered ? (
          <motion.div
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-black/[.08] bg-white/80 px-3 py-1 text-xs font-semibold text-zinc-700 shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-black/60 dark:text-zinc-200"
          >
            {item.label}
          </motion.div>
        ) : null}
      </AnimatePresence>

      {item.external ? (
        <a
          ref={ref}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="group relative flex items-center justify-center rounded-full border border-black/[.08] bg-white/60 shadow-sm backdrop-blur transition-colors hover:bg-white/80 dark:border-white/[.12] dark:bg-white/[.06] dark:hover:bg-white/[.10]"
        >
          <motion.div
            style={{ width: springWidth, height: springHeight }}
            className="flex items-center justify-center rounded-full"
          >
            <span className="flex h-5 w-5 items-center justify-center text-zinc-700 dark:text-zinc-200">
              {item.icon}
            </span>
          </motion.div>
        </a>
      ) : (
        <Link
          ref={ref}
          href={item.href}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="group relative flex items-center justify-center rounded-full border border-black/[.08] bg-white/60 shadow-sm backdrop-blur transition-colors hover:bg-white/80 dark:border-white/[.12] dark:bg-white/[.06] dark:hover:bg-white/[.10]"
        >
          <motion.div
            style={{ width: springWidth, height: springHeight }}
            className="flex items-center justify-center rounded-full"
          >
            <span className="flex h-5 w-5 items-center justify-center text-zinc-700 dark:text-zinc-200">
              {item.icon}
            </span>
          </motion.div>
        </Link>
      )}
    </motion.div>
  );
}

export function FloatingDock({ className, items }: FloatingDockProps) {
  const mouseX = useMotionValue<number>(9999);

  return (
    <div className={cn("fixed inset-x-0 bottom-6 z-50 flex justify-center", className)}>
      <div
        className="pointer-events-auto flex items-end gap-2 rounded-full border border-black/[.08] bg-white/70 p-2 shadow-lg shadow-black/[.06] backdrop-blur dark:border-white/[.12] dark:bg-black/50"
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(9999)}
      >
        {items.map((item) => (
          <DockItemButton key={item.href} item={item} mouseX={mouseX} />
        ))}
      </div>
    </div>
  );
}
