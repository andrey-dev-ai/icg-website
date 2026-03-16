"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { BusinessData } from "@/content/businesses";

interface BusinessAboutProps {
  business: BusinessData;
}

export function BusinessAbout({ business }: BusinessAboutProps) {
  return (
    <section className="bg-bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <RevealOnScroll>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
                Про напрямок
              </p>
            </RevealOnScroll>

            {business.description.map((paragraph, i) => (
              <RevealOnScroll key={i} delay={0.1 + i * 0.1}>
                <p className="mt-6 font-body text-base font-light leading-relaxed text-text-secondary">
                  {paragraph}
                </p>
              </RevealOnScroll>
            ))}
          </div>

          {/* Metrics sidebar */}
          <div className="flex flex-col gap-8 md:col-span-4 md:col-start-9">
            {business.metrics.map((metric, i) => (
              <RevealOnScroll key={metric.label} delay={0.2 + i * 0.1}>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl text-text-primary md:text-4xl">
                      {metric.value}
                    </span>
                    {metric.unit && (
                      <span className="font-mono text-sm text-text-muted">
                        {metric.unit}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-body text-sm text-text-secondary">
                    {metric.label}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
