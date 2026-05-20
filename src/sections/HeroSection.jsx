import heroImg from "@/assets/images/hero.jpg";
import { motion } from "framer-motion";
import {
  defaultViewport,
  heroImageIntro,
  heroTextIntro,
  sectionRevealDown,
} from "../lib/motionVariants";

const HeroSection = () => (
  <motion.section
    id="home"
    className="scroll-mt-24 bg-[#F5FCFF] px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:pb-24 lg:pt-16"
    aria-labelledby="hero-heading"
    variants={sectionRevealDown}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
  >
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-14 xl:gap-20">
      {/* Text column — first on mobile (stacked); left column from md */}
      <motion.div
        className="flex flex-col text-center md:text-left"
        variants={heroTextIntro}
        initial="hidden"
        animate="visible"
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[#A0A3BD] sm:text-sm">
          Hi, I&apos;m Ali Bejeli
        </p>
        <h1
          id="hero-heading"
          className="mb-6 text-3xl font-bold leading-[1.15] tracking-tight text-[#282938] sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[56px] xl:leading-[1.12]"
        >
          Frontend Developer building{" "}
          <span className="text-[#5E3BEE]">clean, scalable web products</span>
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-[#1C1E53] md:mx-0 md:max-w-lg">
          I build responsive React and Tailwind interfaces that turn business
          requirements into reliable user experiences. I focus on practical
          delivery, clear collaboration, and shipping work that creates
          measurable value.
        </p>
        <div className="flex justify-center md:justify-start">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-md bg-[#5E3BEE] px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-[#5E3BEE]/25 transition hover:bg-[#4f32d4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E3BEE] sm:w-auto"
          >
            Let&apos;s work together
          </a>
        </div>
      </motion.div>

      {/* Visual column */}
      <motion.div
        className="order-1 md:order-2 flex justify-center"
        variants={heroImageIntro}
        initial="hidden"
        animate="visible"
      >
        <img
          src={heroImg}
          alt="Ali Bejeli, Frontend Engineer"
          className="w-full max-w-md md:max-w-lg h-auto object-contain rounded-3xl shadow-lg"
        />
      </motion.div>
    </div>
  </motion.section>
);

export default HeroSection;
