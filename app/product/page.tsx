import type { Metadata } from "next";
import {
  BarChart3,
  RefreshCw,
  Shield,
  DollarSign,
  Sparkles,
  Megaphone,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/marketing/page-header";
import { ProductMockup } from "@/components/marketing/product-mockup";
import { CtaBand } from "@/components/marketing/cta-band";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Product",
  description:
    "A complete CRM for insurance agents — visual pipeline, policy tracking, automated renewals, commissions, AI follow-ups, and built-in ad campaigns.",
};

type Block = {
  id: string;
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
};

const BLOCKS: Block[] = [
  {
    id: "pipeline",
    icon: <BarChart3 className="size-6 text-brand" />,
    eyebrow: "Pipeline",
    title: "See your whole book at a glance.",
    body: "Drag every prospect from new lead to bound policy. Know exactly where your revenue sits — by line, by stage, by month — without a spreadsheet in sight.",
    bullets: [
      "Kanban pipeline by stage and line of business",
      "Lead source and conversion tracking",
      "Revenue forecasting built in",
    ],
  },
  {
    id: "policies",
    icon: <Shield className="size-6 text-brand" />,
    eyebrow: "Policies",
    title: "Every policy in one record.",
    body: "Carrier, effective date, premium, and documents — all attached to the client, across every line you write. No more digging through carrier portals.",
    bullets: [
      "Unified client + household view",
      "All lines: P&C, life, health, commercial",
      "Document storage on every policy",
    ],
  },
  {
    id: "renewals",
    icon: <RefreshCw className="size-6 text-brand" />,
    eyebrow: "Renewals",
    title: "Never miss a renewal again.",
    body: "Automatic reminders to you and your clients, weeks ahead. Turn renewal season from a scramble into a system that runs itself.",
    bullets: [
      "Automated multi-touch reminder sequences",
      "Renewal revenue dashboard",
      "30 / 60 / 90-day windows",
    ],
  },
  {
    id: "commissions",
    icon: <DollarSign className="size-6 text-brand" />,
    eyebrow: "Commissions",
    title: "Know what you've earned.",
    body: "Track commission by carrier and by policy, see what's paid and what's pending, and reconcile statements without the headache.",
    bullets: [
      "Per-carrier commission rules",
      "Paid vs. pending visibility",
      "Exportable reports",
    ],
  },
  {
    id: "campaigns",
    icon: <Megaphone className="size-6 text-brand" />,
    eyebrow: "AI & Ad campaigns",
    title: "Follow up and fill the pipeline.",
    body: "Draft personalized follow-ups with AI and launch lead-gen ads to Facebook and Google — without leaving Agently or hiring an agency.",
    bullets: [
      "AI-drafted SMS + email follow-ups",
      "Built-in Facebook & Google ad campaigns",
      "Leads flow straight into your pipeline",
    ],
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHeader eyebrow="Product" title="Everything you need to run your agency.">
        A complete toolkit designed around how insurance agents actually work —
        built individually, designed to work together.
      </PageHeader>

      {/* Hero mockup */}
      <section className="border-b border-[#eef1f5] bg-mist py-16 sm:py-20">
        <Container>
          <div className="mx-auto w-full max-w-[560px]">
            <ProductMockup />
          </div>
        </Container>
      </section>

      {/* Alternating feature blocks */}
      <div className="py-8 sm:py-12">
        {BLOCKS.map((block, i) => (
          <section key={block.id} id={block.id} className="scroll-mt-24 py-12 sm:py-16">
            <Container>
              <div
                className={cn(
                  "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                  i % 2 === 1 && "lg:[&>*:first-child]:order-2",
                )}
              >
                <div>
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-white shadow-[0_1px_2px_rgba(10,37,64,0.05),0_8px_24px_rgba(10,37,64,0.06)]">
                    {block.icon}
                  </div>
                  <div className="mb-2 font-mono text-[13px] font-semibold uppercase tracking-[0.1em] text-brand">
                    {block.eyebrow}
                  </div>
                  <h2 className="mb-4 text-[26px] font-extrabold tracking-[-0.03em] text-ink sm:text-[32px]">
                    {block.title}
                  </h2>
                  <p className="mb-6 max-w-[480px] text-[17px] leading-[1.55] text-[#62708a]">
                    {block.body}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {block.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[15px] text-steel">
                        <span className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-brand" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#eef1f5] bg-[linear-gradient(135deg,#f6f9fc,#eef0ff)] p-8">
                  <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-white/70">
                    <Sparkles className="size-10 text-brand/40" />
                  </div>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <CtaBand title="Run your whole book from one place." />
    </>
  );
}
