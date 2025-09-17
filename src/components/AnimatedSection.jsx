import { motion } from "framer-motion";
import React from "react";

const AnimatedSection = ({
  children,
  className = "",
  direction = "up",
  yOffset = 30,
  xOffset = 0,
  duration = 0.7,
  hoverScale = 1.03,
  tapScale = 0.97,
  stagger = 0.15,
  useViewport = false,
}) => {
  const offsets = {
    up: { x: 0, y: yOffset },
    down: { x: 0, y: -yOffset },
    left: { x: xOffset || -yOffset, y: 0 },
    right: { x: xOffset || yOffset, y: 0 },
  };

  const initialOffset = offsets[direction] || offsets.up;

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };

  const childVariants = {
    hidden: { opacity: 0, x: initialOffset.x, y: initialOffset.y, scale: 0.95 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 15, duration },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      {...(useViewport && {
        whileInView: "show",
        viewport: { once: true, amount: 0.3 },
      })}
    >
      {React.Children.map(children, (childElement, index) => (
        <motion.div
          key={index}
          variants={childVariants}
          whileHover={{ scale: hoverScale }}
          whileTap={{ scale: tapScale }}
        >
          {childElement}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedSection;
