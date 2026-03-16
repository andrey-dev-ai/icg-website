"use client";

import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const PRINCIPLES = [
  {
    id: "01",
    title: "Вертикальна інтеграція",
    text: "Від видобутку сировини до здачі об'єкта — ми контролюємо кожен етап.",
    accent: "#E8572A",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=75",
  },
  {
    id: "02",
    title: "Власні ресурси",
    text: "40+ одиниць техніки, власний кар'єр, лабораторія контролю якості.",
    accent: "#D4A843",
    image: "https://images.unsplash.com/photo-1570616969692-54d6ba3d0397?w=600&q=75",
  },
  {
    id: "03",
    title: "Міжнародний стандарт",
    text: "ENplus A1, ISO 8501, ISO 12944 — кожен бізнес сертифікований.",
    accent: "#4A8C3F",
    image: "https://images.unsplash.com/photo-1565793298746-d0b6efda3a5e?w=600&q=75",
  },
];

export function Approach() {
  return (
    <section className="bg-bg-light py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-20">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-on-light-muted">
            Підхід
          </p>
          <h2 className="mt-4 font-display text-3xl text-text-on-light md:text-4xl">
            Як ми працюємо
          </h2>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {PRINCIPLES.map((p, i) => (
            <RevealOnScroll key={p.id} delay={i * 0.15}>
              <div className="group overflow-hidden bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Accent strip */}
                <div
                  className="h-1"
                  style={{ backgroundColor: p.accent }}
                />

                {/* Content */}
                <div className="p-6 md:p-8">
                  <span className="font-mono text-xs text-text-on-light-muted">
                    {p.id}
                  </span>
                  <h3 className="mt-2 font-display text-xl text-text-on-light">
                    {p.title}
                  </h3>
                  <p className="mt-3 font-body text-sm font-light leading-relaxed text-text-on-light-secondary">
                    {p.text}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
