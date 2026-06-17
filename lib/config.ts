/**
 * Central site configuration. Anything environment- or content-driven that
 * more than one component needs lives here.
 *
 * GHL / external wiring is read from env so the site builds and runs without
 * secrets, and goes live the moment they're set in the deployment:
 *   GHL_WEBHOOK_URL            — server-only; lead forms POST here (via /api/lead)
 *   NEXT_PUBLIC_GHL_CALENDAR_URL — GHL calendar embed URL for /book-a-demo
 *   NEXT_PUBLIC_APP_URL        — where "Sign in" / app links point
 */

export type NavItem = { label: string; href: string };

export const siteConfig = {
  name: "Agently",
  domain: "agently.net",
  description:
    "The CRM built for insurance agents. Track every policy, automate renewals, follow up with AI, and run your own ad campaigns — all from one workspace.",
  tagline: "The CRM built for insurance agents.",

  /** External app (the actual product login). */
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.agently.net",

  /** GHL calendar embed URL used on /book-a-demo. Empty → form fallback. */
  calendarUrl: process.env.NEXT_PUBLIC_GHL_CALENDAR_URL ?? "",

  nav: [
    { label: "Product", href: "/product" },
    { label: "Solutions", href: "/solutions" },
    { label: "Pricing", href: "/pricing" },
    { label: "Resources", href: "/resources" },
  ] satisfies NavItem[],
} as const;

export const PLANS = {
  annual: { solo: "24", agency: "59", brokerage: "129" },
  monthly: { solo: "29", agency: "69", brokerage: "149" },
} as const;
