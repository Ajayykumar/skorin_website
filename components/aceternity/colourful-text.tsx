"use client";

interface ColourfulTextProps {
  children: React.ReactNode;
  className?: string;
}

export function ColourfulText({ children, className }: ColourfulTextProps) {
  return (
    <span className={`inline-block bg-gradient-to-r from-[#1F77B4] via-[#17A2B8] to-[#0B3C5D] bg-clip-text text-transparent animate-pulse ${className}`}>
      {children}
    </span>
  );
}
