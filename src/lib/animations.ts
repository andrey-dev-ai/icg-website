export const heroTimeline = {
  bgGlow: { delay: 0 },
  logo: { delay: 0.3 },
  letters: { delay: 0.6, stagger: 0.1 },
  tagline: { delay: 0.9 },
  divider: { delay: 1.1 },
  metrics: { delay: 1.4, stagger: 0.15 },
  cards: { delay: 1.8, stagger: 0.1 },
  footer: { delay: 2.2 },
  scrollIndicator: { delay: 2.4 },
} as const;

export const easings = {
  smooth: [0.16, 1, 0.3, 1] as [number, number, number, number],
  spring: { damping: 25, stiffness: 120 },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
};
