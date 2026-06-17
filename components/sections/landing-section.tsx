import {
  BarChart3,
  RefreshCw,
  Shield,
  DollarSign,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/brand/logo-mark";
import { SectionLabel } from "./section-label";
import { Pricing } from "./pricing";

const cardShadow =
  "shadow-[0_1px_2px_rgba(10,37,64,0.06),0_12px_36px_rgba(10,37,64,0.08)]";

const NAV_LINKS = ["Product", "Solutions", "Pricing", "Resources"];

const TRUST = [
  { name: "Brightline", cls: "font-extrabold tracking-[-0.02em]" },
  { name: "Cornerstone", cls: "font-bold italic" },
  { name: "NORTHGATE", cls: "font-extrabold tracking-[0.04em]" },
  { name: "Harbor & Co", cls: "font-bold" },
  { name: "Vantage", cls: "font-extrabold tracking-[-0.03em]" },
];

const STATS = [
  { value: "14h", label: "saved per agent each week" },
  { value: "31%", label: "higher renewal retention" },
  { value: "All lines", label: "P&C, life, health, commercial" },
  { value: "10 min", label: "to import your whole book" },
];

export function LandingSection() {
  return (
    <section>
      <SectionLabel>02 — Landing Page</SectionLabel>
      <Card className={`overflow-hidden rounded-2xl border-0 ${cardShadow}`}>
        {/* ── HERO ── */}
        <div className="relative">
          <div className="absolute inset-0 [clip-path:polygon(0_0,100%_0,100%_68%,0_100%)] bg-[linear-gradient(150deg,#d6f3ff_0%,#e7e4ff_15%,#c3b8ff_30%,#8d7bff_48%,#635bff_63%,#9b63ff_78%,#ff8ec7_100%)]" />

          {/* Nav */}
          <div className="relative mx-auto flex max-w-[1140px] items-center justify-between px-10 py-[22px]">
            <div className="flex items-center gap-[38px]">
              <div className="flex items-center gap-2.5">
                <LogoMark size={30} square="#0A2540" dot="#635BFF" />
                <span className="text-[21px] font-bold tracking-[-0.03em] text-ink">
                  Agently
                </span>
              </div>
              <div className="flex gap-[26px] text-[15px] font-semibold text-ink">
                {NAV_LINKS.map((l) => (
                  <span
                    key={l}
                    className="cursor-pointer transition-colors hover:text-brand"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-[22px]">
              <span className="cursor-pointer text-[15px] font-semibold text-ink transition-colors hover:text-brand">
                Sign in
              </span>
              <Button variant="navy" size="nav">
                Start free <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          {/* Hero content */}
          <div className="relative mx-auto grid max-w-[1140px] grid-cols-2 items-center gap-10 px-10 pb-[90px] pt-14">
            <div>
              <Badge variant="glass" className="mb-6">
                <span className="inline-block size-[7px] rounded-full bg-brand" />
                Built by a 25-year insurance veteran
              </Badge>
              <h1 className="mb-[22px] text-[58px] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink">
                The CRM built for insurance agents.
              </h1>
              <p className="mb-8 max-w-[480px] text-[19px] font-[450] leading-[1.55] text-[#1c3a5e]">
                Track every policy, automate renewals, follow up with AI, and run
                your own ad campaigns — all from one workspace. From your first
                lead to your thousandth policy.
              </p>
              <div className="flex items-center gap-3.5">
                <Button size="hero">
                  Start free <ArrowRight className="size-[18px]" />
                </Button>
                <Button variant="glass" size="hero">
                  Book a demo
                </Button>
              </div>
              <div className="mt-[18px] text-[13.5px] text-[#1c3a5e] opacity-85">
                No credit card required · Free for your first 50 contacts
              </div>
            </div>

            <ProductMockup />
          </div>
        </div>

        {/* ── TRUST BAR ── */}
        <div className="mx-auto max-w-[1140px] px-10 pb-2 pt-7 text-center">
          <div className="mb-5 text-[13px] font-semibold uppercase tracking-[0.04em] text-[#8a94a6]">
            Trusted by independent agents and growing agencies
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-11 gap-y-4 opacity-55">
            {TRUST.map((t) => (
              <span key={t.name} className={`text-xl text-steel ${t.cls}`}>
                {t.name}
              </span>
            ))}
          </div>
        </div>

        {/* ── FEATURES BENTO ── */}
        <div className="mx-auto max-w-[1140px] px-10 py-[72px]">
          <div className="mb-12 text-center">
            <div className="mb-3.5 font-mono text-[13px] font-semibold uppercase tracking-[0.1em] text-brand">
              Everything in one place
            </div>
            <h2 className="mb-4 text-[40px] font-extrabold tracking-[-0.03em] text-ink">
              Run your whole book of business.
            </h2>
            <p className="mx-auto max-w-[560px] text-lg leading-[1.55] text-[#62708a]">
              A complete toolkit designed around how agents actually work — built
              individually, designed to work together.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-[18px]">
            {/* Card 1 — wide */}
            <FeatureCard
              className="col-span-2"
              icon={<BarChart3 className="size-[22px] text-brand" />}
              title="Visual pipeline & lead management"
              body="Drag every prospect from new lead to bound policy. See exactly where your revenue is, by line, by stage, by month."
              bodyMax="max-w-[440px]"
            />
            {/* Card 2 — navy */}
            <FeatureCard
              variant="navy"
              icon={<Shield className="size-[22px] text-brand-light" />}
              title="Policy tracking"
              body="Every policy, carrier, and effective date in one record — across all lines."
            />
            {/* Card 3 */}
            <FeatureCard
              icon={<RefreshCw className="size-[22px] text-brand" />}
              title="Automated renewals"
              body="Never miss a renewal. Automatic reminders to you and your clients, weeks ahead."
            />
            {/* Card 4 */}
            <FeatureCard
              icon={<DollarSign className="size-[22px] text-brand" />}
              title="Commission tracking"
              body="Know what you've earned and what's coming, by carrier and by policy."
            />
            {/* Card 5 — gradient */}
            <FeatureCard
              variant="gradient"
              icon={<Sparkles className="size-[22px] text-white" />}
              title="AI follow-ups + built-in ad campaigns"
              body="Draft personalized follow-ups and launch lead-gen ads to Facebook and Google — without leaving Agently or hiring an agency."
              bodyMax="max-w-[440px]"
            />
          </div>
        </div>

        {/* ── STATS BAND ── */}
        <div className="relative overflow-hidden bg-ink">
          <div className="absolute -right-[60px] -top-20 size-[340px] rounded-full bg-[radial-gradient(circle,rgba(99,91,255,0.55),transparent_68%)]" />
          <div className="relative mx-auto max-w-[1140px] px-10 py-16">
            <div className="mb-11 text-center">
              <h2 className="text-[34px] font-extrabold tracking-[-0.03em] text-white">
                The backbone of your agency.
              </h2>
            </div>
            <div className="grid grid-cols-4 gap-6 text-center">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="bg-[linear-gradient(120deg,#9D8BFF,#ff8ec7)] bg-clip-text font-mono text-[42px] font-semibold tracking-[-0.02em] text-transparent">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-[#8aa0bd]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FOUNDER / TESTIMONIAL ── */}
        <div className="mx-auto max-w-[1140px] px-10 py-[72px]">
          <div className="grid grid-cols-[1fr_1.1fr] items-center gap-12">
            <div className="flex flex-col gap-5">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#635BFF,#9b63ff)] text-2xl font-bold tracking-[-0.02em] text-white">
                A
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-brand">
                From the founder
              </div>
              <p className="text-[15px] leading-[1.6] text-[#62708a]">
                25 years selling insurance. 12 years building CRMs and running
                digital ad campaigns. Agently is the tool I always wanted and
                never had.
              </p>
            </div>
            <div>
              <p className="text-[28px] font-semibold leading-[1.4] tracking-[-0.02em] text-ink">
                &ldquo;Most CRMs are built for software companies and bent to fit
                insurance.{" "}
                <span className="text-brand">
                  Agently is built the other way around
                </span>{" "}
                — by someone who&apos;s worked the renewals, chased the leads, and
                run the ads.&rdquo;
              </p>
              <div className="mt-6 text-[15px] text-steel">
                <strong className="text-ink">The Agently founder</strong> · 25 yrs
                in insurance, 12 building CRMs
              </div>
            </div>
          </div>
        </div>

        {/* ── PRICING ── */}
        <Pricing />

        {/* ── CTA BAND ── */}
        <div className="relative overflow-hidden bg-[linear-gradient(135deg,#4B45C6_0%,#635BFF_45%,#9b63ff_100%)]">
          <div className="absolute -bottom-[120px] -left-10 size-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,142,199,0.45),transparent_65%)]" />
          <div className="relative mx-auto max-w-[1140px] px-10 py-[72px] text-center">
            <h2 className="mb-4 text-[42px] font-extrabold tracking-[-0.03em] text-white">
              Ready to grow your book?
            </h2>
            <p className="mb-[30px] text-lg text-[#e9e7ff]">
              Import your contacts and run your first renewal campaign in under
              ten minutes.
            </p>
            <div className="flex justify-center gap-3.5">
              <Button variant="white" size="hero" className="font-bold">
                Start free
              </Button>
              <Button variant="outlineWhite" size="hero">
                Book a demo
              </Button>
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <Footer />
      </Card>
    </section>
  );
}

/* ── Sub-components ── */

function FeatureCard({
  icon,
  title,
  body,
  variant = "light",
  className = "",
  bodyMax = "",
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  variant?: "light" | "navy" | "gradient";
  className?: string;
  bodyMax?: string;
}) {
  const surfaces = {
    light: "bg-mist border border-[#eef1f5]",
    navy: "bg-ink",
    gradient:
      "bg-[linear-gradient(135deg,#635BFF_0%,#7c5cff_55%,#9b63ff_100%)]",
  };
  const iconWrap = {
    light:
      "bg-white border border-[#eef1f5] shadow-[0_1px_2px_rgba(10,37,64,0.05)]",
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
      className={`flex flex-col gap-3.5 rounded-[14px] p-[30px] ${surfaces[variant]} ${className}`}
    >
      <div
        className={`flex size-[42px] items-center justify-center rounded-[11px] ${iconWrap[variant]}`}
      >
        {icon}
      </div>
      <div>
        <h3
          className={`mb-[7px] text-[19px] font-bold tracking-[-0.01em] ${titleColor}`}
        >
          {title}
        </h3>
        <p className={`text-[15px] leading-[1.55] ${bodyColor} ${bodyMax}`}>
          {body}
        </p>
      </div>
    </div>
  );
}

function ProductMockup() {
  return (
    <div className="relative animate-float">
      <div className="overflow-hidden rounded-[14px] border border-white/60 bg-white shadow-[0_30px_60px_rgba(10,37,64,0.28)]">
        {/* App top bar */}
        <div className="flex items-center gap-2 border-b border-[#eef1f5] bg-[#fbfcfe] px-3.5 py-[11px]">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#e6ebf1]" />
            <span className="size-2.5 rounded-full bg-[#e6ebf1]" />
            <span className="size-2.5 rounded-full bg-[#e6ebf1]" />
          </div>
          <div className="ml-2 font-mono text-[11px] text-[#8a94a6]">
            app.agently.net/pipeline
          </div>
        </div>

        <div className="grid grid-cols-[52px_1fr]">
          {/* Mini sidebar */}
          <div className="flex flex-col items-center gap-[18px] bg-ink py-3.5">
            <LogoMark size={22} square="#635BFF" />
            <div className="size-[22px] rounded-md bg-brand" />
            <div className="size-[22px] rounded-md bg-white/[0.12]" />
            <div className="size-[22px] rounded-md bg-white/[0.12]" />
            <div className="size-[22px] rounded-md bg-white/[0.12]" />
          </div>

          {/* Main */}
          <div className="p-4">
            <div className="mb-3.5 flex items-center justify-between">
              <span className="text-sm font-bold text-ink">Pipeline</span>
              <span className="rounded-md bg-[#e9f9ef] px-2 py-[3px] font-mono text-[11px] font-semibold text-[#16a34a]">
                +18% this mo
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <PipelineColumn label="New" labelClass="text-[#8a94a6]">
                <PipelineCard name="Dana R." sub="Auto · $1,240/yr" />
                <PipelineCard name="Priya N." sub="Home · $2,010/yr" />
              </PipelineColumn>
              <PipelineColumn label="Quoting" labelClass="text-[#8a94a6]">
                <PipelineCard
                  name="Marcus T."
                  sub="Life · $480/yr"
                  tone="quoting"
                />
                <PipelineCard name="Bell Co." sub="Comm. · $7.4k/yr" />
              </PipelineColumn>
              <PipelineColumn label="Bound" labelClass="text-[#16a34a]">
                <PipelineCard name="Owen K." sub="Auto · Bound ✓" tone="bound" />
                <PipelineCard name="Lena M." sub="Home · Bound ✓" tone="bound" />
              </PipelineColumn>
            </div>

            <div className="mt-3 flex items-center justify-between rounded-[9px] bg-ink px-3.5 py-[11px]">
              <div>
                <div className="text-[10px] text-[#8aa0bd]">
                  Renewals due in 30 days
                </div>
                <div className="font-mono text-[15px] font-bold text-white">
                  $48,210
                </div>
              </div>
              <span className="rounded-[7px] bg-brand px-[11px] py-1.5 text-[11px] font-semibold text-white">
                Auto-renew on
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <div className="absolute -bottom-5 -right-[18px] flex max-w-[240px] items-center gap-2.5 rounded-[11px] border border-[#eef1f5] bg-white px-3.5 py-[11px] shadow-[0_14px_30px_rgba(10,37,64,0.18)]">
        <div className="flex size-[30px] items-center justify-center rounded-lg bg-[linear-gradient(135deg,#635BFF,#9b63ff)] text-[15px] text-white">
          ✦
        </div>
        <div>
          <div className="text-[11.5px] font-bold text-ink">
            AI follow-up sent
          </div>
          <div className="text-[10.5px] text-[#8a94a6]">
            to 12 lapsing policyholders
          </div>
        </div>
      </div>
    </div>
  );
}

function PipelineColumn({
  label,
  labelClass,
  children,
}: {
  label: string;
  labelClass: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        className={`mb-2 text-[10px] font-bold uppercase tracking-[0.06em] ${labelClass}`}
      >
        {label}
      </div>
      <div className="flex flex-col gap-[7px]">{children}</div>
    </div>
  );
}

function PipelineCard({
  name,
  sub,
  tone = "default",
}: {
  name: string;
  sub: string;
  tone?: "default" | "quoting" | "bound";
}) {
  const surface = {
    default: "bg-mist border-[#eef1f5]",
    quoting: "bg-[#eef0ff] border-[#d9d6ff]",
    bound: "bg-[#e9f9ef] border-[#c3ebd2]",
  }[tone];
  const subColor = {
    default: "text-[#8a94a6]",
    quoting: "text-brand font-semibold",
    bound: "text-[#16a34a] font-semibold",
  }[tone];

  return (
    <div className={`rounded-lg border p-[9px] ${surface}`}>
      <div className="text-[11px] font-semibold text-ink">{name}</div>
      <div className={`mt-0.5 text-[10px] ${subColor}`}>{sub}</div>
    </div>
  );
}

function Footer() {
  const cols = [
    { title: "Product", items: ["Pipeline", "Policies", "Renewals", "Ad campaigns"] },
    { title: "Solutions", items: ["Solo agents", "Agencies", "Brokerages", "All lines"] },
    { title: "Company", items: ["About", "Pricing", "Contact", "Privacy"] },
  ];
  return (
    <div className="bg-ink px-10 pb-10 pt-14">
      <div className="mx-auto grid max-w-[1140px] grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <LogoMark size={28} square="#635BFF" dot="#ffffff" />
            <span className="text-[19px] font-bold tracking-[-0.03em] text-white">
              Agently
            </span>
          </div>
          <div className="max-w-[240px] text-sm leading-[1.6] text-[#8aa0bd]">
            The CRM built for insurance agents. From your first lead to your
            thousandth policy.
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-[#8aa0bd]">
              {c.title}
            </div>
            <div className="flex flex-col gap-[11px] text-sm text-[#c3d0e0]">
              {c.items.map((i) => (
                <span key={i}>{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-9 flex max-w-[1140px] items-center justify-between border-t border-white/10 pt-6 text-[13px] text-[#8aa0bd]">
        <span>© 2026 Agently. All rights reserved.</span>
        <span className="font-mono">Made for agents, by an agent.</span>
      </div>
    </div>
  );
}
