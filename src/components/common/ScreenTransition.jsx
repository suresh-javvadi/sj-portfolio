import { AnimatePresence, motion } from "motion/react";

export default function ScreenTransition({ active }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[200]"
          style={{ backgroundColor: "color-mix(in srgb, var(--color-canvas) 80%, transparent)" }}
          initial={{ scale: 0, borderRadius: "50%" }}
          animate={{ scale: 3, borderRadius: "0%" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  );
}
