import React from "react";
import webFrontendDev from "../assets/web_front_end_dev.webp";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  return (
    <AnimatedSection className="bg-[var(--bg-sec)] border-2 border-[var(--border-main)] rounded-lg p-6 space-y-6">
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">About Me</h1>
        <p className="leading-relaxed text-base">
          I’m an enthusiastic and detail-oriented <strong>Web Developer</strong>{" "}
          with over a year of professional experience building{" "}
          <strong>scalable</strong> and <strong>user-friendly</strong>{" "}
          applications using <strong>React.js</strong>,{" "}
          <strong>JavaScript</strong>, <strong>Material UI</strong>, and modern
          frontend tools like <strong>Vite</strong>.
          <br />
          <br />
          I’ve contributed to the{" "}
          <strong>planning, design, and development</strong> of enterprise-level
          applications such as <strong>MES</strong> and <strong>VMS</strong>{" "}
          platforms, focusing on creating <strong>clean, intuitive UIs</strong>{" "}
          and solving <strong>real-world problems</strong> for users.
          <br />
          <br />
          I’m passionate about writing <strong>clean, maintainable code</strong>
          , collaborating with teams, and delivering{" "}
          <strong>reliable solutions</strong> in
          <strong> fast-paced environments</strong>. Always eager to learn, I’m
          looking forward to taking on <strong>challenging roles</strong> where
          I can grow as a <strong>frontend specialist</strong> and contribute to{" "}
          <strong>impactful projects</strong>.
        </p>
      </div>

      <div>
        <h1 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">
          What I Do
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start border-2 border-[var(--border-main)] dark:border-[#625839] rounded-lg p-4 gap-6 bg-[var(--bg-ter)]">
          <img
            src={webFrontendDev}
            alt="Web Front-End Development"
            loading="lazy"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg"
          />

          <div className="text-center md:text-left">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Web Front-End Development
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
              I create <strong>responsive, user-friendly web interfaces</strong>{" "}
              using
              <strong> React.js</strong>, <strong>JavaScript</strong>, and
              modern tools like
              <strong> Material UI</strong> and <strong>Tailwind CSS</strong>. I
              focus on
              <strong> clean code</strong>, <strong>scalable components</strong>
              , and delivering a smooth <strong>user experience</strong>.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
