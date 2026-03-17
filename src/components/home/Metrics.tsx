"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { homeMetrics } from "@/lib/data";
import { heroTimeline } from "@/lib/animations";

export default function Metrics() {
  return (
    <div
      className="flex justify-center flex-wrap"
      style={{ gap: "clamp(32px, 6vw, 80px)" }}
    >
      {homeMetrics.map((metric, i) => (
        <AnimatedCounter
          key={metric.label}
          value={metric.value}
          suffix={metric.suffix}
          label={metric.label}
          delay={heroTimeline.metrics.stagger * i}
        />
      ))}
    </div>
  );
}
