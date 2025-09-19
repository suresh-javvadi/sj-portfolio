// components/PromptModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PromptModal = ({
  open,
  title,
  message,
  confirmText = "Yes",
  cancelText = "No",
  onConfirm,
  onCancel,
  backgroundColor = "var(--bg-main)",
  confirmButtonClass = "bg-[var(--bg-hlt)] hover:bg-[var(--bg-hlt-hover)]",
  cancelButtonClass = "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600",
  showCancel = true,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-[200]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="p-6 rounded-xl shadow-lg text-center max-w-sm w-full border border-[var(--border-main)]"
            style={{ backgroundColor }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {title && (
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {title}
              </h2>
            )}
            {message && (
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                {message}
              </p>
            )}

            <div className="flex gap-4 justify-center mt-4">
              <button
                onClick={onConfirm}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${confirmButtonClass}`}
              >
                {confirmText}
              </button>
              {showCancel && (
                <button
                  onClick={onCancel}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${cancelButtonClass}`}
                >
                  {cancelText}
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromptModal;
