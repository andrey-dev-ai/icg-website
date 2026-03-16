"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const PRINCIPLES = [
  {
    id: "01",
    title: "Вертикальна інтеграція",
    text: "Від видобутку сировини до здачі об'єкта — ми контролюємо кожен етап. Захистбуд видобуває, TEHMAS будує, The Roof здає.",
  },
  {
    id: "02",
    title: "Власні ресурси",
    text: "40+ одиниць техніки, власний кар'єр, лабораторія контролю якості. Не залежимо від субпідрядників — працюємо своїми силами.",
  },
  {
    id: "03",
    title: "Міжнародний стандарт",
    text: "ENplus A1, ISO 8501, ISO 12944 — кожен бізнес сертифікований за міжнародними стандартами. Від Сумщини до Європи.",
  },
];

export function Approach() {
  return (
    <section className="bg-bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-20">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
            Підхід
          </p>
          <h2 className="mt-6 font-display text-3xl text-text-primary md:text-4xl">
            Як ми працюємо
          </h2>
        </RevealOnScroll>

        <div className="mt-16 space-y-0">
          {PRINCIPLES.map((p, i) => (
            <RevealOnScroll key={p.id} delay={i * 0.15}>
              <div
                className={`relative border-t border-line py-12 md:py-16 ${
                  i % 2 === 1 ? "md:ml-[16.66%]" : ""
                } ${i === 2 ? "md:ml-[8.33%]" : ""}`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-12">
                  {/* Number */}
                  <span className="font-mono text-4xl text-line md:text-5xl">
                    {p.id}
                  </span>

                  <div className="max-w-lg">
                    {/* Title */}
                    <h3 className="font-display text-xl text-text-primary md:text-2xl">
                      {p.title}
                    </h3>
                    {/* Text */}
                    <p className="mt-4 font-body text-sm font-light leading-relaxed text-text-secondary md:text-base">
                      {p.text}
                    </p>
                  </div>
                </div>

                {/* Accent line */}
                <div
                  className="absolute left-0 top-0 h-[2px] w-12"
                  style={{
                    backgroundColor:
                      i === 0
                        ? "var(--accent-primary)"
                        : i === 1
                          ? "var(--accent-secondary)"
                          : "var(--accent-safety)",
                  }}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
