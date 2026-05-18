import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import StarRatings from "react-star-ratings";
import { SiRubyonrails } from "react-icons/si";
import { HiSparkles } from "react-icons/hi2";
import SectionCollapse from "@/components/SectionCollapse";

interface SkillEntry {
  name: string;
  rating: number;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  /** Rotates primary vs primaryDark accents — matches site palette only */
  accent: "a" | "b" | "c" | "d";
  skills: SkillEntry[];
}

/** Flat border accent (no gradients) */
const accentBorder: Record<SkillCategory["accent"], string> = {
  a: "border-primary/40",
  b: "border-primaryDark/40",
  c: "border-primary/35",
  d: "border-primaryDark/35",
};

const accentDot: Record<SkillCategory["accent"], string> = {
  a: "bg-primary",
  b: "bg-primaryDark",
  c: "bg-primary",
  d: "bg-primaryDark",
};

const SkillRow: React.FC<{
  skill: SkillEntry;
  ratingKey: string;
}> = ({ skill, ratingKey }) => (
  <div className="flex items-center justify-between gap-3 border-b border-dark/10 py-2.5 last:border-0 dark:border-light/10">
    <span className="text-left text-base font-medium text-dark/85 dark:text-light/80 md:text-lg">
      {skill.name}
    </span>
    <StarRatings
      rating={skill.rating}
      starRatedColor="#B63E96"
      starEmptyColor="rgba(182, 62, 150, 0.22)"
      numberOfStars={5}
      name={ratingKey}
      starDimension="19px"
      starSpacing="4px"
    />
  </div>
);

const CategoryCard: React.FC<{
  data: SkillCategory;
  index: number;
}> = ({ data, index }) => {
  const border = accentBorder[data.accent];
  const dot = accentDot[data.accent];
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-32px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`rounded-2xl border-2 bg-light/90 p-5 shadow-sm dark:bg-dark/80 ${border} md:p-6`}
    >
      <div className="h-full">
        <div className="mb-4 flex items-center gap-3 border-b border-dark/10 pb-3 dark:border-light/10">
          <span
            className={`h-2.5 w-2.5 shrink-0 rounded-full ${dot}`}
            aria-hidden
          />
          <div>
            <h3 className="text-xl font-bold text-dark dark:text-light md:text-2xl">
              {data.title}
            </h3>
            <p className="mt-0.5 text-sm text-dark/55 dark:text-light/50 md:text-base">
              {data.subtitle}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          {data.skills.map((skill, i) => (
            <SkillRow
              key={skill.name}
              skill={skill}
              ratingKey={`cat-${index}-${i}-${skill.name.replace(/\s+/g, "-")}`}
            />
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const RateSkills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const categories: SkillCategory[] = [
    {
      title: "Languages & web stacks",
      subtitle: "From scripts to full-stack apps",
      accent: "a",
      skills: [
        { name: "Python", rating: 5 },
        { name: "SQL", rating: 5 },
        { name: "Ruby", rating: 4 },
        { name: "Ruby on Rails", rating: 4 },
        { name: "TypeScript / JavaScript", rating: 4 },
        { name: "Next.js & React", rating: 4 },
        { name: "R", rating: 5 },
        { name: "VBA", rating: 5 },
        { name: "DAX", rating: 4 },
        { name: "Tailwind CSS", rating: 4 },
      ],
    },
    {
      title: "AI & ML engineering",
      subtitle: "Models, GenAI patterns, and evaluation",
      accent: "b",
      skills: [
        { name: "LLMs, prompting & tooling", rating: 4 },
        { name: "RAG & embeddings", rating: 4 },
        { name: "Neural networks & deep learning", rating: 4 },
        { name: "Classification & regression", rating: 4 },
        { name: "Clustering & ensembles", rating: 4 },
        { name: "Feature engineering & tuning", rating: 4 },
        { name: "EDA & experimentation", rating: 5 },
      ],
    },
    {
      title: "Data & databases",
      subtitle: "Storage, warehouses, and modeling",
      accent: "c",
      skills: [
        { name: "PostgreSQL", rating: 4 },
        { name: "MySQL / MariaDB", rating: 5 },
        { name: "SQLite", rating: 4 },
        { name: "IBM DB2", rating: 4 },
        { name: "MongoDB", rating: 3 },
        { name: "Snowflake", rating: 4 },
      ],
    },
    {
      title: "Platforms & delivery",
      subtitle: "Notebooks, BI, and the cloud edge",
      accent: "d",
      skills: [
        { name: "Jupyter Notebook", rating: 5 },
        { name: "GitHub", rating: 5 },
        { name: "Databricks", rating: 4 },
        { name: "Power BI", rating: 4 },
        { name: "Salesforce", rating: 4 },
        { name: "SAP", rating: 3 },
      ],
    },
  ];

  return (
    <div className="mt-0">
      <h2
        onClick={() => setIsExpanded((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsExpanded((v) => !v);
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        className="xs:text-4xl mb-10 w-full cursor-pointer select-none text-center text-7xl font-bold text-dark transition-colors hover:text-primary dark:text-light dark:hover:text-primaryDark md:mb-12 md:text-5xl"
      >
        Skills
      </h2>

      <SectionCollapse open={isExpanded} panelKey="rate-skills">
        <div
          ref={ref}
          className="relative mx-auto w-[75%] lg:w-[90%] md:w-full"
        >
          
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-4">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-primary/30 bg-light/90 p-5 shadow-sm dark:bg-dark/75"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-2xl text-primary dark:text-primary">
                  <SiRubyonrails aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary dark:text-primaryDark">
                    Backend craft
                  </p>
                  <p className="font-bold text-dark dark:text-light">
                    Ruby on Rails
                  </p>
                </div>
              </div>
              <p className="mt-3 text-base leading-relaxed text-dark/75 dark:text-light/70 md:text-[1.05rem]">
                MVC apps, APIs, and shipping server-side features with clarity—
                <span className="font-medium text-primary dark:text-primaryDark">
                  {" "}
                  convention over configuration
                </span>
                , still my vibe.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-primaryDark/35 bg-light/90 p-5 shadow-sm dark:bg-dark/75"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primaryDark/20 text-2xl text-primaryDark dark:text-primaryDark">
                  <HiSparkles aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary dark:text-primaryDark">
                    Intelligence layer
                  </p>
                  <p className="font-bold text-dark dark:text-light">
                    AI engineering
                  </p>
                </div>
              </div>
              <p className="mt-3 text-base leading-relaxed text-dark/75 dark:text-light/70 md:text-[1.05rem]">
                Pipelines, models, and{" "}
                <span className="font-medium text-primary dark:text-primaryDark">
                  LLM + RAG
                </span>{" "}
                workflows—built to be measured, not just demoed.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-1 md:gap-5">
            {categories.map((cat, index) => (
              <CategoryCard key={cat.title} data={cat} index={index} />
            ))}
          </div>
        </div>
      </SectionCollapse>
    </div>
  );
};

export default RateSkills;
