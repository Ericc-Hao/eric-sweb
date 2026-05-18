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
  work: React.ReactNode[];
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
            <Details
              position="Software Engineer"
              company="NeoScholar Education Inc."
              companyLink="https://neoscholar.us/"
              time="August 2025 - April 2026"
              address="Wuhan, China."
              work={[
                "Developed and maintained a full-stack education-technology SaaS platform for research-oriented courses, student registration, program enrollment, and instructor-managed academic content.",
                "Built responsive and reusable frontend components using Ruby on Rails, JavaScript, Tailwind CSS, and Hotwire-style interactions, improving consistency across course cards, student profiles, forms, and landing pages.",
                "Implemented bilingual English and Mandarin user interfaces with structured content rendering, language switching, and localized course information to support international student recruitment.",
                "Designed backend models, controllers, and database relationships in Ruby on Rails and PostgreSQL for courses, students, applications, mentors, program tags, and administrative workflows.",
                "Integrated student registration flows with WeChat QR code onboarding, form validation, and admin-side review tools to streamline communication between students, advisors, and program staff.",
                "Improved the platform's visual design and user experience by refining page layouts, loading states, animations, navigation structure, and mobile responsiveness using Tailwind CSS and custom JavaScript.",
                "Containerized the application with Docker and supported cloud deployment workflows using Google Cloud Run, Artifact Registry, and GitHub Actions for staging and production environments.",
                "Collaborated with founders, academic advisors, and business stakeholders to translate education-program requirements into scalable product features, technical specifications, and maintainable implementation plans.",
              ]}
            />

            <Details
              position="Teaching Assistant, Software Algorithm Design"
              company="McMaster University"
              companyLink="https://www.eng.mcmaster.ca/cas/"
              time="January 2025 - April 2025"
              address="Hamilton, Canada."
              work={[
                "Guided 120+ second-year students through algorithmic design, analysis, and software-engineering principles in a simulated workplace environment, boosting average project scores by 18%.",
                "Collaborated with the instructor to redesign labs and tutorials, integrating Test-Driven Development and agile workflows; reduced student debugging time by 35%.",
                "Developed automated grading scripts and a GitHub Classroom starter kit that cut turnaround time for assignment feedback from one week to 48 hours.",
                "Authored comprehensive technical documentation and step-by-step lab guides in Markdown, improving student self-service resolution of questions by 40%.",
                "Delivered eight interactive workshop sessions on UML, design patterns, and code refactoring, consistently receiving 4.8 / 5 average satisfaction ratings.",
                "Provided one-on-one mentoring and office-hour support, helping more than 70 students debug complex C++ and Python projects and strengthening their problem-solving skills.",
                "Partnered with faculty to pilot a peer-review code-walkthrough model that fostered collaborative learning and enhanced communication skills across teams.",
              ]}
            />

            <Details
              position="Full-Stack Developer"
              company="IBM Canada Limited, Skills Network"
              companyLink="https://skills.network/"
              time="May 2023 - August 2024"
              address="Markham, Canada."
              work={[
                "Enhanced user interaction and visual design by upgrading the portal's UI/UX with Ruby on Rails and Tailwind CSS, leading to a 30% increase in user satisfaction and a 45% rise in engagement.",
                "Collaborated closely with the authors team to address issues encountered on the authoring platform, providing solutions and enhancements that improved their workflow and satisfaction.",
                "Architected a scalable file storage system using IBM Cloud OBS, streamlining digital asset management for authors, reducing load times by 50% and increasing system efficiency by 40%.",
                "Engineered and maintained a custom Markdown editor using React, providing authors with a tailored tool that streamlined content creation workflows and increased productivity by over 60%.",
                "Developed an advanced video subtitle (SRT) generation system as a Flask backend API using Python and Whisper AI, enhancing multimedia accessibility with 98% subtitle accuracy.",
                "Led major system migration projects, optimizing resource allocation and enhancing team efficiency, which reduced course creation time by over 75% and improved operational effectiveness.",
                "Developed a dedicated digital asset management interface using React, streamlining file uploads and link retrieval processes, improving operational efficiency by 40% and reducing file management time by 50%.",
                "Enhanced backend performance by designing and improving system architecture with advanced algorithms and data structures, achieving a 50% improvement in response times and a 30% reduction in server costs.",
                "Assisted other developer teams in building automation tools using website APIs, fostering inter-team collaboration and accelerating development processes.",
                "Mentored and assisted new interns during onboarding, providing guidance on system architecture and development practices.",
              ]}
            />

            <Details
              position="Software Developer Intern"
              company="Shanxi Xinghua Cun Fenjiu International Trade Limited Co"
              companyLink="https://www.fenjiu.com.cn/"
              time="May 2022 - August 2022"
              address="Taiyuan, Shanxi, China."
              work={[
                "Developed software solutions for internal and external customers using Java, delivering high-quality code with excellent attention to detail.",
                "Collaborated with cross-functional teams to define project requirements and ensure solutions met business needs.",
                "Utilized Agile methodologies to drive project development, contributing to all stages of the software development life cycle.",
                "Participated in code reviews with senior developers, gaining valuable experience in object-oriented programming and design patterns.",
                "Contributed to test-driven development practices, creating automated test cases for Java-based applications.",
                "Improved code efficiency by optimizing algorithms and implementing advanced data structures.",
                "Successfully delivered Java-based solutions on time and within budget constraints, earning positive feedback from stakeholders.",
                "Developed and maintained technical documentation, ensuring easy knowledge transfer for future development efforts. Collaborated with three product and design teams to implement innovative solutions for product direction.",
              ]}
            />

            <Details
              position="Web Developer Intern"
              company="Jinneng Holding Group"
              companyLink="https://www.jnkgjtnews.com/"
              time="May 2021 - August 2021"
              address="Jincheng, Shanxi, China."
              work={[
                "Worked with a team of 12 to build and maintain web applications that scaled to 0.6M daily users, communicating with cross-functional teams regarding product design and release.",
                "Developed new React components for the user-facing web application, improving the time-on-page for the average user by 1.2 minutes.",
                "Volunteered to investigate slow performance issues in the backend relational database system, and made improvements based on research to speed up database queries by 29%.",
                "Implemented cross-browser testing for web applications to ensure performance and visual quality.",
                "Built out a unit testing infrastructure for a client application that reduced the number of bugs reported by 33%.",
                "Used established coding standards and methodologies and coached two newly joined interns on best practices.",
              ]}
            />
          </ul>
        </div>
        </SectionCollapse>
        </div>
    );
};

export default Experience;
