import { LogoMark } from "@/components/brand/logo-mark";

/**
 * The floating in-app "pipeline" mockup shown beside the hero. Purely
 * decorative — a stylized preview of the product UI.
 */
export function ProductMockup() {
  return (
    <div className="relative animate-float">
      <div className="overflow-hidden rounded-[14px] border border-white/60 bg-white shadow-[0_30px_60px_rgba(10,37,64,0.28)]">
        {/* App top bar */}
        <div className="flex items-center gap-2 border-b border-[#eef1f5] bg-[#fbfcfe] px-3.5 py-[11px]">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#e6ebf1]" />
            <span className="size-2.5 rounded-full bg-[#e6ebf1]" />
            <span className="size-2.5 rounded-full bg-[#e6ebf1]" />
          </div>
          <div className="ml-2 font-mono text-[11px] text-[#8a94a6]">
            app.agently.com/pipeline
          </div>
        </div>

        <div className="grid grid-cols-[52px_1fr]">
          {/* Mini sidebar */}
          <div className="flex flex-col items-center gap-[18px] bg-ink py-3.5">
            <LogoMark size={22} square="#635BFF" />
            <div className="size-[22px] rounded-md bg-brand" />
            <div className="size-[22px] rounded-md bg-white/[0.12]" />
            <div className="size-[22px] rounded-md bg-white/[0.12]" />
            <div className="size-[22px] rounded-md bg-white/[0.12]" />
          </div>

          {/* Main */}
          <div className="p-4">
            <div className="mb-3.5 flex items-center justify-between">
              <span className="text-sm font-bold text-ink">Pipeline</span>
              <span className="rounded-md bg-[#e9f9ef] px-2 py-[3px] font-mono text-[11px] font-semibold text-[#16a34a]">
                +18% this mo
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <PipelineColumn label="New" labelClass="text-[#8a94a6]">
                <PipelineCard name="Dana R." sub="Auto · $1,240/yr" />
                <PipelineCard name="Priya N." sub="Home · $2,010/yr" />
              </PipelineColumn>
              <PipelineColumn label="Quoting" labelClass="text-[#8a94a6]">
                <PipelineCard name="Marcus T." sub="Life · $480/yr" tone="quoting" />
                <PipelineCard name="Bell Co." sub="Comm. · $7.4k/yr" />
              </PipelineColumn>
              <PipelineColumn label="Bound" labelClass="text-[#16a34a]">
                <PipelineCard name="Owen K." sub="Auto · Bound ✓" tone="bound" />
                <PipelineCard name="Lena M." sub="Home · Bound ✓" tone="bound" />
              </PipelineColumn>
            </div>

            <div className="mt-3 flex items-center justify-between rounded-[9px] bg-ink px-3.5 py-[11px]">
              <div>
                <div className="text-[10px] text-[#8aa0bd]">
                  Renewals due in 30 days
                </div>
                <div className="font-mono text-[15px] font-bold text-white">
                  $48,210
                </div>
              </div>
              <span className="rounded-[7px] bg-brand px-[11px] py-1.5 text-[11px] font-semibold text-white">
                Auto-renew on
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <div className="absolute -bottom-5 -right-[18px] flex max-w-[240px] items-center gap-2.5 rounded-[11px] border border-[#eef1f5] bg-white px-3.5 py-[11px] shadow-[0_14px_30px_rgba(10,37,64,0.18)]">
        <div className="flex size-[30px] items-center justify-center rounded-lg bg-[linear-gradient(135deg,#635BFF,#9b63ff)] text-[15px] text-white">
          ✦
        </div>
        <div>
          <div className="text-[11.5px] font-bold text-ink">AI follow-up sent</div>
          <div className="text-[10.5px] text-[#8a94a6]">to 12 lapsing policyholders</div>
        </div>
      </div>
    </div>
  );
}

function PipelineColumn({
  label,
  labelClass,
  children,
}: {
  label: string;
  labelClass: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        className={`mb-2 text-[10px] font-bold uppercase tracking-[0.06em] ${labelClass}`}
      >
        {label}
      </div>
      <div className="flex flex-col gap-[7px]">{children}</div>
    </div>
  );
}

function PipelineCard({
  name,
  sub,
  tone = "default",
}: {
  name: string;
  sub: string;
  tone?: "default" | "quoting" | "bound";
}) {
  const surface = {
    default: "bg-mist border-[#eef1f5]",
    quoting: "bg-[#eef0ff] border-[#d9d6ff]",
    bound: "bg-[#e9f9ef] border-[#c3ebd2]",
  }[tone];
  const subColor = {
    default: "text-[#8a94a6]",
    quoting: "text-brand font-semibold",
    bound: "text-[#16a34a] font-semibold",
  }[tone];

  return (
    <div className={`rounded-lg border p-[9px] ${surface}`}>
      <div className="text-[11px] font-semibold text-ink">{name}</div>
      <div className={`mt-0.5 text-[10px] ${subColor}`}>{sub}</div>
    </div>
  );
}
