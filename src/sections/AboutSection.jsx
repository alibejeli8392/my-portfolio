import aboutImg from "@/assets/images/about.jpeg";
import { motion } from "framer-motion";
import {
  defaultViewport,
  sectionRevealUp,
} from "../lib/motionVariants";

const AboutSection = () => (
  <motion.section
    id="about"
    className="scroll-mt-24 border-t border-slate-200/80 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    aria-labelledby="about-heading"
    variants={sectionRevealUp}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
  >
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-16 xl:gap-20">
        {/* Visual column — first on mobile (image above copy); left from md */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="Ali Bejeli working as a Frontend Engineer"
            width="736"
            height="736"
            className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* Copy column */}
        <div className="flex flex-col text-center md:text-left">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#A0A3BD] sm:text-sm">
            About
          </p>
          <h2
            id="about-heading"
            className="mb-6 text-3xl font-bold tracking-tight text-[#282938] sm:text-4xl md:text-[44px] lg:text-[48px] lg:leading-tight"
          >
            About me
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-[#1C1E53]">
            <p>
              I am a frontend-focused developer with a strong foundation in
              React, Tailwind CSS, and modern JavaScript. I enjoy building
              polished interfaces that are responsive, accessible, and easy to
              maintain.
            </p>
            <p>
              My project background helps me connect technical execution with
              business goals. I work comfortably across product, design, and
              engineering conversations to align priorities and keep delivery on
              track.
            </p>
            <p>
              I bring a problem-solving mindset to every build: define the real
              issue, ship a practical solution, and iterate based on feedback
              and outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default AboutSection;
