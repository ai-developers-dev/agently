import { cn } from "@/lib/utils";

const A_PATH = "M20 8.5 L30 31 L25.2 31 L20 18.6 L14.8 31 L10 31 Z";

type LogoMarkProps = {
  size?: number;
  /** Square fill: "gradient" for the indigo gradient, or any CSS color. */
  square?: "gradient" | string;
  /** Opacity of the square fill (used for the glass-on-gradient variant). */
  squareOpacity?: number;
  /** Fill of the "A" glyph. */
  aFill?: string;
  /** Dot fill. Omit to render the mark without the contact node. */
  dot?: string;
  className?: string;
};

/**
 * The Agently squircle mark — a chevron "A" with a contact node, on a
 * rounded-square container.
 */
export function LogoMark({
  size = 40,
  square = "gradient",
  squareOpacity,
  aFill = "#ffffff",
  dot,
  className,
}: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={cn("shrink-0", className)}
    >
      <rect
        width="40"
        height="40"
        rx="11"
        fill={square === "gradient" ? "url(#agmark)" : square}
        fillOpacity={squareOpacity}
      />
      <path d={A_PATH} fill={aFill} />
      {dot && <circle cx="20" cy="26.4" r="2.5" fill={dot} />}
    </svg>
  );
}

/**
 * The bare "A" glyph without a container — used on the Facebook avatar and
 * post headers, where the glyph sits directly on a colored circle.
 */
export function LogoGlyph({
  size = 40,
  fill = "#ffffff",
  dot = "#ffffff",
  className,
}: {
  size?: number;
  fill?: string;
  dot?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={cn("shrink-0", className)}
    >
      <path d="M20 9 L30 31 L25.2 31 L20 19 L14.8 31 L10 31 Z" fill={fill} />
      <circle cx="20" cy="26.6" r="2.6" fill={dot} />
    </svg>
  );
}
