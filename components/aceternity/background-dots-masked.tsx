import { cn } from "@/lib/utils";

type BackgroundDotsMaskedProps = {
  className?: string;
};

export function BackgroundDotsMasked({ className }: BackgroundDotsMaskedProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0",
        "[background-image:radial-gradient(rgba(0,0,0,0.14)_1px,transparent_1px)]",
        "[background-size:18px_18px]",
        "[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]",
        "dark:[background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)]",
        className,
      )}
    />
  );
}
