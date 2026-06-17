import { LogoMark } from "@/components/brand/logo-mark";

export function ShowcaseHeader() {
  return (
    <div className="flex items-center gap-4">
      <LogoMark size={44} dot="#ffffff" />
      <div>
        <div className="text-[21px] font-bold tracking-[-0.02em] text-ink">
          Agently — Brand &amp; Product System
        </div>
        <div className="text-sm font-medium text-[#62708a]">
          CRM for insurance agents · Stripe-inspired identity
        </div>
      </div>
    </div>
  );
}
