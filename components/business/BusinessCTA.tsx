"use client";

import { Link } from "@/i18n/routing";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { BusinessData } from "@/content/businesses";

interface BusinessCTAProps {
  business: BusinessData;
}

export function BusinessCTA({ business }: BusinessCTAProps) {
  return (
    <section className="bg-bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-20">
        <RevealOnScroll>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl text-text-primary md:text-3xl">
                Зацікавив {business.name}?
              </h2>
              {business.phone && (
                <a
                  href={`tel:${business.phone.replace(/[\s()]/g, "")}`}
                  className="mt-3 block font-mono text-sm text-text-secondary transition-colors hover:text-accent-primary"
                >
                  {business.phone}
                </a>
              )}
              {business.email && (
                <a
                  href={`mailto:${business.email}`}
                  className="mt-1 block font-mono text-sm text-text-secondary transition-colors hover:text-accent-primary"
                >
                  {business.email}
                </a>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              {/* Primary CTA — contact */}
              <Link
                href="/contact"
                className="border-2 px-8 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:bg-text-primary hover:text-bg-primary"
                style={{
                  borderColor: business.accent,
                  color: business.accent,
                }}
              >
                Зв&apos;язатись
              </Link>

              {/* Secondary CTA — external site */}
              {business.website && (
                <a
                  href={business.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-line px-8 py-3 font-mono text-sm uppercase tracking-wider text-text-secondary transition-all duration-300 hover:border-text-secondary hover:text-text-primary"
                >
                  На сайт →
                </a>
              )}
            </div>
          </div>
        </RevealOnScroll>

        {/* Other businesses */}
        <RevealOnScroll delay={0.2}>
          <div className="mt-16 border-t border-line pt-8">
            <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
              Інші напрямки ICG
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              {["tehmas", "grand-pellets", "the-roof", "zahistbud"]
                .filter((s) => s !== business.slug)
                .map((slug) => (
                  <Link
                    key={slug}
                    href={`/businesses/${slug}` as "/businesses/tehmas"}
                    className="border border-line px-4 py-2 font-mono text-xs text-text-muted transition-colors hover:border-text-secondary hover:text-text-secondary"
                  >
                    {slug === "tehmas"
                      ? "TEHMAS"
                      : slug === "grand-pellets"
                        ? "Grand Pellets"
                        : slug === "the-roof"
                          ? "The Roof"
                          : "Захистбуд"}
                  </Link>
                ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
