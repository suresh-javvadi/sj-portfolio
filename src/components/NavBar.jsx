import React from "react";
import { Link, useLocation } from "react-router";
import { CgProfile } from "react-icons/cg";
import { MdContactMail } from "react-icons/md";
import { BiSolidBriefcase } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa6";
import { VscLightbulbAutofix } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";

const NavBar = () => {
  const location = useLocation();

  const navItems = [
    { name: "About", icon: FaUserAlt, path: "/" },
    { name: "Experience", icon: BiSolidBriefcase, path: "/experience" },
    { name: "Projects", icon: FaLaptopCode, path: "/projects" },
    { name: "Skills", icon: VscLightbulbAutofix, path: "/skills" },
    { name: "Contact", icon: MdContactMail, path: "/contactme" },
  ];

  return (
    <nav className="flex flex-col gap-6 items-center bg-[var(--bg-sec)] p-4 border-2 border-[var(--border-main)] rounded-lg">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center text-sm transition rounded-lg p-2 w-16 
              ${
                isActive
                  ? "bg-[var(--bg-hlt)]"
                  : "bg-[#FEF6DD] dark:bg-[#3B3729] text-black dark:text-[#A89D9D] hover:scale-110"
              }`}
          >
            <Icon className="w-8 h-6" />
            <span className="mt-1 font-semibold text-xs">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
