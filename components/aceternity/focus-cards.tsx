"use client";

import { useState } from "react";

interface FocusCardsProps {
  children: React.ReactNode[];
  className?: string;
}

export function FocusCards({ children, className }: FocusCardsProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  return (
    <div className={`grid gap-6 ${className}`}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-300 ${
            focusedIndex !== null && focusedIndex !== index
              ? 'opacity-30 scale-95 blur-sm'
              : 'opacity-100 scale-100 blur-0'
          }`}
          onMouseEnter={() => setFocusedIndex(index)}
          onMouseLeave={() => setFocusedIndex(null)}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
