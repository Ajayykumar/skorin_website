import { cn } from "@/lib/utils";

type BackgroundSkewedRectanglesProps = {
  className?: string;
};

export function BackgroundSkewedRectangles({ className }: BackgroundSkewedRectanglesProps) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute left-[-10%] top-24 h-40 w-[520px] -skew-y-6 rounded-3xl bg-zinc-200/60 blur-sm dark:bg-white/[.06]" />
      <div className="absolute right-[-10%] top-52 h-40 w-[520px] skew-y-6 rounded-3xl bg-zinc-200/50 blur-sm dark:bg-white/[.05]" />
      <div className="absolute left-[10%] bottom-20 h-40 w-[420px] -skew-y-6 rounded-3xl bg-zinc-200/40 blur-sm dark:bg-white/[.04]" />
    </div>
  );
}
