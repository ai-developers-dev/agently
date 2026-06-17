import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/site/container";
import { ProductMockup } from "./product-mockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Diagonal gradient wash */}
      <div className="absolute inset-0 [clip-path:polygon(0_0,100%_0,100%_82%,0_100%)] bg-[linear-gradient(150deg,#d6f3ff_0%,#e7e4ff_15%,#c3b8ff_30%,#8d7bff_48%,#635bff_63%,#9b63ff_78%,#ff8ec7_100%)] sm:[clip-path:polygon(0_0,100%_0,100%_68%,0_100%)]" />

      <Container className="relative">
        <div className="grid items-center gap-12 pb-16 pt-[104px] sm:pt-[130px] lg:grid-cols-2 lg:gap-10 lg:pb-[90px]">
          <div>
            <Badge variant="glass" className="mb-6">
              <span className="inline-block size-[7px] rounded-full bg-brand" />
              Built by a 25-year insurance veteran
            </Badge>
            <h1 className="mb-5 text-balance text-[40px] font-extrabold leading-[1.03] tracking-[-0.035em] text-ink sm:text-[52px] lg:text-[58px]">
              The CRM built for insurance agents.
            </h1>
            <p className="mb-8 max-w-[480px] text-pretty text-[17px] font-[450] leading-[1.55] text-[#1c3a5e] sm:text-[19px]">
              Track every policy, automate renewals, follow up with AI, and run
              your own ad campaigns — all from one workspace. From your first
              lead to your thousandth policy.
            </p>
            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Button asChild size="hero">
                <Link href="/start-free">
                  Start free <ArrowRight className="size-[18px]" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="hero">
                <Link href="/book-a-demo">Book a demo</Link>
              </Button>
            </div>
            <div className="mt-[18px] text-[13.5px] text-[#1c3a5e] opacity-85">
              No credit card required · Free for your first 50 contacts
            </div>
          </div>

          <div className="mx-auto w-full max-w-[440px] lg:mx-0 lg:max-w-none">
            <ProductMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}
