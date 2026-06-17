"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/container";
import { PLANS } from "@/lib/config";
import { cn } from "@/lib/utils";

type Billing = "monthly" | "annual";

type Plan = {
  name: string;
  blurb: string;
  priceKey: keyof (typeof PLANS)["annual"];
  unit: string;
  cta: { label: string; href: string };
  highlight?: boolean;
  features: string[];
};

const PLAN_LIST: Plan[] = [
  {
    name: "Solo",
    blurb: "For independent agents.",
    priceKey: "solo",
    unit: "/mo",
    cta: { label: "Start free", href: "/start-free" },
    features: [
      "Visual pipeline & contacts",
      "Policy & renewal tracking",
      "Up to 500 contacts",
      "Email follow-ups",
    ],
  },
  {
    name: "Agency",
    blurb: "For teams of 2–20 agents.",
    priceKey: "agency",
    unit: "/mo per seat",
    cta: { label: "Start free", href: "/start-free" },
    highlight: true,
    features: [
      "Everything in Solo",
      "Unlimited contacts",
      "AI follow-ups (SMS + email)",
      "Commission tracking",
      "Built-in ad campaigns",
    ],
  },
  {
    name: "Brokerage",
    blurb: "For larger operations.",
    priceKey: "brokerage",
    unit: "/mo per seat",
    cta: { label: "Contact sales", href: "/contact" },
    features: [
      "Everything in Agency",
      "Roles & permissions",
      "Carrier API integrations",
      "Dedicated onboarding",
    ],
  },
];

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 text-sm text-steel">
      <Check className="mt-0.5 size-4 shrink-0 text-brand" />
      <span>{children}</span>
    </div>
  );
}

export function PricingTable({ showHeading = true }: { showHeading?: boolean }) {
  const [billing, setBilling] = useState<Billing>("annual");
  const annual = billing === "annual";

  return (
    <section className="border-y border-[#eef1f5] bg-mist">
      <Container className="py-16 sm:py-[72px]">
        <div className="mb-9 text-center">
          {showHeading && (
            <>
              <div className="mb-3.5 font-mono text-[13px] font-semibold uppercase tracking-[0.1em] text-brand">
                Pricing
              </div>
              <h2 className="mb-6 text-[30px] font-extrabold tracking-[-0.03em] text-ink sm:text-[40px]">
                Simple plans that grow with you.
              </h2>
            </>
          )}

          {/* Billing toggle */}
          <div className="relative inline-flex w-60 rounded-[10px] bg-[#e6ebf1] p-[3px]">
            <div
              className={cn(
                "pointer-events-none absolute top-[3px] h-[calc(100%-6px)] w-[calc(50%-3px)] rounded-lg bg-white shadow-[0_1px_3px_rgba(10,37,64,0.12)] transition-[left] [transition-duration:250ms] [transition-timing-function:cubic-bezier(0.2,0,0,1)]",
                annual ? "left-[50%]" : "left-[3px]",
              )}
            />
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={cn(
                "relative flex-1 py-[9px] text-sm font-semibold transition-colors",
                annual ? "text-[#8a94a6]" : "text-ink",
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={cn(
                "relative flex-1 py-[9px] text-sm font-semibold transition-colors",
                annual ? "text-ink" : "text-[#8a94a6]",
              )}
            >
              Annual <span className="text-[11px] text-[#16a34a]">−15%</span>
            </button>
          </div>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-3">
          {PLAN_LIST.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl bg-white p-[30px]",
                plan.highlight
                  ? "border-2 border-brand shadow-[0_16px_40px_rgba(99,91,255,0.18)]"
                  : "border border-[#e6ebf1]",
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-[13px] py-[5px] text-xs font-bold tracking-[0.02em] text-white">
                  Most popular
                </div>
              )}
              <div className="text-base font-bold text-ink">{plan.name}</div>
              <div className="mb-[22px] mt-1.5 text-sm text-[#62708a]">
                {plan.blurb}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-mono text-[40px] font-extrabold tracking-[-0.03em] text-ink sm:text-[44px]">
                  ${PLANS[billing][plan.priceKey]}
                </span>
                <span className="text-sm text-[#8a94a6]">{plan.unit}</span>
              </div>
              <Button
                asChild
                variant={plan.highlight ? "default" : "outlineBrand"}
                size="block"
                className="my-6"
              >
                <Link href={plan.cta.href}>{plan.cta.label}</Link>
              </Button>
              <div className="flex flex-col gap-[11px]">
                {plan.features.map((f) => (
                  <Feature key={f}>{f}</Feature>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
