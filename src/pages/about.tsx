// @ts-nocheck
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import HighlightOfQualification from "@/components/HighlightOfQualifications";
import RateSkills from "@/components/RateSkills";
import ScrollToTop from "@/components/ScrollToTop";

interface AnimatedNumberProps {
  value: number;
}

function AnimatedNumberFramerMotion({ value }: AnimatedNumberProps) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About(): React.ReactElement {
  return (
    <>
      <Head>
        <title>About Myself</title>
        <meta name="description" content="Learn more about CodeBucks, a Next.js developer with a passion for 
        creating innovative solutions. Discover tips for building a developer portfolio and insights on 
        full-stack development, front-end development, and back-end development." />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Curiosity Drives Discovery !"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-5 flex flex-col items-start justify-start xl:col-span-9 md:order-2 
            md:col-span-9">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="my-4 font-medium">
                Hello World, This is <strong>Chenrui Hao</strong>
              </p>
              <p className="indent-8 font-medium ">
                I am a Data Analyst, a woman in STEM, an entrepreneur, and a tech-savvy. My journey in the world of computer science has always been driven by my intrinsic curiosity to unravel the logic and methodologies that underpin every project and model. As I delve deeper into this domain, my goal is to leverage my expertise to derive data-driven solutions that can tackle challenges in various fields, all while enhancing my knowledge base in computer science.
              </p>
              <p className="indent-8 my-4 font-medium">
                My penchant for learning and curiosity was sparked early, ranging from an infatuation with fiction cartoons during childhood to the reflective practice of journaling during my adolescence. This thirst for knowledge continues today, as I routinely tune into podcasts to stay updated with evolving trends.
                After graduating from Concordia University, I worked as data analyst in different fields for years. I am currently working as a Data Analyst at Air Canada marketing team. 
              </p>
              <p className="indent-8 font-medium">
                A proud alumna of Concordia University, I have built my career as a Data Analyst in multiple industries over the years. Currently, I am part of the Marketing team at Air Canada, where I employ data to inform and optimize our strategic decisions. In moving forward, I aspire to elevate my career to the next level by transitioning into the role of a Data Scientist, where I can apply more advanced analytical tools and models to generate valuable insights and drive data-driven decision-making.
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profile}
                alt="Codebucks"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
          </div>
          <RateSkills />
          <HighlightOfQualification />
          <Experience />
          <Education />
          <Skills />
          <ScrollToTop />
        </Layout>
      </main>
    </>
  );
}
