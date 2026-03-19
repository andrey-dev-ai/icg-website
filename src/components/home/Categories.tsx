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
  imageFile: string;
}[] = [
  {
    slug: "construction",
    titleKey: "cardConstruction",
    descKey: "cardConstructionDesc",
    imageFile: "construction.png",
  },
  {
    slug: "realestate",
    titleKey: "cardRealestate",
    descKey: "cardRealestateDesc",
    imageFile: "realestate.png",
  },
  {
    slug: "production",
    titleKey: "cardProduction",
    descKey: "cardProductionDesc",
    imageFile: "manufacturing.png",
  },
  {
    slug: "mining",
    titleKey: "cardMining",
    descKey: "cardMiningDesc",
    imageFile: "minerals.png",
  },
  {
    slug: "projects",
    titleKey: "cardProjects",
    descKey: "cardProjectsDesc",
    imageFile: "projects.png",
  },
];

// Языки, для которых есть свои картинки с текстом
const imageLanguages = ["uk", "ru"];

const cardVariants = [
  { x: -30, y: 20, rotate: -2 },
  { x: -15, y: 35, rotate: -1 },
  { x: 0, y: 45, rotate: 0 },
  { x: 15, y: 35, rotate: 1 },
  { x: 30, y: 20, rotate: 2 },
];

export default function Categories() {
  const { t, locale } = useLang();
  const imgLang = imageLanguages.includes(locale) ? locale : "uk";

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
          className=""
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
      <div className="grid gap-[14px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
                e.currentTarget.style.borderColor = "rgba(184, 154, 90, 0.4)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(184, 154, 90, 0.15)";
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(160, 170, 195, 0.1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {/* Image fills entire card */}
              <Image
                src={`/images/directions/${imgLang}/${card.imageFile}`}
                alt={t(card.titleKey)}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 20vw"
                quality={90}
                className="opacity-65 group-hover:opacity-95 transition-all duration-500"
                style={{ objectFit: "cover", objectPosition: "center top", mixBlendMode: "lighten" }}
              />

              {/* Arrow indicator — appears on hover */}
              <span
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-70 transition-opacity duration-400 z-10"
                style={{ color: "var(--gold-200)", fontSize: "1.2rem" }}
              >
                →
              </span>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
