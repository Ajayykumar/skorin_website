import { cn } from "@/lib/utils";

type NavbarWithChildrenProps = {
  className?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  children?: React.ReactNode;
};

export function NavbarWithChildren({ className, left, right, children }: NavbarWithChildrenProps) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-between gap-3 rounded-full border border-black/[.08] bg-white/70 px-3 py-2 shadow-sm backdrop-blur dark:border-white/[.12] dark:bg-black/50",
        className,
      )}
    >
      <div className="flex min-w-0 items-center gap-2">{left}</div>
      <div className="min-w-0 flex-1">{children}</div>
      <div className="flex min-w-0 items-center justify-end gap-2">{right}</div>
    </div>
  );
}
