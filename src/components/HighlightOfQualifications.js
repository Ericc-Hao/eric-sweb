import React, { useState } from "react";

const HighlightOfQualification = () => {

  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const qualifications = [
    "Possesses comprehensive knowledge of a wide array of computer science concepts, encompassing areas such as algorithms, data structures, information systems, and database systems.",
    "Proficient in several programming languages, including but not limited to Python, SQL, VBA, and R, with a readiness to explore others such as Java and C++.",
    "Solid expertise in machine learning and artificial intelligence, reinforced by the practical application of various algorithms in diverse business settings.",
    "Valuable research experience acquired through participation in independent projects during MBA program and professional tenure, employing rigorous methodologies to generate insights.",
    "Exceptional problem-solving capabilities demonstrated in dealing with intricate technical and business issues, using analytical and detail-oriented approaches.",
    "Strong academic record indicative of the ability to manage demanding academic programs, demonstrated by successful completion of an MBA specializing in Business Analytics and a Bachelor of Commerce degree with a major in Finance.",
    "Excellent team collaboration skills proven by experience in group projects, team leadership, and working within cross-functional teams to attain common objectives.",
    "Quick to adapt to new technologies, programming languages, and fast-evolving trends in computer science and data analysis, showcasing a continuous learning attitude.",
    "Superb communication skills enabling effective conveyance of complex technical concepts to a wide array of audiences, including non-technical team members and stakeholders."
  ];
  

  return (
    <div className="my-16">
      <h2
        onClick={toggleExpand}
        className="hover:text-purple-400 font-bold text-6xl mb-32 w-full text-center md:text-5xl xs:text-4xl md:mb-16 cursor-pointer"
      >
        Highlight of Qualifications
      </h2>
      {isExpanded && 
      <div className="w-[70%] mx-auto lg:w-[90%] md:w-full">
        <div className="relative">
          <ul className="list-none pl-5 space-y-12">
              {qualifications.map((qualification, index) => (
              <li key={index} className="relative group">
                <div className="relative flex space-x-14 items-start">
                    <div className="rounded-full h-4 w-4 flex items-center bg-gray-400 group-hover:bg-green-300 ring-4 ring-gray-200 border-gray-200 ring-opacity-30"></div>
                  <div className="min-w-0 flex-1 flex justify-between space-x-3 -m-3">
                    <div className="text-2xl font-medium">
                      {qualification}
                    </div>
                  </div>
                </div>
              </li>
              ))}
          </ul>
        </div>
      </div>
      }
    </div>
  );
};

export default HighlightOfQualification;
