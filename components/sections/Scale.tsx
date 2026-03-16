"use client";

import { CountUp } from "@/components/ui/CountUp";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const METRICS = [
  { end: 2200000, suffix: " т/рік", label: "Обсяг видобутку", separator: " " },
  { end: 120, suffix: "+", label: "Промислових об'єктів збудовано" },
  { end: 5, suffix: "+", label: "Країн експорту" },
  { end: 40, suffix: "+", label: "Одиниць власної техніки" },
];

export function Scale() {
  return (
    <section className="bg-bg-light py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-20">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-on-light-muted">
            Масштаб
          </p>
          <h2 className="mt-4 font-display text-3xl text-text-on-light md:text-4xl">
            Цифри, що говорять
          </h2>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-4">
          {METRICS.map((metric, i) => (
            <RevealOnScroll key={metric.label} delay={i * 0.12}>
              <div className="border-t-2 border-accent-primary pt-6">
                <CountUp
                  end={metric.end}
                  suffix={metric.suffix}
                  separator={metric.separator || " "}
                  className="font-display text-3xl text-text-on-light md:text-4xl lg:text-5xl"
                  duration={metric.end > 10000 ? 3000 : 2000}
                />
                <p className="mt-3 font-body text-sm text-text-on-light-secondary">
                  {metric.label}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
