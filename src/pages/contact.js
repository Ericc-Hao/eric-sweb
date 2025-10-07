import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/bye.png";
import TransitionEffect from "@/components/TransitionEffect";


export default function Home() {
  
    return (
      <>
        <Head>
          {/* Website Description and title */}
          <title>Contact</title>
          <meta
            name="description"
            content="Feel free to contact me at"
          />
        </Head>
  
        <TransitionEffect />
        <article
          className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
        >
          <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
            <div className="flex w-full items-start justify-between md:flex-col">
              <div className="w-2/5 lg:hidden md:inline-block md:w-full md:my-10">
                <Image
                  src={profilePic}
                  alt="Yidi Geng"
                  className="h-auto w-full rounded-full"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
                <AnimatedText
                  text="Feel free to contact me at"
                  className="!text-left !text-5xl xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-2xl"
                />
                <p className="pl-2 my-10 text-2xl text-left flex md:text-sm self-start sm:!text-xs">
                  <strong>Email:</strong><a href="mailto:yidigeng95@hotmail.com" className="pl-2 underline">yidigeng95@hotmail.com</a>
                </p>
  
                <div className="mt-2 flex items-center self-start lg:self-center space-x-4">
                  <a
                      href="https://ca.linkedin.com/in/yidigeng0309"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                  capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                  md:p-2 md:px-4 md:text-base"
                    >
                      LinkedIn
                    </a>
                  <a
                      href="https://github.com/YidiG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                  capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                  md:p-2 md:px-4 md:text-base"
                    >
                      GitHub
                    </a>
                    <Link
                      href="/resume.pdf"
                      target={"_blank"}
                      className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                  capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                  md:p-2 md:px-4 md:text-base
                  `}
                      download
                    >
                      Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                    </Link>
                </div>
              </div>
            </div>
          </Layout>
  
        </article>
      </>
    );
  }
  