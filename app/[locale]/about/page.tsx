import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { DimensionLine } from "@/components/ui/DimensionLine";
import { About as AboutSection } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Geography } from "@/components/sections/Geography";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Про нас — ICG Інвестиційно-комерційна група",
  description:
    "ICG об'єднує чотири напрямки бізнесу: будівництво, енергетика, нерухомість та видобуток. З 2000 року.",
};

const VALUES = [
  {
    title: "Відповідальність",
    text: "Повний цикл від фундаменту до введення в експлуатацію. Кожен проєкт — під нашою відповідальністю.",
  },
  {
    title: "Вертикальна інтеграція",
    text: "Видобуток → будівництво → брокеридж. Контроль якості на кожному етапі ланцюга.",
  },
  {
    title: "Міжнародні стандарти",
    text: "ENplus, ISO 8501, ISO 12944 — кожен бізнес сертифікований. Від Сумщини до Європи.",
  },
  {
    title: "Власні ресурси",
    text: "40+ одиниць техніки, кар'єр, виробництво, лабораторія. Незалежність від субпідрядників.",
  },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-bg-primary pb-20 pt-32 md:pb-28 md:pt-40">
        <BlueprintGrid />
        <NoiseOverlay />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
            ICG
          </p>
          <h1 className="mt-6 font-display text-4xl text-text-primary md:text-6xl">
            Про групу
          </h1>
          <div className="mt-6 max-w-xs">
            <DimensionLine label="з 2000 року" />
          </div>
          <p className="mt-8 max-w-2xl font-body text-lg font-light leading-relaxed text-text-secondary">
            Інвестиційно-комерційна група ICG — це об&apos;єднання чотирьох
            бізнесів на стику промисловості, нерухомості та енергетики. Кожен
            напрямок — власна експертиза, спільна ДНК надійності.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
            Цінності
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12">
            {VALUES.map((v, i) => (
              <div key={v.title} className="border-t border-line pt-6">
                <span className="font-mono text-xs text-text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl text-text-primary">
                  {v.title}
                </h3>
                <p className="mt-3 font-body text-sm font-light leading-relaxed text-text-secondary">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse homepage sections */}
      <AboutSection />
      <Approach />
      <Geography />
      <CTA />
    </main>
  );
}
