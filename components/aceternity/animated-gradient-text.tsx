"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type AnimatedGradientTextProps = {
  text: string;
  className?: string;
};

export function AnimatedGradientText({ text, className }: AnimatedGradientTextProps) {
  return (
    <motion.span
      className={cn(
        "bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-500 bg-[length:200%_200%] bg-clip-text text-transparent",
        className,
      )}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    >
      {text}
    </motion.span>
  );
}
