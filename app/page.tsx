import { Hero } from "@/components/marketing/hero";
import { TrustBar } from "@/components/marketing/trust-bar";
import { Features } from "@/components/marketing/features";
import { Stats } from "@/components/marketing/stats";
import { Founder } from "@/components/marketing/founder";
import { PricingTable } from "@/components/marketing/pricing-table";
import { CtaBand } from "@/components/marketing/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      <Stats />
      <Founder />
      <PricingTable />
      <CtaBand />
    </>
  );
}
