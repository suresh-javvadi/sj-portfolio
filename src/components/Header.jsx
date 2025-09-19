import React from "react";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { Maximize2, Minimize2 } from "lucide-react";

const Header = ({ isMobile, isFullScreen, toggleFullscreen }) => {
  return (
    <header className="flex justify-between items-center w-full py-2 px-8 sm:px-12 lg:px-30 gap-4 sm:gap-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#9D8640] text-center sm:text-left">
        SJ Portfolio
      </h1>

      <div className="flex items-center gap-3">
        <AnimatedThemeToggler className="p-2 rounded-full bg-[#B7A261] hover:scale-105 transition" />

        {isMobile && (
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full bg-[#B7A261] hover:scale-105 transition"
            title={isFullScreen ? "Exit Fullscreen" : "Go Fullscreen"}
          >
            {isFullScreen ? (
              <Minimize2 className="w-5 h-5 text-white" />
            ) : (
              <Maximize2 className="w-5 h-5 text-white" />
            )}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
