import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { businesses } from "@/content/businesses";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";
import { DimensionLine } from "@/components/ui/DimensionLine";

export const metadata: Metadata = {
  title: "Бізнеси — ICG Інвестиційно-комерційна група",
  description:
    "TEHMAS, Grand Pellets, The Roof, Захистбуд — чотири напрямки бізнесу ICG.",
};

const BUSINESS_ORDER = ["tehmas", "grand-pellets", "the-roof", "zahistbud"];

export default async function BusinessesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-bg-primary pb-16 pt-32 md:pb-24 md:pt-40">
        <BlueprintGrid />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
            ICG
          </p>
          <h1 className="mt-6 font-display text-4xl text-text-primary md:text-6xl">
            Портфель бізнесів
          </h1>
          <div className="mt-6 max-w-xs">
            <DimensionLine label="4 напрямки" />
          </div>
        </div>
      </section>

      {/* Business list */}
      <section className="bg-bg-primary pb-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-20">
          {BUSINESS_ORDER.map((slug, i) => {
            const biz = businesses[slug];
            if (!biz) return null;

            return (
              <Link
                key={slug}
                href={`/businesses/${slug}` as "/businesses/tehmas"}
                className="group flex flex-col border-b border-line py-10 transition-colors hover:bg-bg-secondary/30 md:flex-row md:items-center md:py-14"
              >
                {/* Number */}
                <span className="mb-2 font-mono text-sm text-text-muted md:mb-0 md:w-20">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Accent dot */}
                <span
                  className="mb-4 hidden h-3 w-3 shrink-0 md:mb-0 md:mr-8 md:block"
                  style={{ backgroundColor: biz.accent }}
                />

                {/* Info */}
                <div className="flex-1">
                  <h2 className="font-display text-2xl text-text-primary transition-colors group-hover:text-accent-primary md:text-3xl">
                    {biz.name}
                  </h2>
                  <p className="mt-2 font-body text-sm font-light text-text-secondary">
                    {biz.tagline}
                  </p>
                </div>

                {/* Metrics preview */}
                <div className="mt-4 flex gap-6 md:mt-0">
                  {biz.metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="text-right">
                      <span className="font-display text-lg text-text-primary">
                        {m.value}
                        <span className="font-mono text-xs text-text-muted">
                          {m.unit}
                        </span>
                      </span>
                      <p className="font-mono text-xs text-text-muted">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <span className="ml-8 hidden font-mono text-text-muted transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent-primary md:block">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
