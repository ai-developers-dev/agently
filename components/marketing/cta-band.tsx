import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/container";

export function CtaBand({
  title = "Ready to grow your book?",
  subtitle = "Import your contacts and run your first renewal campaign in under ten minutes.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#4B45C6_0%,#635BFF_45%,#9b63ff_100%)]">
      <div className="absolute -bottom-[120px] -left-10 size-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,142,199,0.45),transparent_65%)]" />
      <Container className="relative py-16 text-center sm:py-[72px]">
        <h2 className="mx-auto mb-4 max-w-[680px] text-balance text-[30px] font-extrabold tracking-[-0.03em] text-white sm:text-[42px]">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-[560px] text-pretty text-base text-[#e9e7ff] sm:text-lg">
          {subtitle}
        </p>
        <div className="flex flex-col justify-center gap-3.5 sm:flex-row">
          <Button asChild variant="white" size="hero" className="font-bold">
            <Link href="/start-free">Start free</Link>
          </Button>
          <Button asChild variant="outlineWhite" size="hero">
            <Link href="/book-a-demo">Book a demo</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
