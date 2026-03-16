"use client";

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
    <section className="bg-bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Text — 7 columns */}
          <div className="md:col-span-7">
            <RevealOnScroll>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
                Про групу
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="mt-6 font-display text-3xl text-text-primary md:text-4xl">
                Єдина ДНК надійності
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="mt-8 max-w-xl font-body text-base font-light leading-relaxed text-text-secondary">
                Інвестиційно-комерційна група ICG об&apos;єднує чотири напрямки
                бізнесу на стику промисловості, нерухомості та енергетики.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <p className="mt-4 max-w-xl font-body text-base font-light leading-relaxed text-text-secondary">
                TEHMAS — наш флагман: від промислового будівництва під ключ до
                парку з 40+ одиниць власної техніки. Grand Pellets експортує
                сертифіковані паливні пелети у п&apos;ять країн ЄС. The Roof
                керує комерційною нерухомістю через ексклюзивний брокеридж.
                Захистбуд забезпечує промисловість сировиною — пісок, глина,
                щебінь, каолін.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <p className="mt-4 max-w-xl font-body text-base font-light leading-relaxed text-text-secondary">
                Кожен бізнес — власна експертиза, спільна ДНК надійності.
              </p>
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
              <div className="absolute left-[3px] top-0 h-full w-px bg-line" />

              {TIMELINE.map((item, i) => (
                <RevealOnScroll key={item.year} delay={0.1 + i * 0.1}>
                  <div className="relative flex items-start gap-6 pb-8">
                    {/* Dot */}
                    <div className="relative z-10 mt-1.5 h-[7px] w-[7px] shrink-0 bg-accent-primary" />

                    {/* Content */}
                    <div>
                      <span className="font-mono text-xs text-text-muted">
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
