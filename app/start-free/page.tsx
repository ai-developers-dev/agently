import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/site/container";
import { LeadForm } from "@/components/site/lead-form";

export const metadata: Metadata = {
  title: "Start free",
  description:
    "Create your Agently account free — no credit card required. Import your book and run your first renewal campaign in minutes.",
};

const PERKS = [
  "Free for your first 50 contacts",
  "No credit card required",
  "Import your whole book in ~10 minutes",
  "Cancel or upgrade anytime",
];

export default function StartFreePage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f3f1ff_0%,#ffffff_55%)]" />
      <Container className="py-16 sm:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-3.5 font-mono text-[13px] font-semibold uppercase tracking-[0.1em] text-brand">
              Start free
            </div>
            <h1 className="mb-5 text-balance text-[34px] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink sm:text-[46px]">
              Start running your book in minutes.
            </h1>
            <p className="mb-8 max-w-[460px] text-lg leading-[1.55] text-[#52617a]">
              Create your account and see your whole pipeline, policies, and
              renewals in one place — free to start.
            </p>
            <ul className="flex flex-col gap-3.5">
              {PERKS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-[15px] text-ink">
                  <span className="flex size-6 items-center justify-center rounded-full bg-[#e9f9ef] text-[#16a34a]">
                    <Check className="size-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <LeadForm source="start-free" submitLabel="Create my free account" />
        </div>
      </Container>
    </section>
  );
}
