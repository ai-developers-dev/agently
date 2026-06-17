import { Container } from "@/components/site/container";

const STATS = [
  { value: "14h", label: "saved per agent each week" },
  { value: "31%", label: "higher renewal retention" },
  { value: "All lines", label: "P&C, life, health, commercial" },
  { value: "10 min", label: "to import your whole book" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute -right-[60px] -top-20 size-[340px] rounded-full bg-[radial-gradient(circle,rgba(99,91,255,0.55),transparent_68%)]" />
      <Container className="relative py-16">
        <h2 className="mb-11 text-center text-[26px] font-extrabold tracking-[-0.03em] text-white sm:text-[34px]">
          The backbone of your agency.
        </h2>
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="bg-[linear-gradient(120deg,#9D8BFF,#ff8ec7)] bg-clip-text font-mono text-[34px] font-semibold tracking-[-0.02em] text-transparent sm:text-[42px]">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-[#8aa0bd]">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
