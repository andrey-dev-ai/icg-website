"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { heroTimeline } from "@/lib/animations";
import { useLang } from "@/providers/LangProvider";

export default function Metrics() {
  const { t } = useLang();

  const metrics = [
    { value: 15, suffix: "+", label: t("metricsYears") },
    { value: 5, label: t("metricsDirections") },
    { value: 30, suffix: "+", label: t("metricsProjects") },
    { value: 80, suffix: "+", label: t("metricsSpecialists") },
  ];

  return (
    <div
      className="flex justify-center flex-wrap"
      style={{ gap: "clamp(32px, 6vw, 80px)" }}
    >
      {metrics.map((metric, i) => (
        <AnimatedCounter
          key={i}
          value={metric.value}
          suffix={metric.suffix}
          label={metric.label}
          delay={heroTimeline.metrics.stagger * i}
        />
      ))}
    </div>
  );
}
