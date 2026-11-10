import { motion } from "motion/react";
import { cn } from "../../lib/cn";

const variants = {
  primary: "bg-fg text-canvas hover:opacity-90",
  outline: "border border-border text-fg hover:border-fg",
  ghost: "text-fg-secondary hover:text-fg",
};

const tags = {
  button: motion.button,
  a: motion.a,
};

export default function Button({
  as = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const Tag = tags[as] ?? motion.button;

  return (
    <Tag
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
