"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  color?: string;
};

export function Spotlight({ className, color = "rgba(99,102,241,0.20)" }: SpotlightProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl",
        className,
      )}
      style={{ background: `radial-gradient(circle at center, ${color} 0%, rgba(0,0,0,0) 65%)` }}
      animate={{ opacity: [0.7, 1, 0.7], scale: [0.95, 1.05, 0.95] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
