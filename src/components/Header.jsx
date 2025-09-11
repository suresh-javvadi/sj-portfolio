import React from "react";
import { useTheme } from "../context/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center px-30 pb-6">
      <h1 className="text-2xl font-bold text-[#9D8640]">SJ Portfolio</h1>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-[#B7A261] hover:scale-105 transition"
      >
        {isDark ? (
          <MdDarkMode className="text-black text-2xl" />
        ) : (
          <MdLightMode className="text-white text-2xl" />
        )}
      </button>
    </header>
  );
};

export default Header;
