"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { DimensionLine } from "@/components/ui/DimensionLine";

const BUSINESSES = [
  {
    id: "01",
    name: "TEHMAS",
    desc: "Промислове будівництво · Спецтехніка · Піскоструй",
    href: "/businesses/tehmas" as const,
    accent: "#E8572A",
  },
  {
    id: "02",
    name: "Grand Pellets",
    desc: "Паливні пелети · ENplus A1/A2 · Експорт ЄС",
    href: "/businesses/grand-pellets" as const,
    accent: "#4A8C3F",
  },
  {
    id: "03",
    name: "The Roof",
    desc: "Агентство комерційної нерухомості",
    href: "/businesses/the-roof" as const,
    accent: "#D4A843",
  },
  {
    id: "04",
    name: "Захистбуд",
    desc: "Видобуток піску, глини, щебню · 2,2 млн т/рік",
    href: "/businesses/zahistbud" as const,
    accent: "#8B6E4E",
  },
];

export function Businesses() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="bg-bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-20">
        {/* Section header */}
        <RevealOnScroll>
          <div className="ml-0 md:ml-[8.33%]">
            <h2 className="font-display text-3xl text-text-primary md:text-4xl">
              Портфель
            </h2>
            <div className="mt-4 max-w-xs">
              <DimensionLine label="4 бізнеси" />
            </div>
          </div>
        </RevealOnScroll>

        {/* Business rows — Desktop */}
        <div className="mt-16 hidden md:block">
          {BUSINESSES.map((biz, i) => (
            <RevealOnScroll key={biz.id} delay={i * 0.1}>
              <Link
                href={biz.href}
                className="group relative block border-b border-line"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="flex items-center transition-all duration-500"
                  style={{
                    height: hoveredIndex === i ? "160px" : "100px",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Accent line */}
                  <div
                    className="absolute left-0 top-0 h-full transition-all duration-500"
                    style={{
                      width: hoveredIndex === i ? "4px" : "0px",
                      backgroundColor: biz.accent,
                      transitionTimingFunction:
                        "cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />

                  {/* Number */}
                  <span
                    className="w-24 shrink-0 pl-6 font-mono text-2xl transition-colors duration-300"
                    style={{
                      color:
                        hoveredIndex === i
                          ? "var(--accent-primary)"
                          : "var(--text-muted)",
                    }}
                  >
                    {biz.id}
                  </span>

                  {/* Name */}
                  <span className="flex-1 font-display text-xl text-text-primary transition-colors duration-300 group-hover:text-accent-primary md:text-2xl">
                    {biz.name}
                  </span>

                  {/* Description */}
                  <span className="hidden font-body text-sm font-light text-text-secondary lg:block lg:max-w-sm">
                    {biz.desc}
                  </span>

                  {/* Arrow */}
                  <span className="ml-8 mr-6 font-mono text-text-muted transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent-primary">
                    →
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        {/* Business accordion — Mobile */}
        <div className="mt-12 md:hidden">
          {BUSINESSES.map((biz, i) => (
            <div key={biz.id} className="border-b border-line">
              <button
                className="flex w-full items-center py-6"
                onClick={() =>
                  setExpandedIndex(expandedIndex === i ? null : i)
                }
                aria-expanded={expandedIndex === i}
              >
                {/* Accent dot */}
                <span
                  className="mr-4 h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: biz.accent }}
                />

                {/* Number */}
                <span className="mr-4 font-mono text-xs text-text-muted">
                  {biz.id}
                </span>

                {/* Name */}
                <span className="flex-1 text-left font-display text-lg text-text-primary">
                  {biz.name}
                </span>

                {/* Toggle */}
                <span
                  className="font-mono text-xs text-text-muted transition-transform duration-300"
                  style={{
                    transform:
                      expandedIndex === i ? "rotate(90deg)" : "rotate(0)",
                  }}
                >
                  →
                </span>
              </button>

              {/* Expanded content */}
              <div
                className="overflow-hidden transition-all duration-500"
                style={{
                  maxHeight: expandedIndex === i ? "200px" : "0",
                  opacity: expandedIndex === i ? 1 : 0,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div className="pb-6 pl-10">
                  <p className="font-body text-sm text-text-secondary">
                    {biz.desc}
                  </p>
                  <Link
                    href={biz.href}
                    className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-accent-primary"
                  >
                    Детальніше →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
