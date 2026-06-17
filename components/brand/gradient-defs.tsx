/**
 * Shared SVG gradient definition for the Agently mark.
 * Rendered once at the document root so any <LogoMark variant="gradient" />
 * can reference url(#agmark).
 */
export function GradientDefs() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      className="absolute overflow-hidden"
    >
      <defs>
        <linearGradient
          id="agmark"
          x1="4"
          y1="2"
          x2="36"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9D8BFF" />
          <stop offset="0.5" stopColor="#635BFF" />
          <stop offset="1" stopColor="#4B45C6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
