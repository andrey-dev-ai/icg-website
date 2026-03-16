"use client";

import { BlueprintGrid } from "@/components/ui/BlueprintGrid";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { DimensionLine } from "@/components/ui/DimensionLine";
import type { BusinessData } from "@/content/businesses";

interface BusinessHeroProps {
  business: BusinessData;
}

export function BusinessHero({ business }: BusinessHeroProps) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-bg-primary pb-16 pt-32 md:pb-24 md:pt-40">
      <BlueprintGrid />
      <NoiseOverlay />

      {/* Accent line top */}
      <div
        className="absolute left-0 top-0 h-1 w-full"
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

        <div
          className="mt-8 max-w-sm"
          style={{ animation: "fadeIn 0.6s var(--ease-heavy) 0.7s both" }}
        >
          <DimensionLine label={business.metrics[0]?.label} />
        </div>
      </div>
    </section>
  );
}
