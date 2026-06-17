import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GradientDefs } from "@/components/brand/gradient-defs";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Agently — CRM for Insurance Agents",
  description:
    "Track every policy, automate renewals, follow up with AI, and run your own ad campaigns — all from one workspace. Built by a 25-year insurance veteran.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <GradientDefs />
      </body>
    </html>
  );
}
