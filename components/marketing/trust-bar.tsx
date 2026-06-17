import { Container } from "@/components/site/container";

const TRUST = [
  { name: "Brightline", cls: "font-extrabold tracking-[-0.02em]" },
  { name: "Cornerstone", cls: "font-bold italic" },
  { name: "NORTHGATE", cls: "font-extrabold tracking-[0.04em]" },
  { name: "Harbor & Co", cls: "font-bold" },
  { name: "Vantage", cls: "font-extrabold tracking-[-0.03em]" },
];

export function TrustBar() {
  return (
    <Container className="px-5 pb-2 pt-7 text-center sm:px-10">
      <div className="mb-5 text-[13px] font-semibold uppercase tracking-[0.04em] text-[#8a94a6]">
        Trusted by independent agents and growing agencies
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-55 sm:gap-x-11">
        {TRUST.map((t) => (
          <span key={t.name} className={`text-lg text-steel sm:text-xl ${t.cls}`}>
            {t.name}
          </span>
        ))}
      </div>
    </Container>
  );
}
