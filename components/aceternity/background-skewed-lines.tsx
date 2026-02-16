import { cn } from "@/lib/utils";

type BackgroundSkewedLinesProps = {
  className?: string;
};

export function BackgroundSkewedLines({ className }: BackgroundSkewedLinesProps) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 opacity-60 [background:repeating-linear-gradient(135deg,rgba(0,0,0,0.06)_0px,rgba(0,0,0,0.06)_1px,transparent_1px,transparent_12px)] dark:[background:repeating-linear-gradient(135deg,rgba(255,255,255,0.07)_0px,rgba(255,255,255,0.07)_1px,transparent_1px,transparent_12px)]" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-zinc-200/40 blur-3xl dark:bg-white/[.05]" />
    </div>
  );
}
