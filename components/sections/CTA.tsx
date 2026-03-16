"use client";

import { Link } from "@/i18n/routing";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-accent-primary py-20 md:py-28">
      {/* Diagonal stripes */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(0,0,0,0.3) 20px,
            rgba(0,0,0,0.3) 22px
          )`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 text-center md:px-20">
        <RevealOnScroll>
          <h2 className="font-display text-3xl text-text-primary md:text-5xl">
            Обговоримо ваш проєкт
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <p className="mx-auto mt-6 max-w-md font-body text-base font-light text-text-primary/80">
            Будівництво, логістика, енергетика чи видобуток — розкажіть про
            вашу задачу.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <Link
            href="/contact"
            className="mt-10 inline-block border-2 border-text-primary bg-transparent px-10 py-4 font-mono text-sm uppercase tracking-[0.15em] text-text-primary transition-all duration-300 hover:bg-text-primary hover:text-accent-primary"
          >
            Зв&apos;язатись
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
