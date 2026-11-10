import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import Container from "../common/Container";
import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "../../hooks/useActiveSection";
import { profile } from "../../data/profile";
import { cn } from "../../lib/cn";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = ["hero", ...NAV_LINKS.map((link) => link.id)];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (id) => (event) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-canvas/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <a
          href="#hero"
          onClick={handleNavClick("hero")}
          className="font-display text-xl font-medium tracking-tight text-fg"
          aria-label={`${profile.name} — back to top`}
        >
          {profile.initials}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleNavClick(link.id)}
              className={cn(
                "relative text-sm transition-colors duration-200",
                activeId === link.id
                  ? "text-fg"
                  : "text-fg-secondary hover:text-fg"
              )}
            >
              {link.label}
              {activeId === link.id && (
                <motion.span
                  layoutId="nav-active-indicator"
                  className="absolute -bottom-1.5 left-0 h-px w-full bg-accent"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-fg transition-colors duration-200 hover:border-fg"
          >
            <ArrowDownToLine size={14} strokeWidth={1.75} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center text-fg"
          >
            {menuOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-border bg-canvas md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={handleNavClick(link.id)}
                  className={cn(
                    "rounded-md px-2 py-3 text-base transition-colors duration-200",
                    activeId === link.id
                      ? "text-fg"
                      : "text-fg-secondary"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-medium text-fg"
              >
                <ArrowDownToLine size={14} strokeWidth={1.75} />
                Download Resume
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
