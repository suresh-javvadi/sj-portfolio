import { Maximize, Minimize } from "lucide-react";
import { useFullscreen } from "../../context/FullscreenContext";

export default function FullscreenToggle({ className = "" }) {
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  if (typeof document !== "undefined" && !document.documentElement.requestFullscreen) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={toggleFullscreen}
      aria-label={isFullscreen ? "Exit full screen" : "Enter full screen"}
      aria-pressed={isFullscreen}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-secondary transition-colors duration-200 hover:border-fg hover:text-fg ${className}`}
    >
      {isFullscreen ? <Minimize size={16} strokeWidth={1.75} /> : <Maximize size={16} strokeWidth={1.75} />}
    </button>
  );
}
