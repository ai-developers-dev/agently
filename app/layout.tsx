import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GradientDefs } from "@/components/brand/gradient-defs";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { siteConfig } from "@/lib/config";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Agently — CRM for Insurance Agents",
    template: "%s — Agently",
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-[#eceff3] font-sans antialiased">
        {/* Page shell — caps the whole site (bands included) at the design's
            1280px card width; inner content stays at 1140 via <Container>. */}
        <div className="relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col bg-white shadow-[0_0_80px_rgba(10,37,64,0.07)]">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <GradientDefs />
      </body>
    </html>
  );
}
