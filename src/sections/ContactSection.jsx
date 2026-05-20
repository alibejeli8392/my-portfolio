import { FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import { CalBooking } from "../components/CalBooking.jsx";
import {
  defaultViewport,
  fadeInUp,
  sectionRevealUp,
  staggerContainer,
} from "../lib/motionVariants";

const ContactSection = () => (
  <motion.section
    id="contact"
    className="scroll-mt-24 border-t border-slate-200/80 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    aria-labelledby="contact-heading"
    variants={sectionRevealUp}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
  >
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#A0A3BD] sm:text-sm">
          Let&apos;s connect
        </p>
        <h2
          id="contact-heading"
          className="mb-4 text-3xl font-bold tracking-tight text-[#282938] sm:text-4xl md:text-[44px] lg:text-[48px] lg:leading-tight"
        >
          Open to frontend and product-focused opportunities
        </h2>
      </div>

      <motion.div
        className="mx-auto max-w-5xl px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <motion.div
          className="mt-8 mb-10 flex flex-col items-start justify-center gap-8 md:flex-row md:items-center"
          aria-label="Contact methods"
          variants={fadeInUp}
        >
          <motion.div className="flex items-start gap-4" variants={fadeInUp}>
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white"
              aria-hidden
            >
              <FiMail className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-wide text-[#1C1E53]">
                EMAIL
              </span>
              <a
                href="mailto:alibjx00@gmail.com"
                className="mt-1 text-sm text-[#6E7191] underline decoration-slate-300 underline-offset-2"
              >
                alibjx00@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div className="flex items-start gap-4" variants={fadeInUp}>
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white"
              aria-hidden
            >
              <FiLinkedin className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-wide text-[#1C1E53]">
                LINKEDIN
              </span>
              <a
                href="https://www.linkedin.com/in/alibejeli"
                target="_blank"
                rel="noreferrer"
                className="mt-1 text-sm text-[#6E7191] underline decoration-slate-300 underline-offset-2"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="rounded-3xl bg-white p-4 shadow-lg md:p-6"
          variants={fadeInUp}
        >
          <CalBooking />
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

export default ContactSection;
