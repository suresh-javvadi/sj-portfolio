import React from "react";
import calCulatorThumb from "../assets/projects/calculator_thumb.png";
import toDoThumb from "../assets/projects/to_do_thumb.png";

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
    <div className="bg-[var(--bg-sec)] border-2 border-[var(--border-main)] rounded-lg p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid grid-cols-2 gap-6">
        {projects.map(({ name, img, link, github, tech }, index) => (
          <div
            key={index}
            className="bg-[var(--bg-ter)] border-2 border-[var(--border-main)] rounded-xl p-4 hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <a href={link} target="_blank">
              <img
                src={img}
                alt={name}
                className="w-full h-40 object-cover mb-2 border border-black dark:border-white rounded-lg"
              />
            </a>
            <h2 className="font-semibold">
              <span className="mr-1">{name}</span>
              <a href={github} target="_blank">
                ({tech})
              </a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
