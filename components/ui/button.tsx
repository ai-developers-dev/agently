import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        // Primary indigo CTA
        default:
          "bg-brand text-white shadow-[0_4px_14px_rgba(99,91,255,0.35)] hover:bg-brand-dark",
        // Dark navy CTA (nav)
        navy: "bg-ink text-white hover:bg-[#142f4d]",
        // Translucent white ghost (over gradient hero)
        glass: "bg-white/75 text-ink hover:bg-white",
        // Outlined brand (pricing secondary)
        outlineBrand:
          "border border-[#d9d6ff] bg-white text-brand hover:bg-[#f3f2ff]",
        // Solid white (CTA band)
        white: "bg-white text-brand-dark hover:bg-[#f3f2ff]",
        // Outlined white (CTA band secondary)
        outlineWhite:
          "border border-white/50 bg-transparent text-white hover:bg-white/10",
        // Facebook primary blue
        fb: "bg-[#1877F2] text-white hover:bg-[#166fe0]",
        // Facebook neutral gray
        fbGray: "bg-[#e4e6eb] text-[#050505] hover:bg-[#d8dadf]",
      },
      size: {
        default: "h-10 px-5 text-[15px]",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        nav: "h-[38px] px-[18px] text-[15px]",
        hero: "h-[50px] px-6 text-base",
        block: "h-11 w-full text-[15px]",
        fb: "h-[38px] px-[18px] text-[15px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
