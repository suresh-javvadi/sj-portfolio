import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScreenAnimation = ({
  active,
  color = "var(--bg-main)",
  opacity = 0.8,
  duration = 0.5,
  onComplete,
}) => {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[150]"
          style={{
            backgroundColor: `color-mix(in srgb, ${color} ${
              opacity * 100
            }%, transparent)`,
          }}
          initial={{ scale: 0, borderRadius: "50%" }}
          animate={{ scale: 3, borderRadius: "0%" }}
          exit={{ opacity: 0 }}
          transition={{ duration, ease: "easeInOut" }}
          onAnimationComplete={onComplete}
        />
      )}
    </AnimatePresence>
  );
};

export default ScreenAnimation;
