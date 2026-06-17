import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogoGlyph } from "@/components/brand/logo-mark";
import { SectionLabel } from "./section-label";

const cardShadow =
  "shadow-[0_1px_2px_rgba(10,37,64,0.06),0_12px_36px_rgba(10,37,64,0.08)]";

const PHOTO_GRADIENTS = [
  "from-[#635BFF] to-[#9b63ff]",
  "from-[#0A2540] to-[#425466]",
  "from-[#9b63ff] to-[#ff8ec7]",
  "from-[#d6f3ff] to-[#8d7bff]",
  "from-[#635BFF] to-[#4B45C6]",
  "from-[#ff8ec7] to-[#9b63ff]",
];

export function FacebookSection() {
  return (
    <section>
      <SectionLabel>03 — Facebook Business Page</SectionLabel>
      <Card className={`overflow-hidden rounded-2xl border-0 ${cardShadow}`}>
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-[#dfe3ea] bg-[#e9ecf1] px-4 py-[11px]">
          <div className="flex gap-[7px]">
            <span className="size-[11px] rounded-full bg-[#ff5f57]" />
            <span className="size-[11px] rounded-full bg-[#febc2e]" />
            <span className="size-[11px] rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 rounded-[7px] bg-white px-3.5 py-1.5 font-mono text-[12.5px] text-[#65676b]">
            facebook.com/AgentlyCRM
          </div>
        </div>

        {/* FB content */}
        <div className="bg-[#f0f2f5] pb-7">
          {/* Cover */}
          <div className="relative h-60 overflow-hidden bg-[linear-gradient(120deg,#4B45C6_0%,#635BFF_38%,#9b63ff_70%,#ff8ec7_110%)]">
            <div className="absolute right-12 top-1/2 -translate-y-1/2 text-right">
              <div className="text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
                The CRM built for
                <br />
                insurance agents.
              </div>
              <div className="mt-2.5 font-mono text-[15px] text-white/90">
                app.agently.net
              </div>
            </div>
            <div className="absolute -bottom-[60px] -left-10 size-60 rounded-full bg-white/[0.08]" />
          </div>

          {/* Profile header */}
          <div className="border-b border-[#dfe3ea] bg-white px-9">
            <div className="relative mx-auto flex max-w-[1000px] items-end gap-5">
              <div className="-mt-11 size-[132px] rounded-full bg-white p-[5px] shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                <div className="flex size-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#9D8BFF,#635BFF,#4B45C6)]">
                  <LogoGlyph size={64} />
                </div>
              </div>
              <div className="flex-1 py-[18px]">
                <div className="text-[30px] font-extrabold tracking-[-0.02em] text-[#050505]">
                  Agently
                </div>
                <div className="mt-[3px] text-[15px] text-[#65676b]">
                  Software company · CRM for insurance agents
                </div>
                <div className="mt-1.5 text-sm text-[#65676b]">
                  <strong className="text-[#050505]">2,418</strong> followers ·{" "}
                  <strong className="text-[#050505]">1,902</strong> likes
                </div>
              </div>
              <div className="flex gap-[9px] pb-[18px]">
                <Button variant="fb" size="fb">
                  👍 Like
                </Button>
                <Button variant="fb" size="fb">
                  Follow
                </Button>
                <Button variant="fbGray" size="fb">
                  Message
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <div className="mx-auto flex max-w-[1000px] gap-1.5 pt-1.5">
              <div className="border-b-[3px] border-[#1877F2] px-4 py-3.5 text-[15px] font-semibold text-[#1877F2]">
                Posts
              </div>
              {["About", "Reviews", "Photos", "More"].map((t) => (
                <div
                  key={t}
                  className="px-4 py-3.5 text-[15px] font-medium text-[#65676b]"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Body grid */}
          <div className="mx-auto mt-5 grid max-w-[1000px] grid-cols-[380px_1fr] items-start gap-[18px] px-9">
            {/* Left column */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[10px] bg-white p-[18px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                <div className="mb-3 text-[19px] font-bold text-[#050505]">
                  Intro
                </div>
                <div className="pb-3.5 text-center text-[15px] leading-[1.5] text-[#050505]">
                  Track policies, automate renewals, and grow your book — built by
                  a 25-year insurance veteran.
                </div>
                <div className="flex flex-col gap-[13px] border-t border-[#eceef1] pt-3.5 text-sm text-[#65676b]">
                  <div className="flex items-center gap-[11px]">
                    🌐 <span className="text-[#1877F2]">app.agently.net</span>
                  </div>
                  <div className="flex items-center gap-[11px]">
                    ✉️ hello@agently.net
                  </div>
                  <div className="flex items-center gap-[11px]">
                    ⭐ 4.9 · Based on 126 reviews
                  </div>
                </div>
              </div>

              <div className="rounded-[10px] bg-white p-[18px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                <div className="mb-3 text-[19px] font-bold text-[#050505]">
                  Photos
                </div>
                <div className="grid grid-cols-3 gap-[5px]">
                  {PHOTO_GRADIENTS.map((g, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-lg bg-gradient-to-br ${g}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: posts */}
            <div className="flex flex-col gap-4">
              {/* Post 1 */}
              <div className="overflow-hidden rounded-[10px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                <PostHeader time="3d" />
                <div className="px-4 pb-3.5 text-[15px] leading-[1.5] text-[#050505]">
                  Renewal season doesn&apos;t have to be chaos. Agently flags
                  every policy coming due 30, 60, and 90 days out — and drafts the
                  outreach for you. 🗓️
                </div>
                <div className="flex h-[280px] items-center justify-center bg-[linear-gradient(120deg,#4B45C6,#635BFF_50%,#9b63ff)]">
                  <div className="rounded-xl bg-white/95 px-6 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
                    <div className="font-mono text-xs uppercase tracking-[0.06em] text-[#8a94a6]">
                      Renewals due · 30 days
                    </div>
                    <div className="mt-1.5 font-mono text-[32px] font-extrabold text-ink">
                      $48,210
                    </div>
                    <div className="mt-1 text-[13px] font-semibold text-[#16a34a]">
                      12 policies · auto-reminders on ✓
                    </div>
                  </div>
                </div>
                <PostStats likes="184" meta="26 comments · 9 shares" />
                <PostActions />
              </div>

              {/* Post 2 */}
              <div className="overflow-hidden rounded-[10px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                <PostHeader time="1w" />
                <div className="px-4 pb-3.5 text-[15px] leading-[1.5] text-[#050505]">
                  New: launch Facebook &amp; Google lead-gen ads straight from your
                  CRM. No agency, no second login. Built in by someone who&apos;s
                  run ad campaigns for 12 years. 🚀
                </div>
                <div className="mx-4 mb-3.5 overflow-hidden rounded-[10px] border border-[#e4e6eb]">
                  <div className="h-[150px] bg-[linear-gradient(135deg,#0A2540,#1c3a5e)]" />
                  <div className="bg-[#f7f8fa] px-3.5 py-3">
                    <div className="font-mono text-xs uppercase text-[#65676b]">
                      app.agently.net
                    </div>
                    <div className="mt-[3px] text-base font-bold text-[#050505]">
                      Run lead-gen ads from your CRM
                    </div>
                    <div className="mt-0.5 text-sm text-[#65676b]">
                      Launch, track, and route new leads into your pipeline
                      automatically.
                    </div>
                  </div>
                </div>
                <PostStats likes="312" meta="54 comments · 22 shares" />
                <PostActions />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

/* ── Sub-components ── */

function PostHeader({ time }: { time: string }) {
  return (
    <div className="flex items-center gap-[11px] px-4 pb-3 pt-4">
      <div className="flex size-[42px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#9D8BFF,#635BFF)]">
        <LogoGlyph size={22} />
      </div>
      <div>
        <div className="text-[15px] font-bold text-[#050505]">Agently</div>
        <div className="text-[13px] text-[#65676b]">{time} · 🌐</div>
      </div>
    </div>
  );
}

function PostStats({ likes, meta }: { likes: string; meta: string }) {
  return (
    <div className="flex justify-between border-b border-[#eceef1] px-4 py-[11px] text-[13.5px] text-[#65676b]">
      <span>👍❤️ {likes}</span>
      <span>{meta}</span>
    </div>
  );
}

function PostActions() {
  return (
    <div className="flex justify-around px-4 py-1.5 text-sm font-semibold text-[#65676b]">
      <span className="p-2">👍 Like</span>
      <span className="p-2">💬 Comment</span>
      <span className="p-2">↗ Share</span>
    </div>
  );
}
