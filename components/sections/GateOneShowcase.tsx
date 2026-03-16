"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { DimensionLine } from "@/components/ui/DimensionLine";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

export function GateOneShowcase() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary py-24 md:py-32">
      <NoiseOverlay opacity={0.02} />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-20">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-secondary">
            Флагманський проєкт
          </p>
        </RevealOnScroll>

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Left — info */}
          <div className="md:col-span-7">
            <RevealOnScroll delay={0.1}>
              <h2 className="font-display text-3xl text-text-primary md:text-5xl">
                Gate One Brovary
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="mt-6 max-w-lg font-body text-lg font-light leading-relaxed text-text-secondary">
                Логістичний комплекс класу A+ на трасі E95 в Броварах. 7 000 м²,
                збудований за 36 місяців від фундаменту до введення в
                експлуатацію.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-6">
                {/* Built by */}
                <div className="flex items-center gap-3">
                  <span
                    className="h-px w-8"
                    style={{ backgroundColor: "#E8572A" }}
                  />
                  <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                    Побудовано <span className="text-text-primary">TEHMAS</span>
                  </span>
                </div>

                {/* Managed by */}
                <div className="flex items-center gap-3">
                  <span
                    className="h-px w-8"
                    style={{ backgroundColor: "#D4A843" }}
                  />
                  <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                    Керується{" "}
                    <span className="text-text-primary">The Roof</span>
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <div className="mt-8 max-w-md">
                <DimensionLine label="7 000 м²" />
              </div>
            </RevealOnScroll>
          </div>

          {/* Right — metrics */}
          <div className="flex flex-col justify-center gap-8 md:col-span-5">
            {[
              { value: "7 000", unit: "м²", label: "Загальна площа" },
              { value: "36", unit: "міс", label: "Термін будівництва" },
              { value: "A+", unit: "", label: "Клас комплексу" },
            ].map((metric, i) => (
              <RevealOnScroll key={metric.label} delay={0.2 + i * 0.1}>
                <div className="flex items-baseline gap-3">
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
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
