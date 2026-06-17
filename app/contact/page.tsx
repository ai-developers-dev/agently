import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { Container } from "@/components/site/container";
import { LeadForm } from "@/components/site/lead-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the Agently team about plans, migration, or anything else. We'll get back to you quickly.",
};

const CHANNELS = [
  {
    icon: <Mail className="size-5 text-brand" />,
    title: "Email us",
    body: "hello@agently.net",
  },
  {
    icon: <MessageCircle className="size-5 text-brand" />,
    title: "Sales & onboarding",
    body: "Tell us about your book and we'll tailor a setup.",
  },
  {
    icon: <MapPin className="size-5 text-brand" />,
    title: "Built for agents",
    body: "By an agency veteran, for independent agents and agencies.",
  },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f3f1ff_0%,#ffffff_55%)]" />
      <Container className="py-16 sm:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-3.5 font-mono text-[13px] font-semibold uppercase tracking-[0.1em] text-brand">
              Contact
            </div>
            <h1 className="mb-5 text-balance text-[34px] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink sm:text-[46px]">
              Let&apos;s talk.
            </h1>
            <p className="mb-10 max-w-[440px] text-lg leading-[1.55] text-[#52617a]">
              Questions about plans, migrating your book, or whether Agently fits
              your agency? Send us a note and we&apos;ll get right back to you.
            </p>
            <ul className="flex flex-col gap-6">
              {CHANNELS.map((c) => (
                <li key={c.title} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-[0_1px_2px_rgba(10,37,64,0.05),0_8px_24px_rgba(10,37,64,0.06)]">
                    {c.icon}
                  </span>
                  <div>
                    <div className="text-[15px] font-bold text-ink">{c.title}</div>
                    <div className="text-sm text-[#62708a]">{c.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <LeadForm source="contact" submitLabel="Send message" withMessage />
        </div>
      </Container>
    </section>
  );
}
