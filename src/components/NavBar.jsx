import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { MdContactMail } from "react-icons/md";
import { BiSolidBriefcase } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa6";
import { VscLightbulbAutofix } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";
import useIsMobile from "@/hooks/useIsMobile";

const NavBar = () => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) {
      setShowNav(true);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowNav(scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  if (!showNav) return null;

  const navItems = [
    { name: "About", icon: FaUserAlt, path: "/" },
    { name: "Experience", icon: BiSolidBriefcase, path: "/experience" },
    { name: "Projects", icon: FaLaptopCode, path: "/projects" },
    { name: "Skills", icon: VscLightbulbAutofix, path: "/skills" },
    { name: "Contact", icon: MdContactMail, path: "/contactme" },
  ];

  return (
    <nav
      className={`
        flex flex-row justify-around items-center
        fixed bottom-0 left-0 w-full z-50
        bg-[var(--bg-sec)] border-t-2 border-[var(--border-main)] p-2
        sm:static md:flex-col sm:gap-6 sm:items-center sm:w-auto sm:p-4 sm:border-2 sm:rounded-lg sm:border-[var(--border-main)]
      `}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center justify-center text-xs sm:text-sm transition rounded-lg p-2 sm:w-16
              ${
                isActive
                  ? "bg-[var(--bg-hlt)] text-black"
                  : "bg-[#FEF6DD] dark:bg-[#3B3729] text-black dark:text-[#A89D9D] hover:scale-110"
              }
            `}
          >
            <Icon className="w-6 h-6 sm:w-8 sm:h-6" />
            <span className="mt-0.5 sm:mt-1 font-semibold text-[10px] sm:text-xs">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
