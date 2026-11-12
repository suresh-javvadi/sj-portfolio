import SectionHeading from "../components/common/SectionHeading";
import Container from "../components/common/Container";
import Reveal from "../components/animations/Reveal";
import ScrollAnchor from "../components/common/ScrollAnchor";
import { profile } from "../data/profile";

const FACTS = [
  { label: "Location", value: profile.locationShort },
  { label: "Focus", value: "Full Stack Development" },
  { label: "Education", value: profile.education.degree },
  { label: "Graduated", value: profile.education.duration },
];

export default function About() {
  return (
    <section className="pt-24 sm:pt-32">
      <Container>
        <ScrollAnchor id="about" />
        <SectionHeading eyebrow="About" title="A little about what I do." />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal delay={0.1} className="space-y-6">
            <p className="text-lg leading-relaxed text-fg-secondary sm:text-xl">
              {profile.aboutParagraph}
            </p>

            <ul className="space-y-3 pt-4">
              {profile.strengths.map((strength) => (
                <li key={strength} className="flex items-start gap-3 text-fg">
                  <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                  <span className="text-base sm:text-lg">{strength}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="divide-y divide-border rounded-2xl border border-border bg-surface">
              {FACTS.map((fact) => (
                <div key={fact.label} className="flex items-center justify-between gap-4 px-6 py-5">
                  <span className="text-sm text-fg-muted">{fact.label}</span>
                  <span className="text-right text-sm font-medium text-fg">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
