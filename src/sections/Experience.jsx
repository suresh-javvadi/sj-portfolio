import SectionHeading from "../components/common/SectionHeading";
import Container from "../components/common/Container";
import Reveal from "../components/animations/Reveal";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Experience" title="Experience that goes beyond the interface." />

        <div className="mt-14 space-y-10">
          {experience.map((job, index) => (
            <Reveal key={`${job.company}-${job.role}`} delay={index * 0.1}>
              <div className="grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-[180px_1fr] sm:gap-10">
                <div>
                  <p className="text-sm font-medium tracking-wide text-fg-muted">
                    {job.duration}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-2xl text-fg sm:text-3xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-base text-fg-secondary">{job.company}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-3 py-1 text-xs text-fg-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-3">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-fg-secondary">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
