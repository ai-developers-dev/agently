import { Container } from "@/components/site/container";
import { SectionHeading } from "./section-heading";
import { FeatureCard } from "./feature-card";

/* The design's exact inline icons (viewBox 0 0 24 24, 2px stroke). */
const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PipelineIcon = (
  <svg {...iconProps} stroke="#635BFF">
    <rect x="3" y="4" width="5" height="16" rx="1" />
    <rect x="9.5" y="4" width="5" height="11" rx="1" />
    <rect x="16" y="4" width="5" height="14" rx="1" />
  </svg>
);

const PolicyIcon = (
  <svg {...iconProps} stroke="#9D8BFF">
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
  </svg>
);

const RenewalIcon = (
  <svg {...iconProps} stroke="#635BFF">
    <path d="M21 12a9 9 0 1 1-3-6.7" />
    <path d="M21 4v5h-5" />
  </svg>
);

const CommissionIcon = (
  <svg {...iconProps} stroke="#635BFF">
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="M17 6.5c0-2-2.2-3-5-3s-5 1-5 3.2c0 4.8 10 2.3 10 7.1 0 2.2-2.2 3.2-5 3.2s-5-1.1-5-3.2" />
  </svg>
);

const AiIcon = (
  <svg {...iconProps} stroke="#ffffff">
    <path d="M12 3l1.8 4.6L18.5 9l-3.7 3 1.2 4.8L12 14.4 8 16.8 9.2 12 5.5 9l4.7-1.4z" />
  </svg>
);

export function Features() {
  return (
    <section className="py-16 sm:py-[72px]">
      <Container>
        <SectionHeading eyebrow="Everything in one place" title="Run your whole book of business.">
          A complete toolkit designed around how agents actually work — built
          individually, designed to work together.
        </SectionHeading>

        <div className="mt-12 grid gap-[18px] md:grid-cols-3">
          <FeatureCard
            id="pipeline"
            className="md:col-span-2"
            icon={PipelineIcon}
            title="Visual pipeline & lead management"
            body="Drag every prospect from new lead to bound policy. See exactly where your revenue is, by line, by stage, by month."
            bodyMax="max-w-[440px]"
          />
          <FeatureCard
            id="policies"
            variant="navy"
            icon={PolicyIcon}
            title="Policy tracking"
            body="Every policy, carrier, and effective date in one record — across all lines."
          />
          <FeatureCard
            id="renewals"
            icon={RenewalIcon}
            title="Automated renewals"
            body="Never miss a renewal. Automatic reminders to you and your clients, weeks ahead."
          />
          <FeatureCard
            icon={CommissionIcon}
            title="Commission tracking"
            body="Know what you've earned and what's coming, by carrier and by policy."
          />
          <FeatureCard
            id="campaigns"
            variant="gradient"
            icon={AiIcon}
            title="AI follow-ups + built-in ad campaigns"
            body="Draft personalized follow-ups and launch lead-gen ads to Facebook and Google — without leaving Agently or hiring an agency."
            bodyMax="max-w-[440px]"
          />
        </div>
      </Container>
    </section>
  );
}
