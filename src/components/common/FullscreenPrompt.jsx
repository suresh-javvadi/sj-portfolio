import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Maximize } from "lucide-react";
import { useFullscreen } from "../../context/FullscreenContext";

const STORAGE_KEY = "fullscreenPromptChoice";

function shouldPrompt() {
  if (!document.documentElement.requestFullscreen) return false;
  return !localStorage.getItem(STORAGE_KEY);
}

export default function FullscreenPrompt() {
  const [open, setOpen] = useState(shouldPrompt);
  const { enterFullscreen } = useFullscreen();

  const handleConfirm = () => {
    localStorage.setItem(STORAGE_KEY, "yes");
    setOpen(false);
    enterFullscreen();
  };

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, "no");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-canvas/70 px-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="w-full max-w-sm rounded-2xl border border-border bg-surface p-6 text-center shadow-xl"
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border text-accent">
              <Maximize size={18} strokeWidth={1.75} />
            </div>
            <h2 className="font-display text-xl text-fg">Enter full screen?</h2>
            <p className="mt-2 text-sm text-fg-secondary">
              For the best viewing experience, this site looks great in full screen mode.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                onClick={handleDismiss}
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg-secondary transition-colors duration-200 hover:border-fg hover:text-fg"
              >
                Not now
              </button>
              <button
                type="button"
                onClick={handleConfirm}
                className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-canvas transition-transform duration-200 hover:-translate-y-0.5"
              >
                Go full screen
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
