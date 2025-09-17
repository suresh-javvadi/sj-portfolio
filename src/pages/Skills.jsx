import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNpm } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import {
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiVite,
  SiAxios,
  SiReactrouter,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import LogoLoop from "@/components/LogoLoop";
import StarBorder from "@/components/StarBorder";
import AnimatedSection from "@/components/AnimatedSection";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
    { name: "JavaScript", icon: TbBrandJavascript, color: "text-[#F7DF1E]" },
    { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "React Router", icon: SiReactrouter, color: "text-[#CA4245]" },
    { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Material UI", icon: SiMui, color: "text-[#007FFF]" },
  ];

  const tools = [
    { name: "Vite", icon: SiVite, color: "text-[#646CFF]" },
    { name: "Axios", icon: SiAxios, color: "text-[#5A29E4]" },
    { name: "GitHub", icon: BsGithub, color: "text-black dark:text-white" },
    { name: "NPM", icon: FaNpm, color: "text-[#CB3837]" },
  ];

  const techLogos = [...skills, ...tools].map((item) => ({
    node: <item.icon className={`${item.color} w-12 h-12`} />,
    title: item.name,
  }));

  const renderSkill = (skill) => {
    const { name, icon: Icon, color } = skill;
    return (
      <div
        key={name}
        className="flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-200"
      >
        <div
          className="w-20 h-20 flex items-center justify-center border-2 border-[var(--border-main)] rounded-xl p-1
                        shadow-[0_4px_10px_rgba(248,223,145,0.6)] bg-transparent"
        >
          <Icon className={`${color} w-12 h-12`} aria-hidden="true" />
        </div>

        <h2 className="text-base font-semibold text-center">{name}</h2>
      </div>
    );
  };

  return (
    <AnimatedSection className="bg-[var(--bg-sec)] border-2 border-[var(--border-main)] rounded-lg p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-6">Skills</h1>
        <div className="flex flex-row flex-wrap gap-4">
          {skills.map(renderSkill)}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-6">Tools & Softwares</h1>
        <div className="flex flex-row flex-wrap gap-4">
          {tools.map(renderSkill)}
        </div>
      </div>

      <div className="overflow-hidden w-170">
        <StarBorder className="w-full" color="cyan" speed="3s">
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="var(--bg-sec)"
            ariaLabel="Technology logos"
          />
        </StarBorder>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
