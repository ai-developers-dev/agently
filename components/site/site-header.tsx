"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "./brand-logo";
import { Container } from "./container";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Subtle border/shadow once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white/80 backdrop-blur-md transition-shadow",
        scrolled && "shadow-[0_1px_0_rgba(10,37,64,0.08)]",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <BrandLogo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {siteConfig.nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[15px] font-semibold transition-colors hover:text-brand",
                    active ? "text-brand" : "text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-5 md:flex">
            <a
              href={siteConfig.appUrl}
              className="text-[15px] font-semibold text-ink transition-colors hover:text-brand"
            >
              Sign in
            </a>
            <Button asChild variant="navy" size="nav">
              <Link href="/start-free">
                Start free <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-lg text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#eef1f5] bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-3 text-base font-semibold text-ink hover:bg-mist"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-[#eef1f5] pt-4">
              <a
                href={siteConfig.appUrl}
                className="px-2 text-base font-semibold text-ink"
              >
                Sign in
              </a>
              <Button asChild size="block">
                <Link href="/start-free">
                  Start free <ArrowRight className="size-[18px]" />
                </Link>
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
