import {
  BarChart3,
  RefreshCw,
  Shield,
  DollarSign,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { SectionHeading } from "./section-heading";
import { FeatureCard } from "./feature-card";

export function Features() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Everything in one place" title="Run your whole book of business.">
          A complete toolkit designed around how agents actually work — built
          individually, designed to work together.
        </SectionHeading>

        <div className="mt-12 grid gap-[18px] md:grid-cols-3">
          <FeatureCard
            id="pipeline"
            className="md:col-span-2"
            icon={<BarChart3 className="size-[22px] text-brand" />}
            title="Visual pipeline & lead management"
            body="Drag every prospect from new lead to bound policy. See exactly where your revenue is, by line, by stage, by month."
            bodyMax="max-w-[440px]"
          />
          <FeatureCard
            id="policies"
            variant="navy"
            icon={<Shield className="size-[22px] text-brand-light" />}
            title="Policy tracking"
            body="Every policy, carrier, and effective date in one record — across all lines."
          />
          <FeatureCard
            id="renewals"
            icon={<RefreshCw className="size-[22px] text-brand" />}
            title="Automated renewals"
            body="Never miss a renewal. Automatic reminders to you and your clients, weeks ahead."
          />
          <FeatureCard
            icon={<DollarSign className="size-[22px] text-brand" />}
            title="Commission tracking"
            body="Know what you've earned and what's coming, by carrier and by policy."
          />
          <FeatureCard
            id="campaigns"
            variant="gradient"
            icon={<Sparkles className="size-[22px] text-white" />}
            title="AI follow-ups + built-in ad campaigns"
            body="Draft personalized follow-ups and launch lead-gen ads to Facebook and Google — without leaving Agently or hiring an agency."
            bodyMax="max-w-[440px]"
          />
        </div>
      </Container>
    </section>
  );
}
