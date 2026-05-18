// @ts-nocheck
import React, { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";
import SectionCollapse from "@/components/SectionCollapse";

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
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleExpand();
            }
          }}
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
          className="hover:text-purple-400 mb-32 w-full cursor-pointer select-none text-center text-6xl font-bold md:mb-16 md:text-5xl xs:text-4xl"
        >
          Education
        </h2>
      <SectionCollapse open={isExpanded} panelKey="education" className="overflow-visible">
      <div ref={ref} className="relative mx-auto w-[75%] overflow-visible lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of Science in Computer Science"
            time="Sept. 2020 – March 2026"
            place="McMaster University, Faculty of Engineering — Hamilton, ON, Canada"
            info={[
              "Dean's Honour List (2020–2021)",
              "Compeleted Coursework in: Applied Machine Learning, Data Structures and Algorithms, Algorithms & Complexity, Concurrent Systems & Operating Systems Fundamentals, Relational Databases, and Introductory Artificial Intelligence"
            ]}
          />
        </ul>
      </div>
      </SectionCollapse>
    </div>
  );
};

export default Education;
