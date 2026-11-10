import { motion, useReducedMotion } from "motion/react";
import { ArrowDownToLine, ArrowRight, ArrowDown, Mail } from "lucide-react";
import Container from "../components/common/Container";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../components/common/BrandIcons";
import { profile } from "../data/profile";

const EASE = [0.16, 1, 0.3, 1];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  const scrollTo = (id) => (event) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      <Container className="relative">
        <motion.span
          {...fadeUp(0)}
          className="mb-6 block text-xs font-medium tracking-[0.2em] text-fg-muted uppercase sm:mb-8"
        >
          {profile.heroLabel}
        </motion.span>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-6">
          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-[2.75rem] leading-[1.05] font-normal text-balance text-fg sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            Building digital <br className="hidden sm:block" />
            products with purpose <br className="hidden sm:block" />
            and precision.
          </motion.h1>

          <motion.span
            {...fadeUp(0.2)}
            aria-hidden="true"
            className="hidden select-none font-display text-[7rem] leading-none text-border lg:block"
          >
            SJ
          </motion.span>
        </div>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-8 max-w-xl text-base leading-relaxed text-fg-secondary sm:text-lg"
        >
          {profile.heroSupport}
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            onClick={scrollTo("projects")}
            className="group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-canvas transition-transform duration-200 hover:-translate-y-0.5"
          >
            View Selected Work
            <ArrowRight size={15} strokeWidth={1.75} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-fg transition-colors duration-200 hover:border-fg"
          >
            <ArrowDownToLine size={15} strokeWidth={1.75} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.5)}
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-fg-secondary"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-fg"
          >
            <Mail size={15} strokeWidth={1.75} />
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-fg"
          >
            <Github size={15} strokeWidth={1.75} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-fg"
          >
            <Linkedin size={15} strokeWidth={1.75} />
            LinkedIn
          </a>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        onClick={scrollTo("about")}
        {...fadeUp(0.7)}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-fg-muted sm:flex"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.span
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}
