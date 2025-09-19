import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScreenAnimation from "./ScreenAnimation";
import PromptModal from "./PromptModal";

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
      setAnimating(false);
    }, 300);
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

      <PromptModal
        open={showPrompt}
        title="Go Fullscreen?"
        message="For the best experience, we recommend fullscreen mode."
        confirmText="Yes"
        cancelText="No"
        onConfirm={enterFullScreen}
        onCancel={skipFullScreen}
        backgroundColor="var(--bg-main)"
        confirmButtonClass="bg-[var(--bg-hlt)] hover:bg-[var(--bg-hlt-hover)]"
        cancelButtonClass="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
      />

      <ScreenAnimation
        active={animating}
        color="var(--bg-main)"
        duration={0.5}
      />

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
