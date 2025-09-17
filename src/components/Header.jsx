import React from "react";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-30 pb-6">
      <h1 className="text-3xl font-bold text-[#9D8640]">SJ Portfolio</h1>
      <AnimatedThemeToggler className="p-2 rounded-full bg-[#B7A261] hover:scale-105 transition" />
    </header>
  );
};

export default Header;
