import { Container } from "@/components/site/container";

export function Founder() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <div className="flex flex-col gap-5">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#635BFF,#9b63ff)] text-2xl font-bold tracking-[-0.02em] text-white">
              A
            </div>
            <div className="font-mono text-xs uppercase tracking-[0.1em] text-brand">
              From the founder
            </div>
            <p className="text-[15px] leading-[1.6] text-[#62708a]">
              25 years selling insurance. 12 years building CRMs and running
              digital ad campaigns. Agently is the tool I always wanted and never
              had.
            </p>
          </div>
          <div>
            <p className="text-balance text-[22px] font-semibold leading-[1.4] tracking-[-0.02em] text-ink sm:text-[28px]">
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
      </Container>
    </section>
  );
}
