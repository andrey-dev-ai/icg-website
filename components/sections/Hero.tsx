"use client";

import Image from "next/image";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";
import { DimensionLine } from "@/components/ui/DimensionLine";

const MARQUEE_ITEMS = [
  "TEHMAS",
  "Grand Pellets",
  "The Roof",
  "Захистбуд",
  "Gate One BR",
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        alt="Industrial construction site"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f]/95 via-[#0f0f0f]/75 to-[#0f0f0f]/40" />

      <BlueprintGrid className="opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-32 md:px-20">
        <div className="max-w-3xl">
          {/* Meta label */}
          <p
            className="font-mono text-xs uppercase tracking-[0.3em] text-accent-primary"
            style={{ animation: "fadeIn 0.6s var(--ease-heavy) both" }}
          >
            ICG GROUP
          </p>

          {/* Headline */}
          <h1 className="mt-8 font-display leading-[1.05]">
            {["Будуємо.", "Захищаємо.", "Створюємо."].map((word, i) => (
              <span
                key={word}
                className="block text-5xl text-text-primary md:text-7xl lg:text-8xl"
                style={{
                  animation: `clipRevealUp 0.8s var(--ease-heavy) ${0.2 + i * 0.15}s both`,
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Dimension line */}
          <div
            className="mt-8 max-w-xs"
            style={{ animation: "fadeIn 0.6s var(--ease-heavy) 0.8s both" }}
          >
            <DimensionLine label="EST. 2000" />
          </div>

          {/* Subheadline */}
          <p
            className="mt-8 max-w-lg font-body text-lg font-light leading-relaxed text-text-secondary"
            style={{ animation: "fadeIn 0.8s var(--ease-heavy) 1s both" }}
          >
            Промислове будівництво, логістика, енергетика, нерухомість та
            видобуток — чотири напрямки з єдиним стандартом якості.
          </p>

          {/* Quick stats */}
          <div
            className="mt-12 flex flex-wrap gap-8"
            style={{ animation: "fadeIn 0.8s var(--ease-heavy) 1.2s both" }}
          >
            {[
              { value: "120+", label: "об'єктів" },
              { value: "40+", label: "техніки" },
              { value: "5+", label: "країн" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="font-display text-2xl text-text-primary md:text-3xl">
                  {stat.value}
                </span>
                <p className="mt-1 font-mono text-xs text-text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-[#0f0f0f]/80 py-4 backdrop-blur-sm">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marqueeScroll 20s linear infinite" }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
            (item, i) => (
              <span
                key={i}
                className="mx-8 font-mono text-sm uppercase tracking-[0.2em] text-text-muted"
              >
                {item}
                <span className="ml-8 text-accent-primary">·</span>
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
