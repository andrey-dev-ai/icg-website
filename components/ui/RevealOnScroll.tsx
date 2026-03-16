"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const EASE_HEAVY: [number, number, number, number] = [0.16, 1, 0.3, 1];

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_HEAVY },
  },
};

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
}

export function RevealOnScroll({
  children,
  className = "",
  variants = defaultVariants,
  delay = 0,
  once = true,
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
