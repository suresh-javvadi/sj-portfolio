import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Calculator",
      tech: "JavaScript",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTTH_fME5GhfNUuCWPTTLXqHcdB8YjKNN0Q&s",
      link: "https://your-calculator-demo-link.com",
      github: "https://github.com/your-username/calculator",
    },
    {
      name: "Todo List",
      tech: "JavaScript",
      img: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
      link: "https://your-todo-demo-link.com",
      github: "https://github.com/your-username/todo-app",
    },
    {
      name: "Portfolio Website",
      tech: "React JS",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      link: "https://your-portfolio-link.com",
      github: "https://github.com/your-username/portfolio",
    },
  ];

  return (
    <div className="bg-white dark:bg-black p-8 rounded-lg space-y-10 border border-[#B7A261]">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid grid-cols-2 gap-6">
        {projects.map(({ name, img, link, github, tech }, index) => (
          <div
            key={index}
            className="bg-[#F9F6EA] dark:bg-[#403D32] border-2 border-[#4B3D10] rounded-xl p-4 hover:scale-105 transition-transform duration-300 flex flex-col"
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
