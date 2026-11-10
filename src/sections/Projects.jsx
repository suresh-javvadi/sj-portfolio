import { ArrowUpRight } from "lucide-react";
import { GithubIcon as Github } from "../components/common/BrandIcons";
import SectionHeading from "../components/common/SectionHeading";
import Container from "../components/common/Container";
import Reveal from "../components/animations/Reveal";
import ProjectVisual from "../components/common/ProjectVisual";
import { projects } from "../data/projects";
import { cn } from "../lib/cn";

function ProjectCard({ project, reversed }) {
  return (
    <Reveal
      as="article"
      className="grid grid-cols-1 items-center gap-10 border-t border-border py-16 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:gap-16"
    >
      <div className={cn(reversed && "lg:order-2")}>
        <ProjectVisual variant={project.visual} />
      </div>

      <div className={cn(reversed && "lg:order-1")}>
        <div className="flex items-baseline gap-3">
          <span className="font-display text-sm text-fg-muted">
            {project.index}
          </span>
          <span className="text-xs font-medium tracking-[0.15em] text-accent uppercase">
            {project.category}
          </span>
        </div>

        <h3 className="mt-3 font-display text-3xl text-fg sm:text-4xl">
          {project.name}
        </h3>

        <p className="mt-4 text-base leading-relaxed text-fg-secondary">
          {project.description}
        </p>

        <p className="mt-4 text-sm text-fg-muted">
          <span className="text-fg">Role —</span> {project.role}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-xs text-fg-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-6 space-y-2.5">
          {project.contributions.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-fg-secondary">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>

        {(project.github || project.demo) && (
          <div className="mt-7 flex flex-wrap gap-5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-fg transition-opacity duration-200 hover:opacity-70"
              >
                <Github size={15} strokeWidth={1.75} />
                Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-fg transition-opacity duration-200 hover:opacity-70"
              >
                Live Demo
                <ArrowUpRight size={15} strokeWidth={1.75} />
              </a>
            )}
          </div>
        )}

        {project.note && (
          <p className="mt-6 text-xs text-fg-muted italic">{project.note}</p>
        )}
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Work"
          title="Selected work."
          description="A selection of products, systems, and experiments I've worked on."
        />

        <div className="mt-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} reversed={index % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
