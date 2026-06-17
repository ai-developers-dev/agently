import { cn } from "@/lib/utils";

/**
 * Centered section header: mono eyebrow + display heading + optional lede.
 */
export function SectionHeading({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-[640px] text-center", className)}>
      {eyebrow && (
        <div className="mb-3.5 font-mono text-[13px] font-semibold uppercase tracking-[0.1em] text-brand">
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-[30px] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[36px] lg:text-[40px]">
        {title}
      </h2>
      {children && (
        <p className="mx-auto mt-4 max-w-[560px] text-pretty text-base leading-[1.55] text-[#62708a] sm:text-lg">
          {children}
        </p>
      )}
    </div>
  );
}
