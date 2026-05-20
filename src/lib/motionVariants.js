export const defaultViewport = { once: true, amount: 0.2 };

export const sectionTransition = {
  duration: 0.9,
  ease: "easeOut",
  delay: 0.15,
};

export const itemTransition = {
  duration: 0.5,
  ease: "easeOut",
};

export const heroTransition = {
  duration: 1.0,
  ease: "easeOut",
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: itemTransition,
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const sectionRevealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: sectionTransition,
  },
};

export const sectionRevealDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: sectionTransition,
  },
};

export const heroTextIntro = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...heroTransition, delay: 0.2 },
  },
};

export const heroImageIntro = {
  hidden: { opacity: 0, x: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { ...heroTransition, delay: 0.4 },
  },
};

