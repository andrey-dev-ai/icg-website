"use client";

import Image from "next/image";
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
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=75",
  },
  {
    id: "02",
    name: "Grand Pellets",
    desc: "Паливні пелети · ENplus A1/A2 · Експорт ЄС",
    href: "/businesses/grand-pellets" as const,
    accent: "#4A8C3F",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=75",
  },
  {
    id: "03",
    name: "The Roof",
    desc: "Агентство комерційної нерухомості",
    href: "/businesses/the-roof" as const,
    accent: "#D4A843",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=75",
  },
  {
    id: "04",
    name: "Захистбуд",
    desc: "Видобуток піску, глини, щебню · 2,2 млн т/рік",
    href: "/businesses/zahistbud" as const,
    accent: "#8B6E4E",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=75",
  },
];

export function Businesses() {
  return (
    <section className="bg-bg-light py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-20">
        {/* Section header */}
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-on-light-muted">
            Портфель
          </p>
          <h2 className="mt-4 font-display text-3xl text-text-on-light md:text-4xl">
            Наші напрямки
          </h2>
          <div className="mt-4 max-w-xs">
            <DimensionLine label="4 бізнеси" />
          </div>
        </RevealOnScroll>

        {/* Business cards grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {BUSINESSES.map((biz, i) => (
            <RevealOnScroll key={biz.id} delay={i * 0.1}>
              <Link
                href={biz.href}
                className="group relative block overflow-hidden bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={biz.image}
                    alt={biz.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Accent strip */}
                  <div
                    className="absolute bottom-0 left-0 h-1 w-full"
                    style={{ backgroundColor: biz.accent }}
                  />
                  {/* Number overlay */}
                  <span className="absolute right-4 top-4 font-mono text-sm text-white/60">
                    {biz.id}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl text-text-on-light transition-colors group-hover:text-accent-primary md:text-2xl">
                    {biz.name}
                  </h3>
                  <p className="mt-2 font-body text-sm text-text-on-light-secondary">
                    {biz.desc}
                  </p>
                  <span className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-text-on-light-muted transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent-primary">
                    Детальніше →
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
