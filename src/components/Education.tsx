// @ts-nocheck
import React, { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

interface DetailsProps {
  type: string;
  time: string;
  place: string;
  info: string[];
}

const Details: React.FC<DetailsProps> = ({ type, time, place, info }) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} time={time} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        {info.map((paragraph, index) => (
          <ul key={index} style={{ listStyleType: 'disc', paddingLeft: '1em' }}>
            <li className="font-medium w-full md:text-sm">{paragraph}</li>
          </ul>
        ))}
      </motion.div>
    </li>
  );
};

const Education: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mb-16">
        <h2
          onClick={toggleExpand}
          className="hover:text-purple-400 font-bold text-6xl mb-32 w-full text-center md:text-5xl xs:text-4xl md:mb-16 cursor-pointer"
        >
          Education
        </h2>
      {isExpanded && 
      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Master of Business Administration"
            time="2021-2023"
            place="McMaster University - Hamilton, ON, Canada"
            info={[
              "GPA 3.81/4.0",
              "Specialied in Buissness Analytics",
              "Deans Honour List for all semesters",
              "Completed coursework in advanced topics such as FinTech (BlockChains), Information System, Big Data and Data Mining, Data Visualization, and Machine Learning including Prescriptive Modelling and Predictive Modelling.",
            ]}
          />

          <Details
            type="Bchelor of Commerce"
            time="2013-2016"
            place="Concordia University - Montreal, QC, Canada"
            info={[
              "Major in Finance",
              "Builded Strong Presentation and Communication Skills",
              "The curriculum provided a comprehensive understanding of finance, marketing, management, and economics.",
              "Additionally, the program's rigorous coursework helped build a strong foundation in mathematics, equipping me with analytical and problem-solving skills essential for today's commercial sector."
            ]}
          />
        </ul>
      </div>}
    </div>
  );
};

export default Education;
