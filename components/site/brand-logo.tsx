import Link from "next/link";
import { LogoMark } from "@/components/brand/logo-mark";
import { cn } from "@/lib/utils";

/**
 * The Agently wordmark lockup (mark + name), linking home. `tone` switches the
 * mark + text treatment:
 *  - "nav"   → navy squircle + indigo dot (the design's nav lockup), ink text
 *  - "ink"   → gradient squircle, ink text
 *  - "white" → indigo squircle + white dot, white text (dark footer)
 */
export function BrandLogo({
  size = 30,
  tone = "nav",
  className,
}: {
  size?: number;
  tone?: "nav" | "ink" | "white";
  className?: string;
}) {
  const mark =
    tone === "nav"
      ? { square: "#0A2540", dot: "#635BFF" }
      : tone === "white"
        ? { square: "#635BFF", dot: "#ffffff" }
        : { square: "gradient" as const, dot: undefined };

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5", className)}
      aria-label="Agently home"
    >
      <LogoMark size={size} square={mark.square} dot={mark.dot} />
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
