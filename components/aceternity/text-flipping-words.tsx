"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type TextFlippingWordsProps = {
  words: string[];
  className?: string;
  intervalMs?: number;
};

export function TextFlippingWords({ words, className, intervalMs = 1800 }: TextFlippingWordsProps) {
  const safeWords = useMemo(() => (words.length ? words : [""]), [words]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % safeWords.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, safeWords.length]);

  const current = safeWords[index];

  return (
    <span className={cn("inline-flex whitespace-nowrap", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          initial={{ y: 18, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -18, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="inline-block"
        >
          {current}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
