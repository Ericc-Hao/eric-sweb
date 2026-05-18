import React, { useState } from "react";
import SectionCollapse from "@/components/SectionCollapse";

const qualifications: string[] = [
  "Possesses comprehensive knowledge of a wide array of computer science concepts, encompassing areas such as algorithms, data structures, information systems, and database systems.",
  "Proficient in several programming languages, including but not limited to Python, SQL, VBA, and R, with a readiness to explore others such as Java and C++.",
  "Solid expertise in machine learning and artificial intelligence, reinforced by the practical application of various algorithms in diverse business settings.",
  "Valuable research experience acquired through participation in independent projects during MBA program and professional tenure, employing rigorous methodologies to generate insights.",
  "Exceptional problem-solving capabilities demonstrated in dealing with intricate technical and business issues, using analytical and detail-oriented approaches.",
  "Strong academic record indicative of the ability to manage demanding academic programs, demonstrated by successful completion of an MBA specializing in Business Analytics and a Bachelor of Commerce degree with a major in Finance.",
  "Excellent team collaboration skills proven by experience in group projects, team leadership, and working within cross-functional teams to attain common objectives.",
  "Quick to adapt to new technologies, programming languages, and fast-evolving trends in computer science and data analysis, showcasing a continuous learning attitude.",
  "Superb communication skills enabling effective conveyance of complex technical concepts to a wide array of audiences, including non-technical team members and stakeholders.",
];

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
        <div className="mx-auto w-[70%] lg:w-[90%] md:w-full">
          <div className="relative">
            <ul className="list-none space-y-14 pl-5 md:space-y-16">
              {qualifications.map((qualification, index) => (
                <li key={index} className="group relative">
                  <div className="relative flex items-center gap-10 md:gap-14">
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-gray-200 bg-gray-400 ring-4 ring-gray-200 ring-opacity-30 group-hover:bg-primary/40 dark:border-light/20 dark:bg-light/40 dark:ring-light/10" />
                    <div className="min-w-0 flex-1 -m-3">
                      <div className="text-xl font-medium leading-relaxed text-dark/90 dark:text-light/85 md:text-2xl">
                        {qualification}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionCollapse>
    </div>
  );
};

export default HighlightOfQualification;
