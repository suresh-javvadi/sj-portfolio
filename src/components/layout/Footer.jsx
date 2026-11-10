import { ArrowUp } from "lucide-react";
import Container from "../common/Container";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../common/BrandIcons";
import { profile } from "../../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg text-fg">
            {profile.initials}
          </span>
          <span className="text-sm text-fg-muted">
            &copy; {year} {profile.name}
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-fg-secondary transition-colors duration-200 hover:text-fg"
          >
            <Github size={18} strokeWidth={1.75} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-fg-secondary transition-colors duration-200 hover:text-fg"
          >
            <Linkedin size={18} strokeWidth={1.75} />
          </a>
          <a
            href="#hero"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-sm text-fg-secondary transition-colors duration-200 hover:text-fg"
          >
            Back to top
            <ArrowUp size={14} strokeWidth={1.75} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
