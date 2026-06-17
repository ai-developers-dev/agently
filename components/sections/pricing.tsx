"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Billing = "monthly" | "annual";

const PRICES: Record<Billing, { solo: string; agency: string; brokerage: string }> = {
  annual: { solo: "24", agency: "59", brokerage: "129" },
  monthly: { solo: "29", agency: "69", brokerage: "149" },
};

const check = (
  <span className="text-brand" aria-hidden>
    ✓
  </span>
);

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-[9px] text-sm text-steel">
      {check} {children}
    </div>
  );
}

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("annual");
  const annual = billing === "annual";
  const p = PRICES[billing];

  return (
    <div className="border-y border-[#eef1f5] bg-mist">
      <div className="mx-auto max-w-[1140px] px-10 py-[72px]">
        <div className="mb-9 text-center">
          <div className="mb-3.5 font-mono text-[13px] font-semibold uppercase tracking-[0.1em] text-brand">
            Pricing
          </div>
          <h2 className="mb-6 text-[40px] font-extrabold tracking-[-0.03em] text-ink">
            Simple plans that grow with you.
          </h2>

          {/* Billing toggle */}
          <div className="relative inline-flex w-60 rounded-[10px] bg-[#e6ebf1] p-[3px]">
            <div
              className={cn(
                "pointer-events-none absolute top-[3px] h-[calc(100%-6px)] w-[calc(50%-3px)] rounded-lg bg-white shadow-[0_1px_3px_rgba(10,37,64,0.12)] transition-[left] [transition-duration:250ms] [transition-timing-function:cubic-bezier(0.2,0,0,1)]",
                annual ? "left-[50%]" : "left-[3px]"
              )}
            />
            <button
              onClick={() => setBilling("monthly")}
              className={cn(
                "relative flex-1 py-[9px] text-sm font-semibold transition-colors",
                annual ? "text-[#8a94a6]" : "text-ink"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={cn(
                "relative flex-1 py-[9px] text-sm font-semibold transition-colors",
                annual ? "text-ink" : "text-[#8a94a6]"
              )}
            >
              Annual <span className="text-[11px] text-[#16a34a]">−15%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 items-stretch gap-5">
          {/* Solo */}
          <div className="flex flex-col rounded-2xl border border-[#e6ebf1] bg-white p-[30px]">
            <div className="text-base font-bold text-ink">Solo</div>
            <div className="mb-[22px] mt-1.5 text-sm text-[#62708a]">
              For independent agents.
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-mono text-[44px] font-extrabold tracking-[-0.03em] text-ink">
                ${p.solo}
              </span>
              <span className="text-sm text-[#8a94a6]">/mo</span>
            </div>
            <Button variant="outlineBrand" size="block" className="my-6">
              Start free
            </Button>
            <div className="flex flex-col gap-[11px]">
              <Feature>Visual pipeline &amp; contacts</Feature>
              <Feature>Policy &amp; renewal tracking</Feature>
              <Feature>Up to 500 contacts</Feature>
              <Feature>Email follow-ups</Feature>
            </div>
          </div>

          {/* Agency (highlighted) */}
          <div className="relative flex flex-col rounded-2xl border-2 border-brand bg-white p-[30px] shadow-[0_16px_40px_rgba(99,91,255,0.18)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-[13px] py-[5px] text-xs font-bold tracking-[0.02em] text-white">
              Most popular
            </div>
            <div className="text-base font-bold text-ink">Agency</div>
            <div className="mb-[22px] mt-1.5 text-sm text-[#62708a]">
              For teams of 2–20 agents.
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-mono text-[44px] font-extrabold tracking-[-0.03em] text-ink">
                ${p.agency}
              </span>
              <span className="text-sm text-[#8a94a6]">/mo per seat</span>
            </div>
            <Button size="block" className="my-6">
              Start free
            </Button>
            <div className="flex flex-col gap-[11px]">
              <Feature>Everything in Solo</Feature>
              <Feature>Unlimited contacts</Feature>
              <Feature>AI follow-ups (SMS + email)</Feature>
              <Feature>Commission tracking</Feature>
              <Feature>Built-in ad campaigns</Feature>
            </div>
          </div>

          {/* Brokerage */}
          <div className="flex flex-col rounded-2xl border border-[#e6ebf1] bg-white p-[30px]">
            <div className="text-base font-bold text-ink">Brokerage</div>
            <div className="mb-[22px] mt-1.5 text-sm text-[#62708a]">
              For larger operations.
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-mono text-[44px] font-extrabold tracking-[-0.03em] text-ink">
                ${p.brokerage}
              </span>
              <span className="text-sm text-[#8a94a6]">/mo per seat</span>
            </div>
            <Button variant="outlineBrand" size="block" className="my-6">
              Contact sales
            </Button>
            <div className="flex flex-col gap-[11px]">
              <Feature>Everything in Agency</Feature>
              <Feature>Roles &amp; permissions</Feature>
              <Feature>Carrier API integrations</Feature>
              <Feature>Dedicated onboarding</Feature>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
