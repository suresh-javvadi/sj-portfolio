import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FullScreenWrapper = ({ children }) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const savedChoice = localStorage.getItem("fullscreenChoice");
    if (!savedChoice || savedChoice === "no") setShowPrompt(true);

    const timer = setTimeout(() => setIsReady(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const enterFullScreen = async () => {
    setShowPrompt(false);
    setAnimating(true);

    setTimeout(async () => {
      try {
        setIsTransitioning(true);

        const elem = document.documentElement;
        if (elem.requestFullscreen) await elem.requestFullscreen();
        else if (elem.webkitRequestFullscreen)
          await elem.webkitRequestFullscreen();
        else if (elem.msRequestFullscreen) await elem.msRequestFullscreen();

        setTimeout(() => setIsTransitioning(false), 150);
      } catch (err) {
        console.log("Fullscreen request failed:", err);
        setIsTransitioning(false);
      }

      localStorage.setItem("fullscreenChoice", "yes");
      setShowPrompt(false);
      setAnimating(false);
    }, 500);
  };

  const skipFullScreen = () => {
    localStorage.setItem("fullscreenChoice", "no");
    setShowPrompt(false);
  };

  return (
    <>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 bg-black z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPrompt && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[var(--bg-main)] p-6 rounded-xl shadow-lg text-center max-w-sm w-full border border-[var(--border-main)]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                Go Fullscreen?
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                For the best experience, we recommend fullscreen mode.
              </p>
              <div className="flex gap-4 justify-center mt-4">
                <button
                  onClick={enterFullScreen}
                  className="bg-[var(--bg-hlt)] hover:bg-[var(--bg-hlt-hover)] px-4 py-2 rounded-lg transition-all duration-200"
                >
                  Yes
                </button>
                <button
                  onClick={skipFullScreen}
                  className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 px-4 py-2 rounded-lg transition-all duration-200"
                >
                  No
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {animating && (
          <motion.div
            className="fixed inset-0 bg-[var(--bg-main)]/80 z-[150]"
            initial={{ scale: 0, borderRadius: "50%" }}
            animate={{ scale: 3, borderRadius: "0%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: isReady ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default FullScreenWrapper;
