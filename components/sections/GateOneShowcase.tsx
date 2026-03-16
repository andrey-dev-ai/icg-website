"use client";

import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function GateOneShowcase() {
  return (
    <section className="relative overflow-hidden bg-bg-primary">
      {/* Full-width photo */}
      <div className="relative aspect-[21/9] w-full md:aspect-[3/1]">
        <Image
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
          alt="Gate One Brovary — логістичний комплекс класу A+"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/30 to-transparent" />

        {/* Label on image */}
        <div className="absolute left-6 top-6 md:left-20 md:top-12">
          <span className="bg-accent-secondary/90 px-3 py-1 font-mono text-xs uppercase tracking-wider text-white">
            Флагманський проєкт
          </span>
        </div>
      </div>

      {/* Content below photo */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 md:px-20 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Left — info */}
          <div className="md:col-span-7">
            <RevealOnScroll>
              <h2 className="font-display text-3xl text-text-primary md:text-5xl">
                Gate One Brovary
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <p className="mt-6 max-w-lg font-body text-base font-light leading-relaxed text-text-secondary">
                Логістичний комплекс класу A+ на трасі E95 в Броварах. 7 000 м²,
                збудований за 36 місяців від фундаменту до введення в
                експлуатацію.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 bg-accent-tehmas" />
                  <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                    Побудовано <span className="text-text-primary">TEHMAS</span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 bg-accent-the-roof" />
                  <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                    Керується{" "}
                    <span className="text-text-primary">The Roof</span>
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right — metrics */}
          <div className="flex flex-col justify-center gap-8 md:col-span-4 md:col-start-9">
            {[
              { value: "7 000", unit: "м²", label: "Загальна площа" },
              { value: "36", unit: "міс", label: "Термін будівництва" },
              { value: "A+", unit: "", label: "Клас комплексу" },
            ].map((metric, i) => (
              <RevealOnScroll key={metric.label} delay={0.1 + i * 0.1}>
                <div className="border-l-2 border-accent-secondary pl-4">
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
