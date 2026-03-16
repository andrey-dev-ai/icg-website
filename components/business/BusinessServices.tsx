"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { BusinessData } from "@/content/businesses";

interface BusinessServicesProps {
  business: BusinessData;
}

export function BusinessServices({ business }: BusinessServicesProps) {
  return (
    <section className="bg-bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-20">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
            Послуги та продукція
          </p>
        </RevealOnScroll>

        <div className="mt-12">
          {business.services.map((service, i) => (
            <RevealOnScroll key={service.title} delay={i * 0.1}>
              <div
                className={`border-t border-line py-10 md:py-14 ${
                  i % 2 === 1 ? "md:pl-[8.33%]" : ""
                }`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-16">
                  {/* Number */}
                  <span className="shrink-0 font-mono text-sm text-text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="max-w-2xl">
                    <h3 className="font-display text-xl text-text-primary md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 font-body text-sm font-light leading-relaxed text-text-secondary md:text-base">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Accent line */}
                <div
                  className="mt-6 h-px w-12"
                  style={{ backgroundColor: business.accent, opacity: 0.5 }}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
