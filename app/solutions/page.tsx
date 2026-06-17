import type { Metadata } from "next";
import Link from "next/link";
import { User, Users, Building2, Layers, ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/marketing/page-header";
import { CtaBand } from "@/components/marketing/cta-band";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Agently fits solo agents, growing agencies, and brokerages — across every line of business you write.",
};

const SEGMENTS = [
  {
    id: "solo",
    icon: <User className="size-6 text-brand" />,
    name: "Solo agents",
    blurb:
      "Run your entire book without a back office. Pipeline, renewals, and AI follow-ups that do the busywork so you can sell.",
    points: ["Up to 500 contacts free to start", "Automated renewal reminders", "Email follow-up sequences"],
  },
  {
    id: "agencies",
    icon: <Users className="size-6 text-brand" />,
    name: "Agencies",
    blurb:
      "Give every producer a shared pipeline and a single source of truth. See team performance and commissions at a glance.",
    points: ["Unlimited contacts & seats", "Commission tracking by producer", "Built-in ad campaigns"],
  },
  {
    id: "brokerages",
    icon: <Building2 className="size-6 text-brand" />,
    name: "Brokerages",
    blurb:
      "Scale across offices with roles, permissions, and carrier integrations — onboarded with a dedicated specialist.",
    points: ["Roles & permissions", "Carrier API integrations", "Dedicated onboarding"],
  },
  {
    id: "lines",
    icon: <Layers className="size-6 text-brand" />,
    name: "All lines",
    blurb:
      "P&C, life, health, and commercial — every policy a client holds lives in one record, no matter the line.",
    points: ["Personal & commercial P&C", "Life & health", "Multi-line household view"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHeader eyebrow="Solutions" title="Built for how you sell.">
        Whether you&apos;re a one-person shop or a multi-office brokerage, Agently
        adapts to your book — across every line of business.
      </PageHeader>

      <section className="py-16 sm:py-[72px]">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {SEGMENTS.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="flex scroll-mt-24 flex-col rounded-2xl border border-[#eef1f5] bg-white p-8 shadow-[0_1px_2px_rgba(10,37,64,0.05),0_12px_36px_rgba(10,37,64,0.05)]"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-mist">
                  {s.icon}
                </div>
                <h2 className="mb-2.5 text-[22px] font-bold tracking-[-0.02em] text-ink">
                  {s.name}
                </h2>
                <p className="mb-6 text-[15px] leading-[1.55] text-[#62708a]">
                  {s.blurb}
                </p>
                <ul className="mb-7 flex flex-col gap-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-steel">
                      <span className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outlineBrand" className="mt-auto self-start">
                  <Link href="/start-free">
                    Get started <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Find the fit for your agency." subtitle="Start free in minutes, or talk to us about your setup." />
    </>
  );
}
