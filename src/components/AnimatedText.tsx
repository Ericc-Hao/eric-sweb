// @ts-nocheck
import { motion, Variants } from "framer-motion";
import React from "react";

const quote: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  return (
    <div className="py-2 w-full mx-auto flex flex-col items-center justify-center  text-center  
    overflow-hidden sm:py-0">
      {/* @ts-ignore */}
      <motion.div
        className={`inline-block text-dark dark:text-light
      text-8xl font-bold w-full capitalize  ${className} xl:text-6xl`}
        variants={quote}
        initial="hidden"
        animate="visible"
      >
        {text.split(" ").map((char, index) => {
          return (
            <motion.span
              className="inline-block"
              key={char + "-" + index}
              variants={singleWord}
            >
              {char}&nbsp;
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AnimatedText;
