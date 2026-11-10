import { motion, useReducedMotion } from "motion/react";
import { staggerContainer } from "./variants";

export default function StaggerContainer({ children, className = "", once = true }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
