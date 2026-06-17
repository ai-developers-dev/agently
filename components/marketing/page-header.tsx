import { Container } from "@/components/site/container";

/**
 * Compact page header for interior routes — soft gradient wash with an eyebrow,
 * title, and optional lede.
 */
export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[#eef1f5] bg-[linear-gradient(180deg,#f3f1ff_0%,#ffffff_100%)]">
      <div className="absolute -right-24 -top-24 size-[320px] rounded-full bg-[radial-gradient(circle,rgba(99,91,255,0.18),transparent_65%)]" />
      <Container className="relative py-16 sm:py-20">
        <div className="max-w-[720px]">
          {eyebrow && (
            <div className="mb-3.5 font-mono text-[13px] font-semibold uppercase tracking-[0.1em] text-brand">
              {eyebrow}
            </div>
          )}
          <h1 className="text-balance text-[34px] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink sm:text-[46px]">
            {title}
          </h1>
          {children && (
            <p className="mt-5 max-w-[600px] text-pretty text-lg leading-[1.55] text-[#52617a]">
              {children}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
