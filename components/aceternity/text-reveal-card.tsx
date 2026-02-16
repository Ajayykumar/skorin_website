"use client";

import { useState } from "react";

interface TextRevealCardProps {
  children: React.ReactNode;
  revealText: string;
  className?: string;
}

export function TextRevealCard({ children, revealText, className }: TextRevealCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#0B3C5D]/[.08] bg-white/80 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-white/[.12] dark:bg-black/20 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {isHovered && (
        <div
          className="absolute inset-0 z-20 flex items-end p-6 bg-gradient-to-t from-[#1F77B4]/90 to-transparent"
          style={{
            background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(31, 119, 180, 0.9), transparent 40%)`,
          }}
        >
          <div className="text-white font-semibold text-lg">
            {revealText}
          </div>
        </div>
      )}
    </div>
  );
}
