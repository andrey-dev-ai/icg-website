"use client";

import { motion } from "motion/react";
import { heroTimeline, easings } from "@/lib/animations";

// Card data with descriptions
const cards = [
  {
    slug: "construction",
    title: "Будівництво",
    description: "Власна техніка, команда та повний цикл будівництва",
  },
  {
    slug: "realestate",
    title: "Нерухомість",
    description: "Консалтинг, управління та інвестиції в комерційну та житлову нерухомість",
  },
  {
    slug: "production",
    title: "Виробництво",
    description: "Створення продуктів, що змінюють ринок",
  },
  {
    slug: "mining",
    title: "Корисні копалини",
    description: "Розвідка, видобуток та реалізація природних ресурсів",
  },
  {
    slug: "projects",
    title: "Реалізовані проєкти",
    description: "Портфоліо, яке говорить за нас",
  },
];

// Inline SVG illustrations per card — monochrome #b89a5a stroke
const illustrations: Record<string, React.ReactNode> = {
  construction: (
    <svg viewBox="0 0 110 72" fill="none" style={{ width: "100%", height: "clamp(130px, 25vw, 110px)" }}>
      {/* House */}
      <rect x="8" y="32" width="22" height="24" rx="1" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 32l11-10 11 10" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      {/* Chimney */}
      <rect x="24" y="20" width="4" height="7" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      {/* Windows 2x2 */}
      <rect x="12" y="37" width="5" height="5" rx="0.5" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="21" y="37" width="5" height="5" rx="0.5" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="12" y="46" width="5" height="5" rx="0.5" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="21" y="46" width="5" height="5" rx="0.5" stroke="#b89a5a" strokeWidth="0.65" />
      {/* Cottage */}
      <rect x="36" y="40" width="16" height="16" rx="1" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 40l8-7 8 7" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      {/* Cottage door & window */}
      <rect x="41" y="48" width="6" height="8" rx="0.5" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="39" y="42" width="4" height="3" rx="0.5" stroke="#b89a5a" strokeWidth="0.65" />
      {/* Accent dot on cottage roof peak */}
      <circle cx="44" cy="33" r="1.5" fill="#b89a5a" opacity="0.25" />
      {/* Construction crane */}
      <path d="M75 56V18" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" />
      <path d="M65 18h30" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" />
      {/* Crane base */}
      <path d="M71 56h8" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" />
      {/* Cable */}
      <path d="M90 18v12" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeDasharray="2 2" />
      {/* Hook block */}
      <rect x="87" y="30" width="6" height="4" rx="0.5" stroke="#b89a5a" strokeWidth="0.65" />
      {/* Support struts */}
      <path d="M75 26l-5-8M75 26l5-8" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" />
      {/* Ground line */}
      <path d="M4 56h102" stroke="#b89a5a" strokeWidth="0.4" strokeDasharray="3 2" />
    </svg>
  ),
  realestate: (
    <svg viewBox="0 0 110 72" fill="none" style={{ width: "100%", height: "clamp(130px, 25vw, 110px)" }}>
      {/* Low building */}
      <rect x="8" y="36" width="18" height="22" rx="1" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      {/* Windows row 1 */}
      <rect x="11" y="40" width="4" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="18" y="40" width="4" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      {/* Windows row 2 */}
      <rect x="11" y="47" width="4" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="18" y="47" width="4" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      {/* Door */}
      <rect x="14" y="53" width="5" height="5" rx="0.5" stroke="#b89a5a" strokeWidth="0.65" />
      {/* Tall office building */}
      <rect x="30" y="14" width="20" height="44" rx="1" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      {/* Antenna */}
      <path d="M40 14v-6" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" />
      <path d="M38 10h4" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" />
      {/* Windows 4 rows */}
      <rect x="33" y="19" width="4" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="40" y="19" width="4" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="33" y="26" width="4" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="40" y="26" width="4" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="33" y="33" width="4" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="40" y="33" width="4" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="33" y="40" width="4" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="40" y="40" width="4" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      {/* Canopy */}
      <path d="M29 14h22" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" />
      {/* Medium building */}
      <rect x="54" y="30" width="16" height="28" rx="1" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="57" y="34" width="4" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="63" y="34" width="4" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="57" y="41" width="4" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="63" y="41" width="4" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="59" y="52" width="5" height="6" rx="0.5" stroke="#b89a5a" strokeWidth="0.65" />
      {/* Dashed connection line */}
      <path d="M70 44h12" stroke="#b89a5a" strokeWidth="0.65" strokeDasharray="2 2" />
      {/* Deal checkmark */}
      <rect x="84" y="38" width="14" height="12" rx="1.5" stroke="#b89a5a" strokeWidth="0.65" />
      <path d="M88 44l3 3 5-6" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      {/* Ground */}
      <path d="M4 58h102" stroke="#b89a5a" strokeWidth="0.4" strokeDasharray="3 2" />
    </svg>
  ),
  production: (
    <svg viewBox="0 0 110 72" fill="none" style={{ width: "100%", height: "clamp(130px, 25vw, 110px)" }}>
      {/* Factory building */}
      <rect x="8" y="28" width="32" height="28" rx="1" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      {/* Triangular roof */}
      <path d="M8 28l16-10 16 10" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      {/* Door */}
      <rect x="18" y="46" width="10" height="10" rx="0.5" stroke="#b89a5a" strokeWidth="0.65" />
      {/* Smokestacks */}
      <rect x="12" y="10" width="4" height="18" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="20" y="14" width="4" height="14" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="28" y="12" width="3.5" height="16" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      {/* Smoke circles */}
      <circle cx="14" cy="7" r="2" stroke="#b89a5a" strokeWidth="0.65" opacity="0.5" />
      <circle cx="12" cy="4" r="1.5" stroke="#b89a5a" strokeWidth="0.65" opacity="0.35" />
      <circle cx="22" cy="11" r="1.8" stroke="#b89a5a" strokeWidth="0.65" opacity="0.4" />
      <circle cx="30" cy="9" r="1.5" stroke="#b89a5a" strokeWidth="0.65" opacity="0.35" />
      {/* Line to QC block */}
      <path d="M40 42h16" stroke="#b89a5a" strokeWidth="0.65" strokeDasharray="2 2" />
      {/* QC block */}
      <rect x="56" y="36" width="14" height="12" rx="1.5" stroke="#b89a5a" strokeWidth="0.65" />
      <path d="M60 42l3 3 5-6" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      {/* Output boxes */}
      <path d="M70 42h8" stroke="#b89a5a" strokeWidth="0.65" strokeDasharray="2 2" />
      <rect x="80" y="40" width="8" height="8" rx="0.5" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="84" y="44" width="8" height="8" rx="0.5" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="90" y="38" width="7" height="7" rx="0.5" stroke="#b89a5a" strokeWidth="0.65" />
      {/* Ground */}
      <path d="M4 56h102" stroke="#b89a5a" strokeWidth="0.4" strokeDasharray="3 2" />
    </svg>
  ),
  mining: (
    <svg viewBox="0 0 110 72" fill="none" style={{ width: "100%", height: "clamp(130px, 25vw, 110px)" }}>
      {/* Drilling tower */}
      <path d="M24 48l8-38 8 38" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      {/* Tower cross struts */}
      <path d="M26 38h12M27 28h10M29 18h6" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" />
      {/* Drill shaft */}
      <path d="M32 48v14" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" />
      {/* Dashed exploration lines */}
      <path d="M32 62v6" stroke="#b89a5a" strokeWidth="0.65" strokeDasharray="2 2" />
      <path d="M28 58l-8 8" stroke="#b89a5a" strokeWidth="0.65" strokeDasharray="2 2" opacity="0.5" />
      <path d="M36 58l8 8" stroke="#b89a5a" strokeWidth="0.65" strokeDasharray="2 2" opacity="0.5" />
      {/* Terrain/rock wavy line with gold fill */}
      <path d="M4 52c8-3 16 2 24-1s16-4 24 0 16 3 24-1 16-3 22 0 10 2 12 1" stroke="#b89a5a" strokeWidth="0.65" opacity="0.7" />
      <path d="M4 52c8-3 16 2 24-1s16-4 24 0 16 3 24-1 16-3 22 0 10 2 12 1V68H4z" fill="#b89a5a" opacity="0.03" />
      {/* Deposit points */}
      <circle cx="52" cy="54" r="2" fill="#b89a5a" opacity="0.2" />
      <circle cx="68" cy="52" r="1.5" fill="#b89a5a" opacity="0.15" />
      <circle cx="80" cy="55" r="2.5" fill="#b89a5a" opacity="0.2" />
      {/* Documentation */}
      <rect x="88" y="22" width="14" height="18" rx="1" stroke="#b89a5a" strokeWidth="0.65" />
      <path d="M91 28h8M91 32h6M91 36h7" stroke="#b89a5a" strokeWidth="0.65" opacity="0.5" />
      {/* Ground */}
      <path d="M4 68h102" stroke="#b89a5a" strokeWidth="0.4" strokeDasharray="3 2" />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 110 72" fill="none" style={{ width: "100%", height: "clamp(130px, 25vw, 110px)" }}>
      {/* Building 1 — house */}
      <rect x="6" y="36" width="14" height="18" rx="0.5" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 36l7-6 7 6" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="10" y="40" width="3" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      {/* Checkmark above 1 */}
      <circle cx="13" cy="24" r="4" stroke="#b89a5a" strokeWidth="0.65" strokeDasharray="2 2" />
      <path d="M11 24l2 2 3-4" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      {/* Building 2 — office */}
      <rect x="26" y="30" width="14" height="24" rx="0.5" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="29" y="34" width="3" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="34" y="34" width="3" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="29" y="41" width="3" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="34" y="41" width="3" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      {/* Checkmark above 2 */}
      <circle cx="33" cy="22" r="4" stroke="#b89a5a" strokeWidth="0.65" strokeDasharray="2 2" />
      <path d="M31 22l2 2 3-4" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      {/* Building 3 — tower */}
      <rect x="46" y="22" width="14" height="32" rx="0.5" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="49" y="26" width="3" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="54" y="26" width="3" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="49" y="33" width="3" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      <rect x="54" y="33" width="3" height="3" rx="0.3" stroke="#b89a5a" strokeWidth="0.65" />
      {/* Checkmark above 3 */}
      <circle cx="53" cy="14" r="4" stroke="#b89a5a" strokeWidth="0.65" strokeDasharray="2 2" />
      <path d="M51 14l2 2 3-4" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      {/* Building 4 — warehouse */}
      <rect x="66" y="34" width="14" height="20" rx="0.5" stroke="#b89a5a" strokeWidth="0.65" />
      <path d="M66 34l7-5 7 5" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      {/* Checkmark above 4 */}
      <circle cx="73" cy="22" r="4" stroke="#b89a5a" strokeWidth="0.65" strokeDasharray="2 2" />
      <path d="M71 22l2 2 3-4" stroke="#b89a5a" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" />
      {/* Progress line with dots */}
      <path d="M13 58h76" stroke="#b89a5a" strokeWidth="0.65" opacity="0.4" />
      <circle cx="13" cy="58" r="1.5" fill="#b89a5a" opacity="0.25" />
      <circle cx="33" cy="58" r="1.5" fill="#b89a5a" opacity="0.25" />
      <circle cx="53" cy="58" r="1.5" fill="#b89a5a" opacity="0.25" />
      <circle cx="73" cy="58" r="1.5" fill="#b89a5a" opacity="0.25" />
      {/* Portfolio doc */}
      <path d="M89 58h2" stroke="#b89a5a" strokeWidth="0.65" strokeDasharray="2 2" />
      <rect x="92" y="48" width="12" height="16" rx="1" stroke="#b89a5a" strokeWidth="0.65" />
      <path d="M95 53h6M95 57h4M95 61h5" stroke="#b89a5a" strokeWidth="0.65" opacity="0.5" />
      {/* Ground */}
      <path d="M4 54h82" stroke="#b89a5a" strokeWidth="0.4" strokeDasharray="3 2" />
    </svg>
  ),
};

// Entrance variants
const cardVariants = [
  { x: -30, y: 20, rotate: -2 },
  { x: -15, y: 35, rotate: -1 },
  { x: 0, y: 45, rotate: 0 },
  { x: 15, y: 35, rotate: 1 },
  { x: 30, y: 20, rotate: 2 },
];

export default function Categories() {
  return (
    <section className="w-full max-w-[1300px] 2xl:max-w-[1500px] mx-auto px-4">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: heroTimeline.cards.delay - 0.2, duration: 0.8 }}
        className="text-center mb-8 2xl:mb-10"
      >
        <span
          className="uppercase"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            letterSpacing: "0.25em",
            color: "rgba(184, 154, 90, 0.4)",
          }}
        >
          Напрямки бізнесу
        </span>
      </motion.div>

      {/* Cards grid */}
      <div
        className="grid gap-[14px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
      >
        {cards.map((card, i) => {
          const variant = cardVariants[i] || cardVariants[2];

          return (
            <motion.a
              key={card.slug}
              href={`/${card.slug}`}
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
                delay: heroTimeline.cards.delay + i * heroTimeline.cards.stagger,
                duration: 0.9,
                ease: easings.smooth,
              }}
              className="group block text-center cursor-pointer"
              style={{
                background: "rgba(160, 170, 195, 0.03)",
                border: "1px solid rgba(160, 170, 195, 0.05)",
                borderRadius: 14,
                padding: "clamp(24px, 4vw, 28px) clamp(16px, 3vw, 20px) clamp(20px, 3vw, 24px)",
                transition: "all 0.4s cubic-bezier(.4, 0, .2, 1)",
              }}
              whileHover={{
                backgroundColor: "rgba(160, 170, 195, 0.13)",
                borderColor: "rgba(184, 154, 90, 0.2)",
              }}
            >
              {/* Illustration */}
              <div
                className="mb-4 transition-all duration-500"
                style={{ opacity: 0.55 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.85";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.55";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {illustrations[card.slug]}
              </div>

              {/* Title */}
              <h3
                className="mb-2 uppercase"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.9rem, 1.2vw, 0.95rem)",
                  fontWeight: 300,
                  letterSpacing: "0.2em",
                  color: "var(--gold-100)",
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.82rem, 1vw, 0.85rem)",
                  color: "rgba(232, 228, 219, 0.4)",
                  lineHeight: 1.6,
                }}
              >
                {card.description}
              </p>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
