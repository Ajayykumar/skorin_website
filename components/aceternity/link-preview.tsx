"use client";

import { useState } from "react";

interface LinkPreviewProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

export function LinkPreview({ url, children, className }: LinkPreviewProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className="absolute z-50 w-80 rounded-lg border border-[#0B3C5D]/[.08] bg-white/90 p-4 shadow-lg backdrop-blur dark:border-white/[.12] dark:bg-black/80">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1F77B4] to-[#17A2B8] p-0.5">
              <div className="h-full w-full rounded-lg bg-white/90 dark:bg-black/80 flex items-center justify-center">
                <svg className="h-6 w-6 text-[#1F77B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 0 0 5.656 5.656l1.102-1.101m-.758-4.899a4 4 0 0 0 5.656 0l4-4a4 4 0 0 0-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-zinc-900 dark:text-white">
                {new URL(url).hostname}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Click to visit this amazing resource
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
