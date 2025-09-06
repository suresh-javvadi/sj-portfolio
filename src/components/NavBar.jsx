import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router";
import aboutDark from "../assets/dark/about.png";
import experienceDark from "../assets/dark/experience.png";
import projectsDark from "../assets/dark/projects.png";
import skillsDark from "../assets/dark/skills.png";
import contactDark from "../assets/dark/contact.png";
import aboutLight from "../assets/light/about.png";
import experienceLight from "../assets/light/experience.png";
import projectsLight from "../assets/light/projects.png";
import skillsLight from "../assets/light/skills.png";
import contactLight from "../assets/light/contact.png";

const NavBar = () => {
  const { isDark } = useTheme();

  const navItems = [
    { name: "About", dark: aboutDark, light: aboutLight, path: "/about" },
    {
      name: "Experience",
      dark: experienceDark,
      light: experienceLight,
      path: "/experience",
    },
    {
      name: "Projects",
      dark: projectsDark,
      light: projectsLight,
      path: "/projects",
    },
    { name: "Skills", dark: skillsDark, light: skillsLight, path: "/skills" },
    {
      name: "Contact",
      dark: contactDark,
      light: contactLight,
      path: "/contactme",
    },
  ];

  return (
    <nav className="flex flex-col gap-6 items-center">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="flex flex-col items-center text-sm hover:scale-110 transition"
        >
          <img
            src={isDark ? item.dark : item.light}
            alt={item.name}
            className="w-8 h-8"
          />
          <span>{item.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
