// @ts-nocheck
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

const Skill: React.FC<SkillProps> = ({ name, x, y }) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      whileHover={{scale:1.05}}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
      viewport={{ once: true }}
      className="cursor-pointer w-max origin-center absolute 
       font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
    >
      {name}
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const ref = useRef(null);
  return (
<>    
      <h2
        onClick={toggleExpand}
        className="hover:text-purple-400 font-bold text-6xl mb-32 w-full text-center md:text-5xl xs:text-4xl md:mb-16 cursor-pointer"
      >
        Core Competencies
      </h2>
      {isExpanded &&
    <div
      ref={ref}
      className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
      mb-64 md:mb-32 rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      "
    >
   
        <motion.div whileHover={{scale:1.05}} className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark
        dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
        ">
        Machine Learning
      </motion.div>
          {/* List all Machine Learning Topics */}
          <Skill name="Regression" x="-20vw" y="2vw" />
          <Skill name="Navie Bayes Classifier" x="-5vw" y="-10vw" />
          <Skill name="Random Forest" x="20vw" y="6vw" />
          <Skill name="K-means Clustering" x="0vw" y="12vw" />
          <Skill name="Neural Network" x="-20vw" y="-15vw" />
          <Skill name="Social Network" x="15vw" y="-12vw" />
          <Skill name="Association Rules" x="-35vw" y="-5vw" />
          <Skill name="Hyperoarameter Tuning" x="32vw" y="-5vw" />
          <Skill name="Feature Engineering" x="0vw" y="-20vw" />
          <Skill name="Exploratory Data Analysis" x="-25vw" y="18vw" />
          <Skill name="Principal Component Analysis" x="28vw" y="18vw" />
    </div>}</>
  );
};

export default Skills;
