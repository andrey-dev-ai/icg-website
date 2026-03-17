"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export default function AnimatedCounter({
  value,
  suffix,
  label,
  delay = 0,
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!counterRef.current || !containerRef.current) return;

      const obj = { val: 0 };
      const isFloat = value % 1 !== 0;

      gsap.fromTo(
        obj,
        { val: 0 },
        {
          val: value,
          duration: 2.2,
          ease: "expo.out",
          delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.textContent = isFloat
                ? obj.val.toFixed(1)
                : Math.round(obj.val).toString();
            }
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="text-center min-w-[120px]">
      <div
        className="font-[family-name:var(--font-display)] leading-none mb-3"
        style={{
          fontSize: "clamp(3.4rem, 6vw, 6rem)",
          fontWeight: 300,
          background:
            "linear-gradient(135deg, var(--gold-100) 0%, var(--gold-300) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        <span ref={counterRef}>0</span>
        {suffix && <span>{suffix}</span>}
      </div>
      <div
        className="font-light uppercase"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.85rem",
          letterSpacing: "0.3em",
          color: "var(--text-secondary)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
