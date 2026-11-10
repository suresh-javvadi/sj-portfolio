import { ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, WhatsappIcon as Whatsapp } from "../components/common/BrandIcons";
import Container from "../components/common/Container";
import Reveal from "../components/animations/Reveal";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <Reveal className="border-t border-border pt-16 text-center sm:pt-20">
          <span className="mb-5 block text-xs font-medium tracking-[0.2em] text-accent uppercase">
            Contact
          </span>
          <h2 className="mx-auto max-w-2xl font-display text-3xl text-balance text-fg sm:text-4xl md:text-5xl">
            Have a project or opportunity in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-fg-secondary sm:text-lg">
            I'm always interested in discussing interesting engineering challenges and opportunities
            to build useful products.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex max-w-full items-center gap-2 font-display text-xl break-all text-fg transition-colors duration-200 hover:text-accent sm:gap-3 sm:text-3xl"
          >
            {profile.email}
            <ArrowUpRight
              size={22}
              strokeWidth={1.5}
              className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-fg-secondary">
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} strokeWidth={1.75} />
              {profile.location}
            </span>
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
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-fg"
            >
              <Whatsapp size={15} strokeWidth={1.75} />
              WhatsApp
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
