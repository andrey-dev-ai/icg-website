"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

const LOCATIONS = [
  {
    id: "kyiv",
    label: "Київ",
    desc: "Головний офіс ICG",
    x: 52,
    y: 42,
    type: "hq" as const,
  },
  {
    id: "brovary",
    label: "Бровари",
    desc: "TEHMAS · Gate One · The Roof",
    x: 55,
    y: 40,
    type: "business" as const,
  },
  {
    id: "stepanivka",
    label: "Степанівка",
    desc: "Grand Pellets — виробництво",
    x: 62,
    y: 30,
    type: "production" as const,
  },
  {
    id: "yasnhorodka",
    label: "Ясногородка",
    desc: "Захистбуд — кар'єр",
    x: 49,
    y: 43,
    type: "production" as const,
  },
];

const EU_EXPORTS = [
  { country: "Польща", x: 35, y: 28 },
  { country: "Чехія", x: 32, y: 35 },
  { country: "Німеччина", x: 25, y: 30 },
  { country: "Франція", x: 18, y: 40 },
  { country: "Італія", x: 28, y: 48 },
];

export function Geography() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-bg-secondary py-24 md:py-32">
      <NoiseOverlay opacity={0.02} />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-20">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
            Географія
          </p>
          <h2 className="mt-6 font-display text-3xl text-text-primary md:text-4xl">
            Присутність
          </h2>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Map — SVG */}
          <div className="md:col-span-8">
            <RevealOnScroll delay={0.2}>
              <div className="relative aspect-[16/10] w-full">
                <svg
                  viewBox="0 0 100 70"
                  className="h-full w-full"
                  aria-label="Карта присутності ICG"
                >
                  {/* Simplified Europe outline */}
                  <path
                    d="M 15,15 L 25,12 L 35,14 L 45,10 L 55,12 L 65,15 L 75,18 L 80,25 L 75,35 L 70,42 L 65,48 L 55,52 L 50,55 L 45,50 L 40,48 L 35,50 L 28,52 L 22,48 L 18,42 L 15,35 L 12,28 Z"
                    fill="none"
                    stroke="var(--line-color)"
                    strokeWidth="0.3"
                    opacity="0.5"
                  />

                  {/* Ukraine shape (simplified) */}
                  <path
                    d="M 45,30 L 50,28 L 55,27 L 60,28 L 65,30 L 70,32 L 72,35 L 70,38 L 68,42 L 65,44 L 60,45 L 55,46 L 50,45 L 47,43 L 45,40 L 43,37 L 43,33 Z"
                    fill="var(--surface-rough)"
                    stroke="var(--line-color)"
                    strokeWidth="0.5"
                    opacity="0.8"
                  />

                  {/* Export routes from Ukraine to EU */}
                  {EU_EXPORTS.map((exp) => (
                    <line
                      key={exp.country}
                      x1="55"
                      y1="35"
                      x2={exp.x}
                      y2={exp.y}
                      stroke="var(--accent-secondary)"
                      strokeWidth="0.3"
                      strokeDasharray="2 2"
                      opacity="0.4"
                    />
                  ))}

                  {/* EU export dots */}
                  {EU_EXPORTS.map((exp) => (
                    <g key={exp.country}>
                      <circle
                        cx={exp.x}
                        cy={exp.y}
                        r="1.5"
                        fill="var(--accent-secondary)"
                        opacity="0.7"
                      />
                      <text
                        x={exp.x}
                        y={exp.y - 3}
                        textAnchor="middle"
                        fill="var(--text-muted)"
                        fontSize="2.5"
                        fontFamily="var(--font-mono)"
                      >
                        {exp.country}
                      </text>
                    </g>
                  ))}

                  {/* Ukraine locations */}
                  {LOCATIONS.map((loc) => (
                    <g
                      key={loc.id}
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveLocation(loc.id)}
                      onMouseLeave={() => setActiveLocation(null)}
                    >
                      {/* Pulse ring */}
                      <circle
                        cx={loc.x}
                        cy={loc.y}
                        r="3"
                        fill="none"
                        stroke={
                          loc.type === "hq"
                            ? "var(--accent-primary)"
                            : "var(--accent-secondary)"
                        }
                        strokeWidth="0.3"
                        opacity="0.5"
                        className="animate-pulse"
                      />
                      {/* Dot */}
                      <circle
                        cx={loc.x}
                        cy={loc.y}
                        r="1.2"
                        fill={
                          loc.type === "hq"
                            ? "var(--accent-primary)"
                            : "var(--accent-secondary)"
                        }
                      />
                      {/* Label */}
                      <text
                        x={loc.x}
                        y={loc.y + 4}
                        textAnchor="middle"
                        fill="var(--text-secondary)"
                        fontSize="2.2"
                        fontFamily="var(--font-mono)"
                      >
                        {loc.label}
                      </text>
                    </g>
                  ))}
                </svg>

                {/* Tooltip */}
                {activeLocation && (
                  <div className="absolute bottom-4 left-4 rounded border border-line bg-bg-elevated px-4 py-3">
                    <p className="font-mono text-xs text-text-primary">
                      {LOCATIONS.find((l) => l.id === activeLocation)?.label}
                    </p>
                    <p className="mt-1 font-body text-xs text-text-secondary">
                      {LOCATIONS.find((l) => l.id === activeLocation)?.desc}
                    </p>
                  </div>
                )}
              </div>
            </RevealOnScroll>
          </div>

          {/* Legend — mobile-friendly list */}
          <div className="md:col-span-4">
            <RevealOnScroll delay={0.3}>
              <div className="space-y-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    Україна
                  </p>
                  <div className="mt-3 space-y-3">
                    {LOCATIONS.map((loc) => (
                      <div key={loc.id} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 h-2 w-2 shrink-0"
                          style={{
                            backgroundColor:
                              loc.type === "hq"
                                ? "var(--accent-primary)"
                                : "var(--accent-secondary)",
                          }}
                        />
                        <div>
                          <p className="font-body text-sm text-text-primary">
                            {loc.label}
                          </p>
                          <p className="font-body text-xs text-text-muted">
                            {loc.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-line pt-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    Експорт ЄС (Grand Pellets)
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {EU_EXPORTS.map((exp) => (
                      <span
                        key={exp.country}
                        className="border border-line px-2 py-1 font-mono text-xs text-text-secondary"
                      >
                        {exp.country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
