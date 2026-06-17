import type { Metadata } from "next";
import { ShowcaseHeader } from "@/components/sections/showcase-header";
import { IdentitySection } from "@/components/sections/identity-section";
import { FacebookSection } from "@/components/sections/facebook-section";

export const metadata: Metadata = {
  title: "Brand & Identity",
  description:
    "The Agently brand system — logo, palette, type, and social presence.",
};

/**
 * Brand reference. Preserves the original Claude Design boards (identity +
 * social) as a living style guide alongside the marketing site.
 */
export default function BrandPage() {
  return (
    <div className="bg-[#eceff3] px-5 py-14 sm:px-8">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-[72px]">
        <ShowcaseHeader />
        <IdentitySection />
        <FacebookSection />
      </div>
    </div>
  );
}
