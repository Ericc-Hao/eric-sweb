// @ts-nocheck
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";
import SectionCollapse from "@/components/SectionCollapse";

interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string[];
}

const Details: React.FC<DetailsProps> = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} time={time} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        {work.map((paragraph, index) => (
          <ul key={index} style={{ listStyleType: 'disc', paddingLeft: '1em' }}>
            <li className="font-medium w-full md:text-sm">{paragraph}</li>
          </ul>
        ))}
      </motion.div>
    </li>
  );
};

const Experience: React.FC = () => {

  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
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
          Experience
        </h2>
        <SectionCollapse open={isExpanded} panelKey="experience" className="overflow-visible">
        <div ref={ref} className="relative mx-auto w-[75%] overflow-visible lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            {/* Air Canada */}
            <Details
              position="Data Analyst, Paid Media, Marketing"
              company="Air Canada"
              companyLink="https://www.aircanada.com/ca/en/aco/home/about.html#/"
              time="May 2023 - Present"
              address="Toronto, ON, Canada."
              work={[
                <>
                  Provided actionable insights by deep-diving post-campaign data and shaped future marketing strategies by implementing <strong>regression models</strong> in performance trend analyses.
                </>,
                <>
                  Created and maintained Data Warehouse with <strong>SnowFlake</strong> and automated data <strong>ETL pipelines</strong> using <strong>Dataiku</strong>; leveraged <strong>SQL, Python, and BI tools</strong> for data manipulation and solution delivery, while utilizing platforms like Google Ads, DV360, and <strong>Adobe Analytics</strong> for Business.
                </>,
                <>
                  Improved digital media activities and reporting by creating and maintaining <strong>performance dashboards</strong>, incorporating various data sources, and employing Power BI for reporting development
                </>
              ]}
            />
            {/* Unilever */}
            <Details
              position="Data Analyst, Intern"
              company="Unilever"
              companyLink="https://www.unilever.ca/"
              time="May 2022 - Decmeber 2022"
              address="Toronto, ON, Canada."
              work={[
                <>
                  Processed and analyzed ice-cream sales data from retail stores and online platforms to deliver feasible <strong>marketing strategies</strong> based on <strong>store profiling</strong>.
                </>,
                <>
                  Conducted <strong>data cleaning</strong> and <strong>transformation</strong> using <strong>Excel advanced formulas;</strong> Performed <strong>exploratory data analysis (EDA)</strong> to understand the demographic of target clients with <strong>Matplotlib.</strong>
                </>,
                <>
                  Implemented <strong>K-means Cluster Analysis</strong> using <strong>Scikit-Learn</strong> to generate retail store profiles for products; Applied <strong>feature selection (PCA)</strong> for better understanding of the key variables.
                </>,
                <>
                  Automated monthly sales reports by <strong>VBA programming</strong>, identifying <strong>key performance indicators (KPIs)</strong>; reduced manual intervention 90%.
                </>,
                <>
                  Led <strong>PostgreSQL database</strong> structure design and engineering, improving space efficiency by 70%.
                </>,
                <>
                  Communicated with cross-departmental teams on weekly basis to improve the quality of deliverables; built and 
                  maintained interactive <strong>dashboards in Power BI</strong> and presented to senior executives.
                </>,
              ]}
            />

            {/* Western Securities */}
            <Details
              position="Data Analyst, Internet Finance Department"
              company="Western Securities"
              companyLink="http://www.westsecu.com/xbyw/jbqk.html"
              time="May 2019 - September 2021"
              address="Shanghai, China."
              work={[
                <>
                  Generated valuable insights on the sale strategies of investment products by analyzing clients’ profile and behaviors; Built a large-scale predictive ML model from end to end, covering <strong>data wrangling, feature engineering, model tuning.</strong>
                </>,
                <>
                  Performed <strong>exploratory data analysis (EDA)</strong> on <strong>Pandas Dataframe</strong> to understand client’s demographics, past behavior, and other related information (e.g. investment goals, risk appetite, etc.).
                </>,
                <>
                  Applied <strong>decision tree model</strong> to predict which investment products are most likely to appeal to target customers. Model achieved 87.53% accuracy with <strong>hyperparameter tuning.</strong>
                </>,
                <>
                  Wrote monthly strategy reports and set up regular meetings with clients to formulate financial plans; Leverage information from above research to improve sale strategy; exceeded sales goals by 10% each quarter on average.
                </>,
              ]}
            />
          </ul>
        </div>
        </SectionCollapse>
        </div>
    );
};

export default Experience;
