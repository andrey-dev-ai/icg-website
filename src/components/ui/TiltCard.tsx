"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function TiltCard({
  children,
  className = "",
  href,
}: TiltCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-6px) perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;

    // Cursor-following glow
    if (glow) {
      glow.style.opacity = "1";
      glow.style.background = `radial-gradient(120px circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(212,185,120,0.12), transparent 70%)`;
    }
  }

  function handleMouseLeave() {
    if (cardRef.current) {
      cardRef.current.style.transform = "";
    }
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
  }

  return (
    <a
      ref={cardRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-card relative flex flex-col cursor-pointer text-center overflow-hidden transition-all duration-500 group ${className}`}
      style={{
        padding: "20px 18px 24px",
        minHeight: "180px",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Cursor-reactive glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 pointer-events-none"
      />
      {children}
    </a>
  );
}
