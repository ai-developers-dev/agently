import { cn } from "@/lib/utils";

export type FeatureVariant = "light" | "navy" | "gradient";

/**
 * A single feature tile used in the bento grid and on the Product page.
 */
export function FeatureCard({
  icon,
  title,
  body,
  variant = "light",
  className,
  bodyMax,
  id,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  variant?: FeatureVariant;
  className?: string;
  bodyMax?: string;
  id?: string;
}) {
  const surfaces: Record<FeatureVariant, string> = {
    light: "bg-mist border border-[#eef1f5]",
    navy: "bg-ink",
    gradient: "bg-[linear-gradient(135deg,#635BFF_0%,#7c5cff_55%,#9b63ff_100%)]",
  };
  const iconWrap: Record<FeatureVariant, string> = {
    light: "bg-white border border-[#eef1f5] shadow-[0_1px_2px_rgba(10,37,64,0.05)]",
    navy: "bg-white/[0.08]",
    gradient: "bg-white/[0.18]",
  };
  const titleColor = variant === "light" ? "text-ink" : "text-white";
  const bodyColor =
    variant === "light"
      ? "text-[#62708a]"
      : variant === "navy"
        ? "text-[#8aa0bd]"
        : "text-[#e9e7ff]";

  return (
    <div
      id={id}
      className={cn(
        "flex scroll-mt-24 flex-col gap-3.5 rounded-[14px] p-7 sm:p-[30px]",
        surfaces[variant],
        className,
      )}
    >
      <div
        className={cn(
          "flex size-[42px] items-center justify-center rounded-[11px]",
          iconWrap[variant],
        )}
      >
        {icon}
      </div>
      <div>
        <h3
          className={cn(
            "mb-[7px] text-[19px] font-bold tracking-[-0.01em]",
            titleColor,
          )}
        >
          {title}
        </h3>
        <p className={cn("text-[15px] leading-[1.55]", bodyColor, bodyMax)}>{body}</p>
      </div>
    </div>
  );
}
