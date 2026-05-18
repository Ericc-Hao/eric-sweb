import { motion } from "framer-motion";
import React, { useState } from "react";
import SectionCollapse from "@/components/SectionCollapse";

interface SkillGroup {
  title: string;
  summary: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Software Engineering",
    summary: "Building reliable product experiences from interface to backend.",
    skills: ["React / Next.js", "Ruby on Rails", "TypeScript", "APIs", "Tailwind CSS"],
  },
  {
    title: "AI & Machine Learning",
    summary: "Turning models and AI workflows into measurable product value.",
    skills: ["LLM + RAG", "Regression", "Random Forest", "Neural Networks", "Evaluation"],
  },
  {
    title: "Data & Analytics",
    summary: "Designing data workflows that support decisions and storytelling.",
    skills: ["Python", "SQL", "Power BI", "Databricks", "EDA"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
};

const Skills: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <h2
        onClick={toggleExpand}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleExpand();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        className="xs:text-4xl mb-10 w-full cursor-pointer select-none text-center text-7xl font-bold text-dark transition-colors hover:text-primary dark:text-light dark:hover:text-primary md:mb-12 md:text-5xl"
      >
        Core competencies
      </h2>
      <SectionCollapse open={isExpanded} panelKey="skills-core">
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mx-auto mb-20 w-full max-w-6xl md:mb-28"
        >
          <motion.div
            variants={item}
            className="grid grid-cols-[0.85fr_1.15fr] gap-12 border-y border-primary/20 py-10 lg:grid-cols-1 lg:gap-8"
          >
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                Skill system
              </p>
              <h3 className="mt-3 font-mont text-2xl font-bold text-dark dark:text-light md:text-3xl">
                Skills that connect building, modeling, and decision-making.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-dark/65 dark:text-light/58 md:text-base">
                I prefer a practical stack: tools that help me ship usable software, apply AI
                thoughtfully, and explain outcomes clearly.
              </p>
            </div>

            <div className="space-y-8">
              {skillGroups.map((group, index) => (
                <motion.article
                  key={group.title}
                  variants={item}
                  className="grid grid-cols-[auto_1fr] gap-5 border-b border-dark/10 pb-7 last:border-b-0 last:pb-0 dark:border-light/12 sm:grid-cols-1 sm:gap-3"
                >
                  <span className="font-mono text-lg font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold text-dark dark:text-light">
                      {group.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-dark/62 dark:text-light/55">
                      {group.summary}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li key={skill}>
                          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:bg-primary/15">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 text-center text-sm text-dark/55 dark:text-light/45"
          >
            The goal is not a long tool list, but a focused system for building useful AI-enabled
            products.
          </motion.p>
        </motion.section>
      </SectionCollapse>
    </>
  );
};

export default Skills;
