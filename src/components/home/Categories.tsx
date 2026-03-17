"use client";

import { motion } from "motion/react";
import { heroTimeline, easings } from "@/lib/animations";
import { categories, businesses } from "@/lib/data";
import TiltCard from "@/components/ui/TiltCard";

// Each card has unique visual identity
const cardDesigns: Record<
  string,
  {
    accentColor: string;
    bgGradient: string;
    decorSvg: React.ReactNode;
  }
> = {
  construction: {
    accentColor: "rgba(212,185,120,0.7)",
    bgGradient:
      "linear-gradient(135deg, rgba(212,185,120,0.06) 0%, transparent 50%)",
    decorSvg: (
      // Construction crane silhouette
      <svg
        viewBox="0 0 160 120"
        fill="none"
        className="absolute inset-0 w-full h-full transition-opacity duration-700"
        preserveAspectRatio="xMaxYMax meet"
      >
        <path
          d="M130 20h-80l-10 10v60h10V40h70v50h10V30z"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M50 20V5h5v15" stroke="currentColor" strokeWidth="1" />
        <path d="M20 90h120" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M55 5h60M55 5l30-3M115 5l-30-3"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <rect x="65" y="50" width="12" height="15" rx="1" stroke="currentColor" strokeWidth="0.8" />
        <rect x="85" y="50" width="12" height="15" rx="1" stroke="currentColor" strokeWidth="0.8" />
        <rect x="65" y="70" width="12" height="15" rx="1" stroke="currentColor" strokeWidth="0.8" />
        <rect x="85" y="70" width="12" height="15" rx="1" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
  },
  realestate: {
    accentColor: "rgba(147,197,253,0.6)",
    bgGradient:
      "linear-gradient(135deg, rgba(147,197,253,0.05) 0%, transparent 50%)",
    decorSvg: (
      // City skyline
      <svg
        viewBox="0 0 160 120"
        fill="none"
        className="absolute inset-0 w-full h-full transition-opacity duration-700"
        preserveAspectRatio="xMaxYMax meet"
      >
        <path
          d="M10 95V55h15V95M30 95V40h20V95M55 95V60h15V95M75 95V30h25V95M105 95V50h20V95M130 95V45h15V95"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <path d="M5 95h150" stroke="currentColor" strokeWidth="1.5" />
        {/* Windows */}
        <rect x="35" y="48" width="5" height="5" fill="currentColor" opacity="0.3" />
        <rect x="42" y="48" width="5" height="5" fill="currentColor" opacity="0.15" />
        <rect x="35" y="58" width="5" height="5" fill="currentColor" opacity="0.15" />
        <rect x="42" y="58" width="5" height="5" fill="currentColor" opacity="0.3" />
        <rect x="82" y="38" width="5" height="5" fill="currentColor" opacity="0.3" />
        <rect x="90" y="38" width="5" height="5" fill="currentColor" opacity="0.15" />
        <rect x="82" y="48" width="5" height="5" fill="currentColor" opacity="0.15" />
        <rect x="90" y="48" width="5" height="5" fill="currentColor" opacity="0.3" />
        <rect x="82" y="58" width="5" height="5" fill="currentColor" opacity="0.2" />
        <rect x="90" y="58" width="5" height="5" fill="currentColor" opacity="0.1" />
      </svg>
    ),
  },
  production: {
    accentColor: "rgba(74,222,128,0.6)",
    bgGradient:
      "linear-gradient(135deg, rgba(74,222,128,0.05) 0%, transparent 50%)",
    decorSvg: (
      // Factory with smokestacks
      <svg
        viewBox="0 0 160 120"
        fill="none"
        className="absolute inset-0 w-full h-full transition-opacity duration-700"
        preserveAspectRatio="xMaxYMax meet"
      >
        <path
          d="M20 95V60h25V95"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <path
          d="M50 95V70l25-15V95"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <path
          d="M80 95V70l25-15V95"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <path d="M110 95V50h30V95" stroke="currentColor" strokeWidth="0.8" />
        {/* Smokestacks */}
        <rect x="115" y="30" width="6" height="20" stroke="currentColor" strokeWidth="0.8" />
        <rect x="128" y="35" width="6" height="15" stroke="currentColor" strokeWidth="0.8" />
        {/* Smoke */}
        <path
          d="M118 28c-2-4-1-8 2-10M118 28c2-3 5-5 7-4"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.5"
        />
        <path
          d="M131 33c-1-3 0-6 2-8M131 33c1-2 3-4 5-3"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.5"
        />
        <path d="M5 95h155" stroke="currentColor" strokeWidth="1.5" />
        {/* Pellet circles */}
        <circle cx="30" cy="80" r="3" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
        <circle cx="38" cy="82" r="2.5" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
        <circle cx="34" cy="75" r="2" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
      </svg>
    ),
  },
  projects: {
    accentColor: "rgba(251,191,36,0.6)",
    bgGradient:
      "linear-gradient(135deg, rgba(251,191,36,0.05) 0%, transparent 50%)",
    decorSvg: (
      // Warehouse / logistics building
      <svg
        viewBox="0 0 160 120"
        fill="none"
        className="absolute inset-0 w-full h-full transition-opacity duration-700"
        preserveAspectRatio="xMaxYMax meet"
      >
        {/* Main building */}
        <path
          d="M20 95V45l60-20 60 20V95"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        {/* Roof detail */}
        <path d="M20 45l60-20 60 20" stroke="currentColor" strokeWidth="1.2" />
        {/* Big gate */}
        <rect x="60" y="60" width="40" height="35" rx="2" stroke="currentColor" strokeWidth="0.8" />
        <path d="M80 60v35" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
        {/* Side windows */}
        <rect x="30" y="55" width="15" height="10" rx="1" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
        <rect x="115" y="55" width="15" height="10" rx="1" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
        <path d="M5 95h155" stroke="currentColor" strokeWidth="1.5" />
        {/* A+ badge */}
        <text x="75" y="82" fontSize="8" fill="currentColor" opacity="0.2" fontFamily="var(--font-body)">A+</text>
      </svg>
    ),
  },
  mining: {
    accentColor: "rgba(168,136,74,0.7)",
    bgGradient:
      "linear-gradient(135deg, rgba(168,136,74,0.06) 0%, transparent 50%)",
    decorSvg: (
      // Earth layers / quarry
      <svg
        viewBox="0 0 160 120"
        fill="none"
        className="absolute inset-0 w-full h-full transition-opacity duration-700"
        preserveAspectRatio="xMaxYMax meet"
      >
        {/* Earth layers */}
        <path
          d="M5 60c20-5 40 3 60-2s40-8 60 0 25 5 30 3"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.6"
        />
        <path
          d="M5 75c15-3 35 5 55-1s45-6 65 2 25 3 30 1"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.5"
        />
        <path
          d="M5 88c20-2 40 4 60 0s40-5 60 1 25 2 30 0"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.4"
        />
        {/* Quarry cut */}
        <path
          d="M40 45l30 50h-60z"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.3"
        />
        {/* Rocks */}
        <circle cx="110" cy="70" r="4" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
        <circle cx="120" cy="78" r="3" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
        <circle cx="130" cy="72" r="5" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
        <path d="M5 95h155" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
};

// Unique icons per category (inline SVG for more control)
const cardIcons: Record<string, React.ReactNode> = {
  construction: (
    // Crane icon
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 mx-auto">
      <path
        d="M8 28V12l8-6 8 6v16"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 28v-8h4v8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="11" y="14" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="0.8" />
      <rect x="17" y="14" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  ),
  realestate: (
    // Buildings skyline
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 mx-auto">
      <rect x="4" y="14" width="8" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="14" y="6" width="8" height="22" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="24" y="10" width="6" height="18" rx="1" stroke="currentColor" strokeWidth="1" />
      <rect x="6" y="17" width="2" height="2" fill="currentColor" opacity="0.4" />
      <rect x="6" y="22" width="2" height="2" fill="currentColor" opacity="0.3" />
      <rect x="16" y="10" width="2" height="2" fill="currentColor" opacity="0.4" />
      <rect x="20" y="10" width="2" height="2" fill="currentColor" opacity="0.3" />
      <rect x="16" y="15" width="2" height="2" fill="currentColor" opacity="0.3" />
      <rect x="20" y="15" width="2" height="2" fill="currentColor" opacity="0.4" />
    </svg>
  ),
  production: (
    // Factory
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 mx-auto">
      <path
        d="M4 28V18h8v10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 28V20l6-4v12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="22" y="12" width="6" height="16" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="24" y="6" width="3" height="6" stroke="currentColor" strokeWidth="0.8" />
      <path d="M25.5 4c-1-2 0-3 1-3.5" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    </svg>
  ),
  projects: (
    // Layers / building plans
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 mx-auto">
      <path
        d="M16 4L4 10l12 6 12-6L16 4z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M4 16l12 6 12-6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M4 22l12 6 12-6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  mining: (
    // Earth / mining
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 mx-auto">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M4 16c4-2 8 1 12-1s8-3 12 1"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <path
        d="M4 22c4-1 8 2 12 0s8-2 12 0"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
      />
      <path
        d="M8 10c2 1 4-1 6 0s4 1 6 0"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.5"
      />
    </svg>
  ),
};

// Entrance directions
const cardVariants = [
  { x: -30, y: 20, rotate: -2 },
  { x: -15, y: 35, rotate: -1 },
  { x: 0, y: 45, rotate: 0 },
  { x: 15, y: 35, rotate: 1 },
  { x: 30, y: 20, rotate: 2 },
];

export default function Categories() {
  return (
    <nav className="grid w-full gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-[1200px] 2xl:max-w-[1400px] px-4 sm:px-0">
      {categories.map((cat, i) => {
        const biz = businesses.find((b) => b.categorySlug === cat.slug);
        const variant = cardVariants[i] || cardVariants[2];
        const design = cardDesigns[cat.slug];
        const icon = cardIcons[cat.slug];

        return (
          <motion.div
            key={cat.slug}
            initial={{
              opacity: 0,
              x: variant.x,
              y: variant.y,
              rotate: variant.rotate,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
            }}
            transition={{
              delay:
                heroTimeline.cards.delay + i * heroTimeline.cards.stagger,
              duration: 0.9,
              ease: easings.smooth,
            }}
          >
            <TiltCard href={`/${cat.slug}`}>
              {/* Themed background illustration — visible, top area */}
              <div
                className="transition-opacity duration-700"
                style={{
                  color: design?.accentColor,
                  opacity: 1,
                }}
              >
                {design?.decorSvg}
              </div>

              {/* Accent gradient overlay */}
              <div
                className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: design?.bgGradient }}
              />

              {/* Content — name at bottom */}
              <div className="relative z-10 mt-auto pt-4">
                <div
                  className="font-medium uppercase transition-colors duration-500 group-hover:text-white"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    letterSpacing: "0.15em",
                    color: "var(--text-primary)",
                    lineHeight: 1.4,
                    textAlign: "center",
                  }}
                >
                  {cat.name}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        );
      })}
    </nav>
  );
}
