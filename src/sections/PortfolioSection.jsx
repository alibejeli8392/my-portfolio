import { motion } from "framer-motion";
import {
  defaultViewport,
  fadeInUp,
  sectionRevealUp,
  staggerContainer,
} from "../lib/motionVariants";

const GlobeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
    <path
      d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
    aria-hidden="true"
  >
    <path
      d="M7 17L17 7M17 7H9M17 7V15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const projects = [
  {
    title: "Northshore Listings Platform",
    description:
      "Designed and built a responsive property search experience with map-based browsing and saved search flows to improve discovery and engagement.",
    imageTint: "from-violet-200/90 to-violet-100/70",
  },
  {
    title: "Operations Analytics Console",
    description:
      "Developed an internal dashboard with role-based access, filters, and reporting views to help teams make faster operational decisions.",
    imageTint: "from-slate-200 to-slate-100",
  },
  {
    title: "Short-Term Rentals Booking",
    description:
      "Implemented a mobile-first booking flow with availability and checkout improvements, focused on reducing friction and increasing conversions.",
    imageTint: "from-slate-300/90 to-slate-200/80",
  },
];

const PortfolioSection = () => (
  <motion.section
    id="projects"
    className="scroll-mt-24 border-t border-slate-200/80 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    aria-labelledby="portfolio-heading"
    variants={sectionRevealUp}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
  >
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-8">
        <div className="flex flex-col text-center md:text-left">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#A0A3BD] sm:text-sm">
            Selected Work
          </p>
          <h2
            id="portfolio-heading"
            className="text-3xl font-bold tracking-tight text-[#282938] sm:text-4xl md:text-[44px] lg:text-[48px] lg:leading-tight"
          >
            Projects
          </h2>
        </div>
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 self-center rounded-md bg-[#5E3BEE] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#5E3BEE]/25 transition hover:bg-[#4f32d4] sm:w-auto md:self-end"
        >
          <GlobeIcon />
          Browse more work
        </a>
      </div>

      <motion.ul
        className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        {projects.map((project) => (
          <motion.li
            key={project.title}
            className="flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-[#F5FCFF] shadow-[0_16px_48px_-20px_rgba(28,30,83,0.15)]"
            variants={fadeInUp}
          >
            <div
              className={`aspect-[16/10] w-full bg-gradient-to-br ${project.imageTint} relative`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="rounded-lg bg-white/70 px-4 py-2 text-sm font-medium text-[#282938]/60 shadow-sm">
                  Project preview
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-7">
              <h3 className="mb-3 text-xl font-semibold text-[#282938] sm:text-2xl">
                {project.title}
              </h3>
              <p className="mb-6 flex-1 text-lg leading-relaxed text-[#1C1E53]">
                {project.description}
              </p>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-[#282938] underline decoration-[#282938]/30 underline-offset-4 transition hover:text-[#5E3BEE] hover:decoration-[#5E3BEE]/40"
              >
                View project
                <ArrowUpRightIcon />
              </a>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </motion.section>
);

export default PortfolioSection;
