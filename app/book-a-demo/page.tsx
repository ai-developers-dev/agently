import type { Metadata } from "next";
import { CalendarCheck, Clock, MessagesSquare } from "lucide-react";
import { Container } from "@/components/site/container";
import { CalendarEmbed } from "@/components/site/calendar-embed";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "See Agently in action. Book a personalized walkthrough with our team and we'll show you how to run your whole book from one place.",
};

const POINTS = [
  {
    icon: <Clock className="size-5 text-brand" />,
    title: "30 minutes, no pressure",
    body: "A focused walkthrough tailored to your lines and your book size.",
  },
  {
    icon: <MessagesSquare className="size-5 text-brand" />,
    title: "Real answers",
    body: "Ask about migration, carriers, commissions, and ad campaigns.",
  },
  {
    icon: <CalendarCheck className="size-5 text-brand" />,
    title: "See your setup",
    body: "We'll map Agently to how you actually work day to day.",
  },
];

export default function BookADemoPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f3f1ff_0%,#ffffff_55%)]" />
      <Container className="py-16 sm:py-[72px]">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <div className="mb-3.5 font-mono text-[13px] font-semibold uppercase tracking-[0.1em] text-brand">
              Book a demo
            </div>
            <h1 className="mb-5 text-balance text-[34px] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink sm:text-[46px]">
              See Agently on your book.
            </h1>
            <p className="mb-9 max-w-[420px] text-lg leading-[1.55] text-[#52617a]">
              Pick a time that works and we&apos;ll walk you through exactly how
              Agently fits your agency.
            </p>
            <ul className="flex flex-col gap-6">
              {POINTS.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-[0_1px_2px_rgba(10,37,64,0.05),0_8px_24px_rgba(10,37,64,0.06)]">
                    {p.icon}
                  </span>
                  <div>
                    <div className="text-[15px] font-bold text-ink">{p.title}</div>
                    <div className="text-sm text-[#62708a]">{p.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <CalendarEmbed />
        </div>
      </Container>
    </section>
  );
}
