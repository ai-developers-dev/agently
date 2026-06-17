import { LogoMark } from "@/components/brand/logo-mark";

/**
 * Stylized in-app mockups for each Product feature block. Decorative, brand-
 * consistent previews — same visual language as the hero's pipeline mockup.
 */

function Frame({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-white/60 bg-white shadow-[0_24px_50px_rgba(10,37,64,0.18)]">
      <div className="flex items-center gap-2 border-b border-[#eef1f5] bg-[#fbfcfe] px-3.5 py-[11px]">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#e6ebf1]" />
          <span className="size-2.5 rounded-full bg-[#e6ebf1]" />
          <span className="size-2.5 rounded-full bg-[#e6ebf1]" />
        </div>
        <div className="ml-2 font-mono text-[11px] text-[#8a94a6]">{url}</div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

const ROW = "flex items-center justify-between rounded-lg border px-3 py-2.5";

/* ── Pipeline: revenue-by-stage forecast ── */
export function PipelineVisual() {
  const bars = [
    { m: "Jan", h: 38 },
    { m: "Feb", h: 52 },
    { m: "Mar", h: 46 },
    { m: "Apr", h: 64 },
    { m: "May", h: 72 },
    { m: "Jun", h: 88 },
  ];
  return (
    <Frame url="app.agently.net/pipeline">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-bold text-ink">Revenue forecast</span>
        <span className="rounded-md bg-[#e9f9ef] px-2 py-[3px] font-mono text-[11px] font-semibold text-[#16a34a]">
          +18% this mo
        </span>
      </div>
      <div className="flex h-[120px] items-end gap-2.5">
        {bars.map((b, i) => (
          <div key={b.m} className="flex flex-1 flex-col items-center gap-1.5">
            <div
              className="w-full rounded-t-md"
              style={{
                height: `${b.h}%`,
                background:
                  i === bars.length - 1
                    ? "linear-gradient(180deg,#9D8BFF,#635BFF)"
                    : "#e6ebf1",
              }}
            />
            <span className="text-[9px] text-[#8a94a6]">{b.m}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-4 border-t border-[#eef1f5] pt-3 text-[10px] text-[#8a94a6]">
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-brand" /> Bound
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-[#c3b8ff]" /> Quoting
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-[#e6ebf1]" /> New
        </span>
      </div>
    </Frame>
  );
}

/* ── Policies: a single client record across lines ── */
export function PolicyVisual() {
  const policies = [
    { line: "Auto", carrier: "Progressive", premium: "$1,240/yr" },
    { line: "Home", carrier: "Travelers", premium: "$2,010/yr" },
    { line: "Life", carrier: "Lincoln", premium: "$480/yr" },
  ];
  return (
    <Frame url="app.agently.net/clients/rivera">
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex size-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#635BFF,#9b63ff)] text-sm font-bold text-white">
          D
        </div>
        <div>
          <div className="text-[13px] font-bold text-ink">Dana Rivera</div>
          <div className="text-[10px] text-[#8a94a6]">3 policies · since 2021</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {policies.map((p) => (
          <div key={p.line} className={`${ROW} border-[#eef1f5] bg-mist`}>
            <div className="flex items-center gap-2.5">
              <span className="rounded-md bg-[#eef0ff] px-2 py-1 text-[10px] font-bold text-brand">
                {p.line}
              </span>
              <span className="text-[11px] text-[#62708a]">{p.carrier}</span>
            </div>
            <span className="font-mono text-[11px] font-semibold text-ink">
              {p.premium}
            </span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* ── Renewals: upcoming list with reminder state ── */
export function RenewalVisual() {
  const items = [
    { name: "Owen K.", days: "in 12 days", tone: "soon" },
    { name: "Bell Co.", days: "in 28 days", tone: "ok" },
    { name: "Lena M.", days: "in 41 days", tone: "ok" },
  ];
  return (
    <Frame url="app.agently.net/renewals">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-bold text-ink">Upcoming renewals</span>
        <span className="rounded-md bg-[#eef0ff] px-2 py-[3px] text-[10px] font-semibold text-brand">
          Auto-reminders on
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {items.map((it) => (
          <div key={it.name} className={`${ROW} border-[#eef1f5] bg-white`}>
            <div className="flex items-center gap-2.5">
              <span
                className={`size-2 rounded-full ${
                  it.tone === "soon" ? "bg-[#f59e0b]" : "bg-[#16a34a]"
                }`}
              />
              <span className="text-[11px] font-semibold text-ink">{it.name}</span>
            </div>
            <span className="text-[10px] text-[#8a94a6]">{it.days}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg bg-[#eef0ff] px-3 py-2 text-[10px] text-brand">
        ✦ 3-touch reminder sequence scheduled
      </div>
    </Frame>
  );
}

/* ── Commissions: paid vs pending ── */
export function CommissionVisual() {
  const rows = [
    { carrier: "Progressive", amt: "$3,120", paid: true },
    { carrier: "Travelers", amt: "$2,480", paid: true },
    { carrier: "Lincoln", amt: "$1,260", paid: false },
  ];
  return (
    <Frame url="app.agently.net/commissions">
      <div className="mb-3 grid grid-cols-2 gap-2.5">
        <div className="rounded-lg bg-[#e9f9ef] p-3">
          <div className="text-[10px] text-[#16a34a]">Paid this month</div>
          <div className="font-mono text-[18px] font-bold text-ink">$5,600</div>
        </div>
        <div className="rounded-lg bg-mist p-3">
          <div className="text-[10px] text-[#8a94a6]">Pending</div>
          <div className="font-mono text-[18px] font-bold text-ink">$1,260</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {rows.map((r) => (
          <div key={r.carrier} className={`${ROW} border-[#eef1f5] bg-white`}>
            <span className="text-[11px] text-[#62708a]">{r.carrier}</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-semibold text-ink">
                {r.amt}
              </span>
              <span
                className={`rounded px-1.5 py-0.5 text-[9px] font-semibold ${
                  r.paid
                    ? "bg-[#e9f9ef] text-[#16a34a]"
                    : "bg-[#fff4e5] text-[#b45309]"
                }`}
              >
                {r.paid ? "Paid" : "Pending"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* ── Campaigns: ad preview + metrics ── */
export function CampaignVisual() {
  return (
    <Frame url="app.agently.net/campaigns">
      <div className="overflow-hidden rounded-lg border border-[#eef1f5]">
        <div className="flex items-center gap-2 px-3 py-2">
          <div className="flex size-6 items-center justify-center rounded-full bg-ink">
            <LogoMark size={14} square="#635BFF" />
          </div>
          <div className="text-[10px] font-bold text-ink">Agently · Sponsored</div>
        </div>
        <div className="h-[64px] bg-[linear-gradient(135deg,#635BFF,#9b63ff)]" />
        <div className="px-3 py-2">
          <div className="text-[11px] font-bold text-ink">
            Lower your insurance in 10 minutes
          </div>
          <div className="text-[9px] text-[#8a94a6]">agently.net · Get a quote</div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        {[
          { k: "Leads", v: "164" },
          { k: "Cost / lead", v: "$8.40" },
          { k: "CTR", v: "3.2%" },
        ].map((m) => (
          <div key={m.k} className="rounded-lg bg-mist py-2">
            <div className="font-mono text-[13px] font-bold text-ink">{m.v}</div>
            <div className="text-[9px] text-[#8a94a6]">{m.k}</div>
          </div>
        ))}
      </div>
    </Frame>
  );
}
