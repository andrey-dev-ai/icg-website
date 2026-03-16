"use client";

import { CountUp } from "@/components/ui/CountUp";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";

const METRICS = [
  { end: 2200000, suffix: " т/рік", label: "Обсяг видобутку", separator: " " },
  { end: 120, suffix: "+", label: "Промислових об'єктів збудовано" },
  { end: 5, suffix: "+", label: "Країн експорту" },
  { end: 40, suffix: "+", label: "Одиниць власної техніки" },
];

export function Scale() {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-24 md:py-40">
      <BlueprintGrid />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-20">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
            Масштаб
          </p>
        </RevealOnScroll>

        {/* Metrics grid — asymmetric */}
        <div className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-2 md:gap-x-24 md:gap-y-24">
          {METRICS.map((metric, i) => (
            <RevealOnScroll key={metric.label} delay={i * 0.15}>
              <div
                className={`${
                  i % 2 === 1 ? "md:mt-12" : ""
                }`}
              >
                <div className="flex items-baseline">
                  <CountUp
                    end={metric.end}
                    suffix={metric.suffix}
                    separator={metric.separator || " "}
                    className="font-display text-5xl text-text-primary md:text-7xl lg:text-8xl"
                    duration={metric.end > 10000 ? 3000 : 2000}
                  />
                </div>
                <p className="mt-4 font-body text-sm text-text-secondary md:text-base">
                  {metric.label}
                </p>
                {/* Accent line under metric */}
                <div className="mt-4 h-px w-16 bg-accent-primary opacity-40" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
