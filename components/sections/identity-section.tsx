import { Card } from "@/components/ui/card";
import { LogoMark } from "@/components/brand/logo-mark";
import { SectionLabel } from "./section-label";

const PALETTE = [
  { hex: "#635BFF", name: "Indigo", swatch: "bg-brand" },
  { hex: "#0A2540", name: "Navy", swatch: "bg-ink" },
  { hex: "#425466", name: "Slate", swatch: "bg-steel" },
  { hex: "#F6F9FC", name: "Mist", swatch: "bg-mist border border-[#eef1f5]" },
];

const cardShadow =
  "shadow-[0_1px_2px_rgba(10,37,64,0.06),0_12px_36px_rgba(10,37,64,0.08)]";

const specLabel =
  "font-mono text-[11px] uppercase tracking-[0.1em] text-[#8a94a6]";

export function IdentitySection() {
  return (
    <section>
      <SectionLabel>01 — Identity</SectionLabel>
      <Card className={`overflow-hidden rounded-2xl border-0 ${cardShadow}`}>
        {/* Primary lockup */}
        <div className="grid grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col justify-center gap-7 border-r border-[#eef1f5] p-14">
            <div className="flex items-center gap-3.5">
              <LogoMark size={46} dot="#ffffff" />
              <span className="text-[30px] font-bold tracking-[-0.03em] text-ink">
                Agently
              </span>
            </div>
            <p className="max-w-[360px] text-[15px] leading-[1.6] text-[#62708a]">
              The mark is an <strong className="text-ink">A</strong> built from
              two connected strokes meeting at a contact node — protection (the
              chevron) plus the relationship at its center. Squircle, 28% corner
              radius, indigo gradient.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3.5 bg-[linear-gradient(150deg,#e7e4ff_0%,#8d7bff_48%,#635bff_72%,#b46bff_100%)] p-12">
            <LogoMark size={46} square="#ffffff" squareOpacity={0.16} dot="#ffffff" />
            <span className="text-[30px] font-bold tracking-[-0.03em] text-white">
              Agently
            </span>
          </div>
        </div>

        {/* Spec strip */}
        <div className="grid grid-cols-4 border-t border-[#eef1f5]">
          <div className="flex flex-col items-center gap-3.5 border-r border-[#eef1f5] px-7 py-8">
            <div className={specLabel}>Mark</div>
            <LogoMark size={56} dot="#ffffff" />
          </div>
          <div className="flex flex-col items-center gap-3.5 border-r border-[#eef1f5] px-7 py-8">
            <div className={specLabel}>Reverse</div>
            <div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-ink">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 10.5 L29 30 L24.8 30 L20 18.6 L15.2 30 L11 30 Z"
                  fill="#fff"
                />
                <circle cx="20" cy="26" r="2.2" fill="#635BFF" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3.5 border-r border-[#eef1f5] px-7 py-8">
            <div className={specLabel}>Mono</div>
            <LogoMark size={56} square="#0A2540" dot="#ffffff" />
          </div>
          <div className="flex flex-col items-center gap-3.5 px-7 py-8">
            <div className={specLabel}>Favicon</div>
            <div className="flex items-center gap-3">
              <LogoMark size={32} dot="#ffffff" />
              <LogoMark size={20} dot="#ffffff" />
            </div>
          </div>
        </div>

        {/* Color + type strip */}
        <div className="grid grid-cols-[1.4fr_1fr] border-t border-[#eef1f5]">
          <div className="border-r border-[#eef1f5] px-7 py-8">
            <div className={`${specLabel} mb-4`}>Palette</div>
            <div className="flex flex-wrap gap-2.5">
              {PALETTE.map((c) => (
                <div key={c.hex}>
                  <div className={`h-[52px] w-[76px] rounded-lg ${c.swatch}`} />
                  <div className="mt-1.5 font-mono text-[10px] text-[#62708a]">
                    {c.hex}
                  </div>
                  <div className="text-[11px] text-[#8a94a6]">{c.name}</div>
                </div>
              ))}
              <div>
                <div className="h-[52px] w-32 rounded-lg bg-[linear-gradient(120deg,#d4f3ff,#8d7bff_45%,#635bff_68%,#ff8ec7)]" />
                <div className="mt-1.5 font-mono text-[10px] text-[#62708a]">
                  aurora
                </div>
                <div className="text-[11px] text-[#8a94a6]">Gradient</div>
              </div>
            </div>
          </div>
          <div className="px-7 py-8">
            <div className={`${specLabel} mb-4`}>Typeface — Geist</div>
            <div className="text-[34px] font-bold leading-none tracking-[-0.03em] text-ink">
              Aa
            </div>
            <div className="mt-2.5 text-[13px] leading-[1.6] text-[#62708a]">
              Geist for display &amp; body ·{" "}
              <span className="font-mono">Geist Mono</span> for figures and code.
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
