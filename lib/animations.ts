import type { Variants } from "framer-motion";

export const EASE_HEAVY = [0.16, 1, 0.3, 1] as const;
export const DURATION_REVEAL = 0.8;
export const DURATION_HOVER = 0.3;
export const STAGGER = 0.1;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_REVEAL,
      ease: EASE_HEAVY,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION_REVEAL,
      ease: EASE_HEAVY,
    },
  },
};

export const drawLine: Variants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1.2,
      ease: EASE_HEAVY,
    },
  },
};
