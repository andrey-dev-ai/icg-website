"use client";

import { BlueprintGrid } from "@/components/ui/BlueprintGrid";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
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
    <section className="relative flex min-h-screen items-center overflow-hidden bg-bg-primary">
      <BlueprintGrid />
      <NoiseOverlay />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-32 md:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Text — 7 columns */}
          <div className="md:col-span-7">
            {/* Meta label */}
            <p
              className="font-mono text-xs uppercase tracking-[0.3em] text-text-secondary"
              style={{
                animation: "fadeIn 0.6s var(--ease-heavy) both",
              }}
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
              className="mt-8"
              style={{
                animation: "fadeIn 0.6s var(--ease-heavy) 0.8s both",
              }}
            >
              <DimensionLine label="EST. 2000" />
            </div>

            {/* Subheadline */}
            <p
              className="mt-8 max-w-lg font-body text-lg font-light leading-relaxed text-text-secondary"
              style={{
                animation: "fadeIn 0.8s var(--ease-heavy) 1s both",
              }}
            >
              Промислове будівництво, логістика, енергетика, нерухомість та
              видобуток — чотири напрямки з єдиним стандартом якості.
            </p>
          </div>

          {/* Visual — 5 columns */}
          <div
            className="hidden items-center justify-center md:col-span-5 md:flex"
            style={{
              animation: "fadeIn 1.2s var(--ease-heavy) 0.5s both",
            }}
          >
            <svg
              viewBox="0 0 400 500"
              className="h-auto w-full max-w-sm"
              aria-hidden="true"
            >
              {/* Architectural wireframe composition */}
              {/* Main rectangle */}
              <rect
                x="60"
                y="40"
                width="280"
                height="380"
                fill="none"
                stroke="var(--line-color)"
                strokeWidth="0.5"
                style={{
                  animation: "fadeIn 1s var(--ease-heavy) 0.6s both",
                }}
              />
              {/* Inner structure */}
              <line
                x1="60"
                y1="180"
                x2="340"
                y2="180"
                stroke="var(--line-color)"
                strokeWidth="0.5"
                style={{
                  animation: "fadeIn 0.8s var(--ease-heavy) 0.8s both",
                }}
              />
              <line
                x1="180"
                y1="40"
                x2="180"
                y2="420"
                stroke="var(--line-color)"
                strokeWidth="0.5"
                style={{
                  animation: "fadeIn 0.8s var(--ease-heavy) 0.9s both",
                }}
              />
              {/* Accent rectangles */}
              <rect
                x="80"
                y="60"
                width="80"
                height="100"
                fill="none"
                stroke="var(--accent-primary)"
                strokeWidth="1"
                style={{
                  animation: "fadeIn 0.8s var(--ease-heavy) 1s both",
                }}
              />
              <rect
                x="200"
                y="200"
                width="120"
                height="80"
                fill="none"
                stroke="var(--accent-primary)"
                strokeWidth="1"
                opacity="0.6"
                style={{
                  animation: "fadeIn 0.8s var(--ease-heavy) 1.1s both",
                }}
              />
              {/* Diagonal */}
              <line
                x1="60"
                y1="420"
                x2="340"
                y2="40"
                stroke="var(--line-color)"
                strokeWidth="0.3"
                strokeDasharray="4 8"
                style={{
                  animation: "fadeIn 1s var(--ease-heavy) 1.2s both",
                }}
              />
              {/* Measurement markers */}
              <text
                x="350"
                y="230"
                fill="var(--text-muted)"
                fontSize="8"
                fontFamily="var(--font-mono)"
                style={{
                  animation: "fadeIn 0.6s var(--ease-heavy) 1.3s both",
                }}
              >
                420
              </text>
              <text
                x="190"
                y="435"
                fill="var(--text-muted)"
                fontSize="8"
                fontFamily="var(--font-mono)"
                style={{
                  animation: "fadeIn 0.6s var(--ease-heavy) 1.4s both",
                }}
              >
                280
              </text>
              {/* Corner markers */}
              <circle
                cx="60"
                cy="40"
                r="2"
                fill="var(--accent-primary)"
                style={{
                  animation: "fadeIn 0.4s var(--ease-heavy) 1.5s both",
                }}
              />
              <circle
                cx="340"
                cy="420"
                r="2"
                fill="var(--accent-primary)"
                style={{
                  animation: "fadeIn 0.4s var(--ease-heavy) 1.6s both",
                }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full border-t border-line bg-bg-primary/80 py-4 backdrop-blur-sm">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "marqueeScroll 20s linear infinite",
          }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
            (item, i) => (
              <span
                key={i}
                className="mx-8 font-mono text-xs uppercase tracking-[0.2em] text-text-muted"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
