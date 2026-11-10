import Reveal from "../animations/Reveal";
import { cn } from "../../lib/cn";

export default function SectionHeading({ eyebrow, title, description, align = "left", className = "" }) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <span className="mb-4 block text-xs font-medium tracking-[0.2em] text-accent uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-normal text-balance text-fg sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-fg-secondary sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
