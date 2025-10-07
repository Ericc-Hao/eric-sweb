import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";
import StarRatings from 'react-star-ratings';

const Skill = ({ name, rating }) => (
  <div className="flex justify-between items-center mb-2">
    <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
      {name}
    </span>
    <StarRatings
      rating={rating}
      starRatedColor="orange"
      numberOfStars={5}
      name='rating'
      starDimension="20px"
      starSpacing="5px"
    />
  </div>
);

const Category = ({ category, skills }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {category}
        </h3>
        {skills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </motion.div>
    </li>
  );
};

const RateSkills = () => {
  const ref = useRef(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const skills = [
    {
      category: "Programming Languages",
      skills: [
        { name: 'Python', rating: 5 },
        { name: 'SQL', rating: 5 },
        { name: 'VBA', rating: 5 },
        { name: 'R', rating: 5 },
        { name: 'DAX', rating: 4 },
        { name: 'Javascript', rating: 4 },
        { name: 'Next.js', rating: 4 },
        { name: 'Taliwindcss', rating: 4 },
      ],
    },
    {
      category: "Database Systems",
      skills: [
        { name: 'MySQL', rating: 5 },
        { name: 'MariaDB', rating: 4 },
        { name: 'SQLite', rating: 4 },
        { name: 'IBM DB2', rating: 4 },
        { name: 'PostgreSQL', rating: 4 },
        { name: 'MongoDB', rating: 3 },
      ],
    },
    {
      category: "Platforms & Tools",
      skills: [
        { name: 'Jupyter Notebook', rating: 5 },
        { name: 'GitHub', rating: 5 },
        { name: 'Databricks', rating: 4 },
        { name: 'SnowFlake', rating: 4 },
        { name: 'PowerBI', rating: 4 },
        { name: 'Salesforce', rating: 4 },
        { name: 'SAP', rating: 3 },
      ],
    },
    {
      category: "Machine Learning",
      skills: [
        { name: 'Classification', rating: 4 },
        { name: 'Regression', rating: 4 },
        { name: 'Clustering', rating: 4 },
        { name: 'Ensemble Learning', rating: 4 },
      ],
    },
  ];  

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-64">
      <h2
        onClick={toggleExpand}
        className="hover:text-purple-400 font-bold text-6xl mb-32 w-full text-center md:text-5xl xs:text-4xl md:mb-16 cursor-pointer"
      >
        Skills
      </h2>
      {isExpanded &&
        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            {skills.map((category, index) => (
              <Category key={index} {...category} />
            ))}
          </ul>
        </div>
      }
    </div>
  );
};

export default RateSkills;
