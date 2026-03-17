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
  },
  {
    slug: "projects",
    titleKey: "cardProjects",
    descKey: "cardProjectsDesc",
    image: "/images/directions/projects.png",
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
            fontSize: "10px",
            letterSpacing: "3.5px",
            color: "rgba(184, 154, 90, 0.4)",
          }}
        >
          {t("sectionTitle")}
        </span>
      </motion.div>

      {/* Cards grid */}
      <div className="grid gap-[14px] grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
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
              className="group relative flex flex-col items-center text-center cursor-pointer overflow-hidden"
              style={{
                background: "rgba(160, 170, 195, 0.08)",
                border: "1px solid rgba(160, 170, 195, 0.1)",
                borderRadius: 14,
                minHeight: 180,
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(160, 170, 195, 0.13)";
                e.currentTarget.style.borderColor = "rgba(184, 154, 90, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(160, 170, 195, 0.08)";
                e.currentTarget.style.borderColor = "rgba(160, 170, 195, 0.1)";
              }}
            >
              {/* Illustration — covers entire card */}
              <div className="absolute inset-0 overflow-hidden rounded-[14px]">
                <Image
                  src={card.image}
                  alt={t(card.titleKey)}
                  fill
                  sizes="(max-width: 768px) 320px, 280px"
                  className="opacity-60 group-hover:opacity-95 transition-all duration-500"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
