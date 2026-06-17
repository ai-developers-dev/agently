import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/marketing/page-header";
import { PricingTable } from "@/components/marketing/pricing-table";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent plans that grow with you. Start free — no credit card required.",
};

const FAQ = [
  {
    q: "Is there really a free tier?",
    a: "Yes. You can start free with up to 50 contacts — no credit card required. Upgrade when you're ready to grow.",
  },
  {
    q: "Can I switch plans later?",
    a: "Anytime. Upgrade or downgrade from your account settings; changes are prorated automatically.",
  },
  {
    q: "What does 'per seat' mean?",
    a: "On Agency and Brokerage plans you pay for each agent who logs in. Contacts and policies are unlimited.",
  },
  {
    q: "Do you charge for ad spend?",
    a: "No. Built-in campaigns are included in your plan — you only pay the ad networks (Facebook, Google) directly for media.",
  },
  {
    q: "How does onboarding work?",
    a: "Import your book in about ten minutes. Brokerage plans include a dedicated onboarding specialist.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader eyebrow="Pricing" title="Simple plans that grow with you.">
        Start free, upgrade when it pays for itself. No setup fees, no contracts.
      </PageHeader>

      <PricingTable showHeading={false} />

      <section className="py-16 sm:py-[72px]">
        <Container className="max-w-[760px]">
          <h2 className="mb-10 text-center text-[26px] font-extrabold tracking-[-0.03em] text-ink sm:text-[32px]">
            Frequently asked questions
          </h2>
          <div className="divide-y divide-[#eef1f5] rounded-2xl border border-[#eef1f5] bg-white">
            {FAQ.map((item) => (
              <div key={item.q} className="p-6 sm:p-7">
                <h3 className="mb-2 text-[17px] font-bold text-ink">{item.q}</h3>
                <p className="text-[15px] leading-[1.55] text-[#62708a]">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
