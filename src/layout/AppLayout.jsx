import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import ProfileCard from "../components/ProfileCard";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { Maximize2, Minimize2 } from "lucide-react";
import useIsMobile from "@/hooks/useIsMobile";
import ScreenAnimation from "../components/ScreenAnimation";

const AppLayout = () => {
  const isMobile = useIsMobile();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () =>
      setIsFullScreen(Boolean(document.fullscreenElement));

    const handleDoubleClick = async () => {
      await handleFullscreenToggle();
    };

    document.addEventListener("dblclick", handleDoubleClick);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("dblclick", handleDoubleClick);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleFullscreenToggle = async () => {
    setIsAnimating(true);

    setTimeout(async () => {
      try {
        if (!document.fullscreenElement)
          await document.documentElement.requestFullscreen();
        else await document.exitFullscreen();
      } catch (err) {
        console.error("Fullscreen toggle failed:", err);
      } finally {
        setIsAnimating(false);
      }
    }, 300);
  };

  return (
    <>
      <ScreenAnimation
        active={isAnimating}
        color="var(--bg-main)"
        duration={0.4}
      />

      <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] py-6 md:py-8 md:px-10">
        <Header
          isMobile={isMobile}
          isFullScreen={isFullScreen}
          toggleFullscreen={handleFullscreenToggle}
        />

        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-start gap-6 mt-6">
          <div className="w-full max-w-xs md:w-auto">
            <ProfileCard />
          </div>

          <main className="w-full md:flex-1 px-4 md:px-10 pb-10 md:pb-0">
            <Outlet />
          </main>

          <div className="w-full max-w-xs md:w-auto mt-4 md:mt-0">
            <NavBar />
          </div>
        </div>

        {!isMobile && (
          <button
            onClick={handleFullscreenToggle}
            className="fixed bottom-4 right-4 p-2 rounded-full bg-[#B7A261] text-white shadow-lg hover:scale-105 transition flex items-center justify-center z-50"
            title="Toggle Fullscreen"
          >
            {isFullScreen ? (
              <Minimize2 className="w-6 h-6" />
            ) : (
              <Maximize2 className="w-6 h-6" />
            )}
          </button>
        )}
      </div>
    </>
  );
};

export default AppLayout;
