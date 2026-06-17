import Link from "next/link";
import { LogoMark } from "@/components/brand/logo-mark";
import { Container } from "./container";
import { siteConfig } from "@/lib/config";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Pipeline", href: "/product#pipeline" },
      { label: "Policies", href: "/product#policies" },
      { label: "Renewals", href: "/product#renewals" },
      { label: "Ad campaigns", href: "/product#campaigns" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Solo agents", href: "/solutions#solo" },
      { label: "Agencies", href: "/solutions#agencies" },
      { label: "Brokerages", href: "/solutions#brokerages" },
      { label: "All lines", href: "/solutions#lines" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Resources", href: "/resources" },
      { label: "Book a demo", href: "/book-a-demo" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="mb-4 flex items-center gap-2.5"
              aria-label="Agently home"
            >
              <LogoMark size={28} square="#635BFF" dot="#ffffff" />
              <span className="text-[19px] font-bold tracking-[-0.03em] text-white">
                Agently
              </span>
            </Link>
            <p className="max-w-[260px] text-sm leading-[1.6] text-[#8aa0bd]">
              The CRM built for insurance agents. From your first lead to your
              thousandth policy.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-[#8aa0bd]">
                {col.title}
              </div>
              <div className="flex flex-col gap-[11px] text-sm text-[#c3d0e0]">
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[13px] text-[#8aa0bd] sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <span className="font-mono">Made for agents, by an agent.</span>
        </div>
      </Container>
    </footer>
  );
}
