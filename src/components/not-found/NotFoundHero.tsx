import {
  ArrowRightIcon,
  HomeIcon,
  NewspaperIcon,
  RectangleGroupIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import React from "react";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const NotFoundHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="relative overflow-hidden rounded-2xl border border-dark/10 bg-light/80 p-10 text-left shadow-3xl backdrop-blur dark:border-light/10 dark:bg-dark/80 md:p-8 sm:p-6"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
    >
      <div className="relative">
        <motion.p
          className="mb-3 inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:border-primaryDark/30 dark:bg-primaryDark/15 dark:text-primaryDark"
          variants={itemVariants}
        >
          <NewspaperIcon className="h-4 w-4" />
          404 not found
        </motion.p>

        <motion.h1
          className="mb-2 select-none text-[clamp(4.8rem,15vw,8.5rem)] font-black leading-none tracking-tighter"
          aria-label="404 Not Found"
          variants={itemVariants}
          animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={{
            duration: 3.5,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="bg-gradient-to-r from-primary via-primaryDark to-primary bg-[length:220%_auto] bg-clip-text text-transparent">
            404
          </span>
        </motion.h1>

        <motion.h2
          className="mb-4 text-2xl font-bold text-dark dark:text-light md:text-3xl"
          variants={itemVariants}
        >
          This page went exploring.
        </motion.h2>

        <motion.p
          className="mb-8 max-w-2xl text-base text-dark/75 dark:text-light/75 md:text-lg"
          variants={itemVariants}
        >
          The link you opened does not exist yet, but your next stop is probably one of
          these highlights.
        </motion.p>

        <motion.div className="mb-8 flex flex-wrap gap-2" variants={itemVariants}>
          <span className="inline-flex items-center gap-2 rounded-md border border-dark/10 bg-light px-3 py-1.5 text-sm text-dark/75 dark:border-light/15 dark:bg-dark dark:text-light/75">
            <RectangleGroupIcon className="h-4 w-4" />
            Portfolio
          </span>
          <span className="inline-flex items-center gap-2 rounded-md border border-dark/10 bg-light px-3 py-1.5 text-sm text-dark/75 dark:border-light/15 dark:bg-dark dark:text-light/75">
            <Squares2X2Icon className="h-4 w-4" />
            Projects
          </span>
          <span className="inline-flex items-center gap-2 rounded-md border border-dark/10 bg-light px-3 py-1.5 text-sm text-dark/75 dark:border-light/15 dark:bg-dark dark:text-light/75">
            <NewspaperIcon className="h-4 w-4" />
            Articles
          </span>
        </motion.div>

        <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-solid border-dark bg-dark px-8 py-3.5 text-base font-bold text-light transition-colors hover:border-primaryDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-light dark:bg-light dark:text-dark dark:hover:border-primary"
          >
            <HomeIcon className="h-5 w-5" />
            <span>Back to home</span>
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-dark/20 px-6 py-3.5 text-base font-semibold text-dark transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-light/25 dark:text-light dark:hover:border-primaryDark dark:hover:text-primaryDark"
          >
            <span>View projects</span>
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NotFoundHero;
