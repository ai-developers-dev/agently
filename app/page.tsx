import { ShowcaseHeader } from "@/components/sections/showcase-header";
import { IdentitySection } from "@/components/sections/identity-section";
import { LandingSection } from "@/components/sections/landing-section";
import { FacebookSection } from "@/components/sections/facebook-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eceff3] px-6 pb-20 pt-14">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-[72px]">
        <ShowcaseHeader />
        <IdentitySection />
        <LandingSection />
        <FacebookSection />
      </div>
    </main>
  );
}
