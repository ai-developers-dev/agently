import { cn } from "@/lib/utils";

/**
 * Standard horizontal content well used across the site. Keeps every section
 * aligned to the same max width and responsive gutters.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1140px] px-5 sm:px-10", className)}>
      {children}
    </div>
  );
}
