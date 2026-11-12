import { createContext, useContext, useEffect, useState } from "react";
import ScreenTransition from "../components/common/ScreenTransition";

const FullscreenContext = createContext(null);

export function FullscreenProvider({ children }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const runWithTransition = (action) => {
    setIsAnimating(true);
    window.setTimeout(async () => {
      try {
        await action();
      } catch {
        // fullscreen request denied or unsupported - ignore
      }
      window.setTimeout(() => setIsAnimating(false), 150);
    }, 250);
  };

  const enterFullscreen = () => runWithTransition(() => document.documentElement.requestFullscreen());
  const exitFullscreen = () => runWithTransition(() => document.exitFullscreen());
  const toggleFullscreen = () => (document.fullscreenElement ? exitFullscreen() : enterFullscreen());

  return (
    <FullscreenContext.Provider value={{ isFullscreen, enterFullscreen, exitFullscreen, toggleFullscreen }}>
      {children}
      <ScreenTransition active={isAnimating} />
    </FullscreenContext.Provider>
  );
}

export function useFullscreen() {
  const ctx = useContext(FullscreenContext);
  if (!ctx) throw new Error("useFullscreen must be used within FullscreenProvider");
  return ctx;
}
