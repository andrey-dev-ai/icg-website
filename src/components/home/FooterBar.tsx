"use client";

import { motion } from "motion/react";
import { heroTimeline, easings } from "@/lib/animations";

export default function FooterBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: heroTimeline.footer.delay,
        duration: 0.8,
        ease: easings.smooth ,
      }}
      className="absolute bottom-5 left-6 right-6 flex justify-between items-center"
    >
      <span
        className="font-light"
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
          color: "var(--text-tertiary)",
        }}
      >
        icg.in.ua
      </span>
      <span
        className="font-light uppercase rounded-full"
        style={{
          fontSize: "0.6rem",
          letterSpacing: "0.15em",
          color: "var(--text-tertiary)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "6px 16px",
        }}
      >
        Київ · Бровари · 2025
      </span>
    </motion.div>
  );
}
