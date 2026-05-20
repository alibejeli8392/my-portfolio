import { motion } from "framer-motion";
import {
  defaultViewport,
  fadeInUp,
  sectionRevealUp,
  staggerContainer,
} from "../lib/motionVariants";

const expertiseCards = [
  {
    title: "Product Discovery",
    description:
      "I translate business needs into clear technical scope, helping teams prioritize the right features and ship with confidence.",
    highlighted: true,
  },
  {
    title: "Frontend Architecture",
    description:
      "I build reusable components and scalable UI patterns that keep codebases consistent, maintainable, and fast to evolve.",
    highlighted: false,
  },
  {
    title: "Interface Development",
    description:
      "I develop responsive, accessible interfaces with React and Tailwind, with close attention to performance and usability.",
    highlighted: false,
  },
  {
    title: "Delivery & Collaboration",
    description:
      "I collaborate effectively with designers and stakeholders, deliver production-ready features, and communicate progress clearly.",
    highlighted: false,
  },
];

const SkillsSection = () => (
  <motion.section
    id="skills"
    className="scroll-mt-24 border-t border-slate-200/80 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    aria-labelledby="skills-heading"
    variants={sectionRevealUp}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
  >
    <div className="mx-auto max-w-6xl">
      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#A0A3BD] sm:text-sm">
        Core Strengths
      </p>
      <h2
        id="skills-heading"
        className="mb-10 text-3xl font-bold tracking-tight text-[#282938] sm:text-4xl md:text-[44px] lg:text-[48px] lg:leading-tight"
      >
        How I Work
      </h2>

      <motion.ul
        className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-4 lg:gap-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        {expertiseCards.map(({ title, description, highlighted }) => (
          <motion.li
            key={title}
            className={`relative flex flex-col rounded-xl border border-slate-200/80 bg-[#F5FCFF] p-6 shadow-[0_12px_40px_-18px_rgba(28,30,83,0.12)] md:p-7 ${
              highlighted ? "border-b-4 border-b-[#5E3BEE]" : ""
            }`}
            variants={fadeInUp}
          >
            <div
              className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200/90 bg-white shadow-sm"
              aria-hidden="true"
            >
              <span className="h-6 w-6 rounded-full border-2 border-dashed border-[#282938]/35" />
            </div>
            <h3 className="mb-3 text-xl font-semibold leading-snug text-[#282938] sm:text-2xl">
              {title}
            </h3>
            <p className="flex-1 text-lg leading-relaxed text-[#1C1E53]">
              {description}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </motion.section>
);

export default SkillsSection;
