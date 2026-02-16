"use client";

import { useEffect, useState } from "react";

interface HeroHighlightProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroHighlight({ children, className }: HeroHighlightProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(31, 119, 180, 0.15), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}
