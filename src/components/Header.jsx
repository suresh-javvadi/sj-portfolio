import React from "react";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full py-2 px-8 sm:px-12 lg:px-30 gap-4 sm:gap-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#9D8640] text-center sm:text-left">
        SJ Portfolio
      </h1>
      <AnimatedThemeToggler className="p-2 rounded-full bg-[#B7A261] hover:scale-105 transition" />
    </header>
  );
};

export default Header;
