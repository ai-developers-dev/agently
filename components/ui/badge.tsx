import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border font-semibold transition-colors",
  {
    variants: {
      variant: {
        // Hero eyebrow pill — translucent white over gradient
        glass:
          "border-[rgba(10,37,64,0.08)] bg-white/70 px-3.5 py-1.5 text-[13px] text-brand-dark",
        // "Most popular" solid indigo tag
        popular:
          "border-transparent bg-brand px-[13px] py-[5px] text-xs text-white tracking-[0.02em]",
        // Positive metric chip (mono)
        success:
          "border-transparent bg-[#e9f9ef] px-2 py-[3px] text-[11px] text-[#16a34a] font-mono",
      },
    },
    defaultVariants: {
      variant: "glass",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
