"use client";

import Image from "next/image";
import { DimensionLine } from "@/components/ui/DimensionLine";
import type { BusinessData } from "@/content/businesses";

interface BusinessHeroProps {
  business: BusinessData;
}

export function BusinessHero({ business }: BusinessHeroProps) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      {/* Background photo */}
      <Image
        src={business.heroImage}
        alt={business.name}
        fill
        priority
        className="object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/60 to-[#0f0f0f]/30" />

      {/* Accent line top */}
      <div
        className="absolute left-0 top-0 z-10 h-1 w-full"
        style={{ backgroundColor: business.accent }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-20">
        <p
          className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted"
          style={{ animation: "fadeIn 0.6s var(--ease-heavy) both" }}
        >
          ICG / {business.name}
        </p>

        <h1
          className="mt-6 font-display text-4xl text-text-primary md:text-6xl lg:text-7xl"
          style={{
            animation: "clipRevealUp 0.8s var(--ease-heavy) 0.2s both",
          }}
        >
          {business.name}
        </h1>

        <p
          className="mt-4 font-body text-lg font-light text-text-secondary md:text-xl"
          style={{ animation: "fadeIn 0.8s var(--ease-heavy) 0.5s both" }}
        >
          {business.tagline}
        </p>

        {/* Quick metrics */}
        <div
          className="mt-10 flex flex-wrap gap-8"
          style={{ animation: "fadeIn 0.8s var(--ease-heavy) 0.7s both" }}
        >
          {business.metrics.slice(0, 3).map((m) => (
            <div key={m.label}>
              <span className="font-display text-2xl text-text-primary">
                {m.value}
                <span className="font-mono text-sm text-text-muted">
                  {m.unit}
                </span>
              </span>
              <p className="mt-1 font-mono text-xs text-text-muted">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
