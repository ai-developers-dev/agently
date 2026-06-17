import Link from "next/link";
import { LogoMark } from "@/components/brand/logo-mark";
import { cn } from "@/lib/utils";

/**
 * The Agently wordmark lockup (mark + name), linking home. `tone` switches the
 * text color for use on light chrome vs the dark footer.
 */
export function BrandLogo({
  size = 30,
  tone = "ink",
  className,
}: {
  size?: number;
  tone?: "ink" | "white";
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5", className)}
      aria-label="Agently home"
    >
      <LogoMark size={size} square={tone === "white" ? "#635BFF" : "gradient"} />
      <span
        className={cn(
          "text-[21px] font-bold tracking-[-0.03em]",
          tone === "white" ? "text-white" : "text-ink",
        )}
      >
        Agently
      </span>
    </Link>
  );
}
