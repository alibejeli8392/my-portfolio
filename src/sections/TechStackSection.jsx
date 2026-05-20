import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  defaultViewport,
  sectionRevealUp,
} from "../lib/motionVariants";

const skills = [
  "JavaScript (ES6)",
  "React",
  "Node.js",
  "Express",
  "SQL",
  "Supabase",
  "Tailwind CSS",
  "Figma",
  "Git / GitHub",
];

const TechStackSection = () => {
  const [hovered, setHovered] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 30 });
  const sy = useSpring(my, { stiffness: 220, damping: 30 });
  const parallaxX = useTransform(sx, (v) => v * 12);
  const parallaxY = useTransform(sy, (v) => v * 8);

  const handlePointerMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const handlePointerLeave = () => {
    setHovered(false);
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.section
      id="experience"
      className="scroll-mt-24 border-t border-slate-200/80 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="tech-stack-heading"
      variants={sectionRevealUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#A0A3BD] sm:text-sm">
          Technical Skills
        </p>
        <h2
          id="tech-stack-heading"
          className="mb-10 text-3xl font-bold tracking-tight text-[#282938] sm:text-4xl md:text-[44px] lg:text-[48px] lg:leading-tight"
        >
          Tools &amp; technologies I use to ship
        </h2>

        <motion.div
          className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-light-blue md:p-12"
          onPointerEnter={() => setHovered(true)}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <motion.div
            className="flex flex-wrap justify-center gap-5 md:gap-6"
            style={{ x: parallaxX, y: parallaxY }}
          >
            {skills.map((label, i) => (
              <motion.span
                key={label}
                className="inline-flex cursor-default items-center rounded-full bg-[#F5FCFF] px-4 py-2 text-sm font-medium text-[#1C1E53] ring-1 ring-[#5E3BEE]/10"
                animate={
                  hovered
                    ? {
                        y: [0, -12, 0, 10, 0],
                        rotate: [0, 3.5, 0, -3.5, 0],
                      }
                    : {
                        y: [0, -4, 0, 4, 0],
                        rotate: [0, 1, 0, -1, 0],
                      }
                }
                transition={{
                  duration: hovered ? 2 + (i % 4) * 0.15 : 4.5 + (i % 6) * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechStackSection;
