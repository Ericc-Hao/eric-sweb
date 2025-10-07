import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/1.png";
import proj2 from "../../public/images/projects/2.png";
import proj3 from "../../public/images/projects/3.jpg";
import proj4 from "../../public/images/projects/4.jpg";
import proj5 from "../../public/images/projects/5.jpg";
import proj6 from "../../public/images/projects/6.jpg";
import proj7 from "../../public/images/projects/7.jpg";
import proj8 from "../../public/images/projects/8.jpg";
import proj9 from "../../public/images/projects/9.jpg";
import proj10 from "../../public/images/projects/10.jpg";
import TransitionEffect from "@/components/TransitionEffect";
import ScrollToTop from "@/components/ScrollToTop";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10 hover:text-pink-600 dark:hover:text-purple-600"
            aria-label="Project Github Repository"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base hover:text-pink-600 dark:hover:text-purple-600
            "
            aria-label="Project Link"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base hover:text-pink-400 dark:hover:text-purple-400
            "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6 hover:text-pink-500 dark:hover:text-purple-500"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="My Projects"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="K-Nearest Neighbors (KNN), Logistic Regression, Decision Trees"
                title="Credit Card Fraud Detection"
                summary="In this collaborative project, we utilized machine learning techniques to predict credit card defaults, employing a comprehensive dataset encompassing various cardholder attributes. Post data cleaning and exploratory analysis, our optimized model demonstrated impressive predictive capability, affirming our methodology's effectiveness."
                img={proj1}
                link="https://github.com/YidiG/Credit-Card-Default-Prediction"
                github="https://github.com/YidiG/Credit-Card-Default-Prediction"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Multi linear regression"
                title="Social Network Analysis"
                summary="Leveraging Python libraries like pathlib, networkx, pandas, numpy, and matplotlib, we executed an in-depth social network analysis using various network centrality metrics. This study illuminated social dynamics within a student group, as our regression analysis linked student attendance and gender to these metrics, offering key insights into social interaction dynamics."
                img={proj2}
                link="https://github.com/YidiG/Social-network-analyst/tree/main"
                github="https://github.com/YidiG/Social-network-analyst/tree/main"
              />
            </div>
            <div className="col-span-12">
            <FeaturedProject
              type="Unsupervised Learning, K-Nearest Neighbors (KNN), Multi-Linear Regression, Decision Trees, Random Forest Classifier, and Gradient Boosting"
              title="Airbnb Pricing Strategy"
              summary="This project uses unsupervised learning and various regression and classification models to enhance Airbnb's competitiveness and profitability by addressing key challenges: the narrowing price gap with traditional hotels and slow 'Superhost' designation. Using a comprehensive dataset from the Greater Toronto Area, we developed optimized pricing models and automated Superhost designation to boost competitiveness and profitability."
              img={proj3}
              link="https://github.com/YidiG/Airbnb-Pricing-Strategy"
              github="https://github.com/YidiG/Airbnb-Pricing-Strategy"
            />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Hierarchical Clustering, K-Means Clustering"
                title="Country Investment Risk Evaluation"
                img={proj4}
                link="https://github.com/YidiG/Country-Investment-Risk/tree/main"
                github="https://github.com/YidiG/Country-Investment-Risk/tree/main"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="R, Excel"
                title="Travel to Canada"
                img={proj5}
                link="https://github.com/YidiG/Travel-To-Canada-Analysis"
                github="https://github.com/YidiG/Travel-To-Canada-Analysis"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Naïve Bayes Classifier, Logistic Regression, Deep Learning"
                img={proj6}
                title="FakeBlitz"
                link="https://github.com/YidiG/FakeBlitz_AI_Capstione"
                github="https://github.com/YidiG/FakeBlitz_AI_Capstione"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Association rules"
                img={proj7}
                title="Gorcery Sales Strategy"
                link="https://github.com/YidiG/Grocery-Sales-Strategy/tree/main"
                github="https://github.com/YidiG/Grocery-Sales-Strategy/tree/main"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Multi Linear Regression"
                img={proj8}
                title="Boston House Price"
                link="https://github.com/YidiG/Boston-House-Price"
                github="https://github.com/YidiG/Boston-House-Price"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="VBA, Excel"
                img={proj9}
                title="Flight Operation Project"
                link="https://github.com/YidiG/Flight-Operation-Project"
                github="https://github.com/YidiG/Flight-Operation-Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="PowerBI, Excel Pivot Table"
                img={proj10}
                title="Condo Selection"
                link="https://github.com/YidiG/Condo-Selection"
                github="https://github.com/YidiG/Condo-Selection"
              />
            </div>
          </div>
        </Layout>
      </main>
      <ScrollToTop />
    </>
  );
}
