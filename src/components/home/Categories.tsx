"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { heroTimeline, easings } from "@/lib/animations";
import { useLang } from "@/providers/LangProvider";
import type { TranslationKey } from "@/lib/i18n";

const cards: {
  slug: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  image: string;
  titleSize?: string;
}[] = [
  {
    slug: "construction",
    titleKey: "cardConstruction",
    descKey: "cardConstructionDesc",
    image: "/images/directions/construction.png",
  },
  {
    slug: "realestate",
    titleKey: "cardRealestate",
    descKey: "cardRealestateDesc",
    image: "/images/directions/realestate.png",
  },
  {
    slug: "production",
    titleKey: "cardProduction",
    descKey: "cardProductionDesc",
    image: "/images/directions/manufacturing.png",
  },
  {
    slug: "mining",
    titleKey: "cardMining",
    descKey: "cardMiningDesc",
    image: "/images/directions/minerals.png",
    titleSize: "clamp(0.78rem, 1vw, 0.95rem)",
  },
  {
    slug: "projects",
    titleKey: "cardProjects",
    descKey: "cardProjectsDesc",
    image: "/images/directions/projects.png",
    titleSize: "clamp(0.78rem, 1vw, 0.95rem)",
  },
];

const cardVariants = [
  { x: -30, y: 20, rotate: -2 },
  { x: -15, y: 35, rotate: -1 },
  { x: 0, y: 45, rotate: 0 },
  { x: 15, y: 35, rotate: 1 },
  { x: 30, y: 20, rotate: 2 },
];

export default function Categories() {
  const { t } = useLang();

  return (
    <section className="w-full max-w-[1300px] 2xl:max-w-[1500px] mx-auto px-4">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: heroTimeline.cards.delay - 0.2, duration: 0.8 }}
        className="text-center"
        style={{ marginTop: "3rem", marginBottom: "1.5rem" }}
      >
        <span
          className="uppercase"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
            fontWeight: 300,
            letterSpacing: "0.25em",
            paddingLeft: "0.25em",
            color: "var(--gold-200)",
            opacity: 0.5,
          }}
        >
          {t("sectionTitle")}
        </span>
      </motion.div>

      {/* Cards grid */}
      <div className="grid gap-[14px] grid-cols-1 max-[480px]:max-w-[320px] max-[480px]:mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
              className="group relative cursor-pointer overflow-hidden max-[480px]:!aspect-[16/9]"
              style={{
                borderRadius: 14,
                border: "1px solid rgba(160, 170, 195, 0.1)",
                aspectRatio: "3 / 2",
                transition: "all 0.4s ease",
                background: "var(--bg-deep)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(184, 154, 90, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(160, 170, 195, 0.1)";
              }}
            >
              {/* Image fills entire card */}
              <Image
                src={card.image}
                alt={t(card.titleKey)}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 20vw"
                quality={90}
                className="opacity-65 group-hover:opacity-95 group-hover:scale-[1.02] transition-all duration-500"
                style={{ objectFit: "cover", objectPosition: "center top", mixBlendMode: "lighten" }}
              />

              {/* Text overlay — bottom 40% */}
              <div
                className="absolute bottom-0 left-0 right-0 flex flex-col justify-start"
                style={{
                  height: "40%",
                  padding: "0 1.2rem 1rem",
                }}
              >
                <h3
                  className="uppercase"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: card.titleSize || "clamp(0.925rem, 1.2vw, 1.125rem)",
                    whiteSpace: "nowrap" as const,
                    fontWeight: 400,
                    background: "linear-gradient(135deg, var(--gold-100) 0%, var(--gold-300) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "0.2em",
                    marginBottom: 6,
                    lineHeight: 1.3,
                  }}
                >
                  {t(card.titleKey)}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    color: "var(--text-tertiary)",
                    lineHeight: 1.5,
                  }}
                >
                  {t(card.descKey)}
                </p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
