import React from "react";
import { useTheme } from "../context/ThemeContext";
import lightModeLogo from "../assets/light/light-mode.png";
import darkModeLogo from "../assets/dark/dark-mode.png";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center px-30 pb-6">
      <h1 className="text-2xl font-bold text-[#9D8640]">SJ Portfolio</h1>
      <button
        onClick={toggleTheme}
        className="p-4 rounded-full bg-[#B7A261] hover:scale-105 transition"
      >
        <img
          src={isDark ? darkModeLogo : lightModeLogo}
          alt="Toggle Theme"
          className="w-4 h-4"
        />
      </button>
    </header>
  );
};

export default Header;
