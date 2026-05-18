import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/developer-pic-1.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chenrui Hao Portfolio</title>
        <meta
          name="description"
          content="An interactive showcase of my software development projects, skills, and experiences. Dive in to explore my journey and collaborations in tech."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-2/5 lg:hidden md:my-10 md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="Chenrui Hao"
                className="h-auto w-full rounded-full"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Creating Reliable Software and Intelligent Systems"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                I am Chenrui “Eric” Hao, a software engineer and Computer Science student with experience in full-stack development, machine learning, education technology, and AI-assisted systems. I have built web platforms, backend services, data-driven applications, and learning tools through academic, professional, and startup environments. I am currently seeking software engineering, AI engineering, and data-focused roles where I can apply strong technical skills, product thinking, and a human-centered approach to solving real-world problems.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="Decorative illustration"
          />
        </div>
      </article>
    </>
  );
};

export default Home;
