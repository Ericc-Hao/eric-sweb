import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionCollapse from "@/components/SectionCollapse";

interface QualificationCard {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
}

const qualificationCards: QualificationCard[] = [
  {
    eyebrow: "Full-stack engineering",
    title: "Scalable product development",
    description:
      "Hands-on experience building scalable web applications across frontend, backend, database, and cloud infrastructure.",
    points: ["Frontend + backend", "Database systems", "Cloud deployment"],
  },
  {
    eyebrow: "IBM Skills Network",
    title: "Education technology platforms",
    description:
      "Contributed to online learning platforms, course authoring tools, file management, transcription workflows, and intelligent content delivery.",
    points: ["Course authoring", "Learning platforms", "Content systems"],
  },
  {
    eyebrow: "AI-powered workflows",
    title: "Intelligent learning systems",
    description:
      "Experienced with embeddings, similarity search, transcription, content retrieval, and domain-specific knowledge systems.",
    points: ["Embeddings", "Similarity search", "Knowledge retrieval"],
  },
  {
    eyebrow: "Technical stack",
    title: "Modern software tooling",
    description:
      "Skilled with React, Next.js, Ruby on Rails, Spring Boot, Python, PostgreSQL, Redis, Docker, Kubernetes, Tailwind CSS, and cloud workflows.",
    points: ["React / Next.js", "Rails / Spring Boot", "Docker / Kubernetes"],
  },
  {
    eyebrow: "Product mindset",
    title: "Zero-to-one builder",
    description:
      "Entrepreneurial engineer focused on turning ideas into practical products that create real user value.",
    points: ["Requirement analysis", "System design", "User-centered products"],
  },
  {
    eyebrow: "Communication",
    title: "Teaching & technical clarity",
    description:
      "Able to explain complex technical concepts clearly, supported by teaching assistant experience in advanced algorithms at McMaster University.",
    points: ["Advanced algorithms", "Documentation", "Stakeholder communication"],
  },
];

const summaryStats = [
  { value: "IBM", label: "skills network" },
  { value: "AI", label: "assisted systems" },
  { value: "SaaS", label: "product mindset" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.06 },
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

const HighlightOfQualification = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="my-0">
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
        className="xs:text-4xl mb-10 w-full cursor-pointer select-none text-center text-7xl font-bold transition-colors hover:text-primary dark:hover:text-primaryDark md:mb-12 md:text-5xl"
      >
        Highlight of Qualifications
      </h2>
      <SectionCollapse open={isExpanded} panelKey="highlights">
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="relative mx-auto w-full max-w-6xl"
        >
          <div className="pointer-events-none absolute -left-10 top-6 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />

          <motion.div
            variants={item}
            className="relative grid grid-cols-[1.2fr_0.8fr] gap-8 border-b border-primary/20 pb-8 lg:grid-cols-1"
          >
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                Why I stand out
              </p>
              <h3 className="mt-3 font-mont text-2xl font-bold text-dark dark:text-light md:text-3xl">
                I build full-stack products at the intersection of AI, SaaS, and education technology.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-dark/65 dark:text-light/58 md:text-base">
                My strongest qualification is the ability to move across technical and product
                responsibilities—from requirements and system design to implementation, debugging,
                deployment, documentation, and stakeholder communication.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 self-end sm:grid-cols-1 sm:gap-4">
              {summaryStats.map((stat) => (
                <div
                  key={stat.value}
                  className="border-l-2 border-primary/45 pl-4"
                >
                  <span className="text-3xl font-bold text-primary">{stat.value}</span>
                  <span className="mt-2 block text-xs font-medium uppercase tracking-wider text-dark/50 dark:text-light/45">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative mt-8 grid grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-1">
            {qualificationCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  variants={item}
                  className="group border-b border-dark/10 pb-7 transition-colors hover:border-primary/50 dark:border-light/12"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-primary/25" />
                  </div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
                    {card.eyebrow}
                  </p>
                  <h4 className="mt-2 text-xl font-bold text-dark dark:text-light">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-dark/65 dark:text-light/58">
                    {card.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {card.points.map((point) => (
                      <li key={point}>
                        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:bg-primary/15">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
          </div>
        </motion.section>
      </SectionCollapse>
    </div>
  );
};

export default HighlightOfQualification;
