import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileText, PlayCircle, GraduationCap, ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/marketing/page-header";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, playbooks, and product walkthroughs to help insurance agents grow their book with Agently.",
};

const FEATURED = {
  tag: "Playbook",
  title: "The renewal season playbook for independent agents",
  blurb:
    "A step-by-step system for turning renewal season from a scramble into recurring, predictable revenue — with the exact reminder cadence that lifts retention.",
  read: "12 min read",
};

const RESOURCES = [
  {
    icon: <BookOpen className="size-5 text-brand" />,
    tag: "Guide",
    title: "Importing your book of business in 10 minutes",
    read: "6 min read",
  },
  {
    icon: <FileText className="size-5 text-brand" />,
    tag: "Template",
    title: "AI follow-up scripts that win back lapsing policies",
    read: "Template",
  },
  {
    icon: <PlayCircle className="size-5 text-brand" />,
    tag: "Webinar",
    title: "Running your first Facebook lead-gen campaign",
    read: "28 min watch",
  },
  {
    icon: <GraduationCap className="size-5 text-brand" />,
    tag: "Course",
    title: "Agently 101: from first lead to bound policy",
    read: "5 lessons",
  },
  {
    icon: <FileText className="size-5 text-brand" />,
    tag: "Guide",
    title: "Commission tracking that actually reconciles",
    read: "7 min read",
  },
  {
    icon: <BookOpen className="size-5 text-brand" />,
    tag: "Guide",
    title: "Building a referral engine inside your CRM",
    read: "9 min read",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader eyebrow="Resources" title="Grow your book, faster.">
        Guides, playbooks, and walkthroughs from agents and the Agently team.
      </PageHeader>

      <section className="py-16 sm:py-20">
        <Container>
          {/* Featured */}
          <Link
            href="/resources"
            className="group mb-10 grid overflow-hidden rounded-2xl border border-[#eef1f5] bg-white shadow-[0_1px_2px_rgba(10,37,64,0.05),0_12px_36px_rgba(10,37,64,0.06)] lg:grid-cols-2"
          >
            <div className="bg-[linear-gradient(135deg,#635BFF_0%,#7c5cff_55%,#9b63ff_100%)] p-10 lg:min-h-[280px]" />
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="mb-3 w-fit rounded-full bg-[#f3f2ff] px-3 py-1 text-xs font-bold uppercase tracking-[0.06em] text-brand">
                {FEATURED.tag}
              </span>
              <h2 className="mb-3 text-[24px] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[28px]">
                {FEATURED.title}
              </h2>
              <p className="mb-5 text-[15px] leading-[1.55] text-[#62708a]">
                {FEATURED.blurb}
              </p>
              <span className="flex items-center gap-1.5 text-sm font-semibold text-brand">
                Read the playbook
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="mt-2 text-[13px] text-[#8a94a6]">{FEATURED.read}</span>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((r) => (
              <Link
                key={r.title}
                href="/resources"
                className="group flex flex-col rounded-2xl border border-[#eef1f5] bg-white p-6 transition-shadow hover:shadow-[0_12px_36px_rgba(10,37,64,0.08)]"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-mist">
                  {r.icon}
                </div>
                <span className="mb-2 text-xs font-bold uppercase tracking-[0.06em] text-brand">
                  {r.tag}
                </span>
                <h3 className="mb-4 flex-1 text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-ink">
                  {r.title}
                </h3>
                <span className="text-[13px] text-[#8a94a6]">{r.read}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Put it into practice." subtitle="Start free and run your first campaign this week." />
    </>
  );
}
