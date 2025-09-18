import React from "react";
import calCulatorThumb from "../assets/projects/calculator_thumb.png";
import toDoThumb from "../assets/projects/to_do_thumb.png";
import AnimatedSection from "@/components/AnimatedSection";

const Projects = () => {
  const projects = [
    {
      name: "Todo List",
      tech: "JavaScript",
      img: toDoThumb,
      link: "https://sj-to-do-list-7104.web.app/",
      github:
        "https://github.com/sureshjavvadi24/js-learning-roadmap/tree/main/projects/js-to-do-app",
    },
    {
      name: "Calculator",
      tech: "JavaScript",
      img: calCulatorThumb,
      link: "https://sj-calculator-7104.web.app/",
      github:
        "https://github.com/sureshjavvadi24/js-learning-roadmap/tree/main/projects/js-calculator-app",
    },
  ];

  return (
    <AnimatedSection className="bg-[var(--bg-sec)] border-2 border-[var(--border-main)] rounded-lg p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map(({ name, img, link, github, tech }, index) => (
          <div
            key={index}
            className="bg-[var(--bg-ter)] border-2 border-[var(--border-main)] rounded-xl p-4 hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <div className="flex items-center justify-center flex-1">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={img}
                  alt={name}
                  className="max-h-40 object-contain mb-3 border border-black dark:border-white rounded-lg"
                />
              </a>
            </div>
            <h2 className="font-semibold text-center sm:text-left">
              <span className="mr-1">{name}</span>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cyan-500 hover:underline"
              >
                ({tech})
              </a>
            </h2>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
