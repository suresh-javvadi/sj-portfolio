import { Blocks, Database, Server, Wrench } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import Container from "../components/common/Container";
import StaggerContainer from "../components/animations/StaggerContainer";
import { staggerItem } from "../components/animations/variants";
import { motion } from "motion/react";
import { skillCategories } from "../data/skills";

const ICONS = {
  Frontend: Blocks,
  Backend: Server,
  Database: Database,
  "Tools & Infrastructure": Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Skills" title="Tools I use to turn ideas into products." />

        <StaggerContainer className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = ICONS[category.label] ?? Blocks;
            return (
              <motion.div
                key={category.label}
                variants={staggerItem}
                className="bg-surface p-8"
              >
                <div className="mb-5 flex items-center gap-3">
                  <Icon size={18} strokeWidth={1.5} className="text-accent" />
                  <h3 className="text-base font-medium text-fg">{category.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3 py-1.5 text-sm text-fg-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
