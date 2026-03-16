"use client";

import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const TIMELINE = [
  { year: "2000", event: "Заснування групи" },
  { year: "2009", event: "Створення TEHMAS" },
  { year: "2016", event: "Запуск Grand Pellets" },
  { year: "2020", event: "Початок видобутку (Захистбуд)" },
  { year: "2024", event: "Відкриття Gate One Brovary" },
];

export function About() {
  return (
    <section className="bg-bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Text — 6 columns */}
          <div className="md:col-span-6">
            <RevealOnScroll>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
                Про групу
              </p>
              <h2 className="mt-6 font-display text-3xl text-text-primary md:text-4xl">
                Єдина ДНК надійності
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <p className="mt-8 font-body text-base font-light leading-relaxed text-text-secondary">
                Інвестиційно-комерційна група ICG об&apos;єднує чотири напрямки
                бізнесу на стику промисловості, нерухомості та енергетики.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="mt-4 font-body text-base font-light leading-relaxed text-text-secondary">
                TEHMAS — наш флагман: від промислового будівництва під ключ до
                парку з 40+ одиниць власної техніки. Grand Pellets експортує
                сертифіковані паливні пелети у п&apos;ять країн ЄС. The Roof
                керує комерційною нерухомістю. Захистбуд забезпечує
                промисловість сировиною.
              </p>
            </RevealOnScroll>

            {/* Photo */}
            <RevealOnScroll delay={0.3}>
              <div className="relative mt-10 aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=75"
                  alt="Промисловий об'єкт ICG"
                  fill
                  className="object-cover"
                />
              </div>
            </RevealOnScroll>
          </div>

          {/* Timeline — 5 columns */}
          <div className="md:col-span-5 md:col-start-8">
            <RevealOnScroll>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
                Хронологія
              </p>
            </RevealOnScroll>

            <div className="relative mt-8">
              {/* Vertical line */}
              <div className="absolute left-[5px] top-0 h-full w-px bg-accent-primary/30" />

              {TIMELINE.map((item, i) => (
                <RevealOnScroll key={item.year} delay={0.1 + i * 0.1}>
                  <div className="relative flex items-start gap-6 pb-10">
                    {/* Dot */}
                    <div className="relative z-10 mt-1.5 h-3 w-3 shrink-0 bg-accent-primary" />
                    <div>
                      <span className="font-mono text-sm font-medium text-accent-primary">
                        {item.year}
                      </span>
                      <p className="mt-1 font-body text-sm text-text-primary">
                        {item.event}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
