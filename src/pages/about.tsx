import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/developer-pic-2.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import HighlightOfQualification from "@/components/HighlightOfQualifications";
import RateSkills from "@/components/RateSkills";
import ScrollToTop from "@/components/ScrollToTop";

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
            text="Curiosity Drives Discovery"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-10"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-5 flex flex-col items-start justify-start xl:col-span-9 md:order-2 
            md:col-span-9">
              <h2 className="mb-5 text-xl font-bold uppercase tracking-wide text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="my-4 text-lg font-medium leading-relaxed text-dark/95 dark:text-light/90">
                Hello World, This is <strong>Chenrui Hao</strong>
              </p>
              <p className="indent-8 text-lg font-medium leading-relaxed text-dark/90 dark:text-light/85">
              I am a full-stack software developer, an AI-focused builder, and an entrepreneur-minded technologist. My work is driven by curiosity, product thinking, and a strong interest in building practical software that solves real problems. I enjoy working across the full stack, from backend architecture, database design, and cloud deployment to frontend experience, AI integration, and scalable product development.
              </p>
              <p className="indent-8 my-5 text-lg font-medium leading-relaxed text-dark/90 dark:text-light/85">
              My professional experience spans education technology, AI-assisted systems, and web platforms. At IBM Skills Network, I contributed to tools for online learning, course authoring, file management, transcription workflows, and intelligent content systems. I have also worked with NeoScholar Education Group, where I helped build education technology solutions for academic programs and student-facing services. These experiences strengthened my interest in AI-powered products, especially systems that can organize knowledge, improve workflows, and make learning more personalized and accessible.
              </p>
              <p className="indent-8 text-lg font-medium leading-relaxed text-dark/90 dark:text-light/85">
              Beyond engineering, I am passionate about entrepreneurship and turning ideas into real products. I enjoy identifying opportunities, building prototypes, refining user experience, and thinking about how technology can create long-term value. My technical interests include full-stack development, artificial intelligence, machine learning, backend systems, cloud infrastructure, and SaaS products. Moving forward, I aim to grow as a product-minded software engineer and AI engineer who builds reliable, intelligent, and user-centered technology.
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

          <div className="mt-20 flex flex-col gap-28 md:mt-28 md:gap-36">
            <RateSkills />
            <HighlightOfQualification />
            <Experience />
            <Education />
            <Skills />
          </div>
          <ScrollToTop />
        </Layout>
      </main>
    </>
  );
}
