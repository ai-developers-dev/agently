import { siteConfig } from "@/lib/config";
import { LeadForm } from "./lead-form";

/**
 * Embeds the GoHighLevel calendar widget when NEXT_PUBLIC_GHL_CALENDAR_URL is
 * set; otherwise falls back to the lead form so the page is always functional.
 */
export function CalendarEmbed() {
  if (!siteConfig.calendarUrl) {
    return (
      <div>
        <div className="mb-4 rounded-lg border border-dashed border-[#d9d6ff] bg-[#f7f6ff] px-4 py-3 text-sm text-steel">
          Online scheduling isn&apos;t connected yet. Leave your details and
          we&apos;ll reach out to book a time.
        </div>
        <LeadForm source="book-a-demo" submitLabel="Request a demo" withMessage />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e6ebf1] bg-white shadow-[0_1px_2px_rgba(10,37,64,0.06),0_12px_36px_rgba(10,37,64,0.06)]">
      <iframe
        src={siteConfig.calendarUrl}
        title="Book a demo"
        className="h-[720px] w-full"
        loading="lazy"
      />
    </div>
  );
}
