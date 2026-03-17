"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { heroTimeline, easings } from "@/lib/animations";
import IcgLogo from "@/components/ui/IcgLogo";

import Metrics from "./Metrics";
import Categories from "./Categories";
import FooterBar from "./FooterBar";

gsap.registerPlugin(ScrollTrigger);

const smoothEase = easings.smooth;

function MotionFadeUp({
  delay,
  children,
  className,
}: {
  delay: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay,
        duration: 0.9,
        ease: smoothEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const letters = ["I", "C", "G"];
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Scroll parallax for grid and glow
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Grid scrolls slower — depth effect
      if (gridRef.current) {
        gsap.to(gridRef.current, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Glow scales up and fades on scroll
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          yPercent: -40,
          scale: 1.3,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-[60px] pb-[80px] overflow-hidden"
    >
      {/* Grid texture — more visible, blueprint feel */}
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(194,158,97,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(194,158,97,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Background orbs for glassmorphism depth */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 500,
          height: 500,
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, rgba(212,185,120,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 350,
          height: 350,
          bottom: "15%",
          right: "10%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Ambient breathing gold glow */}
      <motion.div
        ref={glowRef}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.8, 0.5, 0.8],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{
          delay: heroTimeline.bgGlow.delay,
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute pointer-events-none"
        style={{
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "120%",
          height: "70%",
          background:
            "radial-gradient(ellipse at center, rgba(164,136,74,0.1) 0%, rgba(15,22,41,0) 65%)",
        }}
      />


      {/* Logo area */}
      <div className="text-center mb-4">
        {/* Logo icon — larger with glow halo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: heroTimeline.logo.delay,
            type: "spring",
            ...easings.spring,
          }}
          className="mx-auto mb-6 relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 2xl:w-32 2xl:h-32"
        >
          {/* Glow halo behind logo */}
          <motion.div
            className="absolute -inset-8 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(212,185,120,0.15) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <IcgLogo className="w-full h-full relative z-10" />
        </motion.div>

        {/* ICG letters with shimmer */}
        <h1
          className="font-[family-name:var(--font-display)] uppercase mb-3 relative overflow-hidden"
          style={{
            fontSize: "clamp(3.6rem, 8vw, 7.5rem)",
            fontWeight: 300,
            letterSpacing: "0.35em",
          }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={letter}
              initial={{ opacity: 0, filter: "blur(12px)", scale: 1.2 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{
                delay:
                  heroTimeline.letters.delay +
                  i * heroTimeline.letters.stagger,
                duration: 0.7,
                ease: smoothEase,
              }}
              className="inline-block"
              style={{
                background:
                  "linear-gradient(135deg, var(--gold-100) 0%, var(--gold-300) 30%, var(--gold-100) 50%, var(--gold-300) 70%, var(--gold-200) 100%)",
                backgroundSize: "200% auto",
                animation: "shimmer 6s linear infinite",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {letter}
            </motion.span>
          ))}

        </h1>

        {/* Tagline — larger, gold tinted */}
        <MotionFadeUp delay={heroTimeline.tagline.delay}>
          <p
            className="font-light uppercase"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 1.8vw, 1.3rem)",
              fontWeight: 300,
              letterSpacing: "0.25em",
              color: "var(--gold-100)",
            }}
          >
            Інвестиційно-комерційна група
          </p>
        </MotionFadeUp>
      </div>

      {/* Decorative divider — diamond + lines */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: heroTimeline.divider.delay,
          duration: 1,
          ease: smoothEase,
        }}
        className="flex items-center gap-3 mb-8 mt-4"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{
            delay: heroTimeline.divider.delay + 0.2,
            duration: 0.8,
            ease: smoothEase,
          }}
          className="h-px overflow-hidden"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--gold-300))",
          }}
        />
        <div
          className="w-1.5 h-1.5 rotate-45 shrink-0"
          style={{
            background: "var(--gold-300)",
            opacity: 0.6,
          }}
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{
            delay: heroTimeline.divider.delay + 0.2,
            duration: 0.8,
            ease: smoothEase,
          }}
          className="h-px overflow-hidden"
          style={{
            background:
              "linear-gradient(90deg, var(--gold-300), transparent)",
          }}
        />
      </motion.div>

      {/* Slogan */}
      <MotionFadeUp delay={heroTimeline.divider.delay + 0.4} className="mb-12">
        <p
          className="font-[family-name:var(--font-display)] italic text-center"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            fontWeight: 400,
            color: "var(--text-secondary)",
            letterSpacing: "0.02em",
          }}
        >
          Кожна інвестиція — це точний результат
        </p>
      </MotionFadeUp>

      {/* Metrics */}
      <MotionFadeUp delay={heroTimeline.metrics.delay} className="mb-16">
        <Metrics />
      </MotionFadeUp>

      {/* Categories */}
      <Categories />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: heroTimeline.scrollIndicator.delay,
          duration: 0.8,
        }}
        className="absolute left-1/2 -translate-x-1/2"
        style={{ bottom: 60 }}
      >
        <span
          className="block w-px h-8 mx-auto"
          style={{
            background:
              "linear-gradient(to bottom, var(--gold-300), transparent)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </motion.div>

      {/* Footer bar */}
      <FooterBar />
    </section>
  );
}
