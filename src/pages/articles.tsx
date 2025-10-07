// @ts-nocheck
import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/articles/data.png";
import blog2 from "../../public/images/articles/sql.png";
import blog3 from "../../public/images/articles/mmm.png";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

import ScrollToTop from "@/components/ScrollToTop";

const FramerImage = motion(Image);

interface MovingImgProps {
  title: string;
  img: any;
  link: string;
}

const MovingImg: React.FC<MovingImgProps> = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light">
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

export default function Articles(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Browse through CodeBucks's collection of software engineering articles and 
        tutorials on Next.js, React.js, web development, and more. 
        Gain valuable insights and stay up-to-date with SEO tips for building a developer portfolio." />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Checkout My Blogs!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={blog1}
              title="Data Transactions and Concurrency Control"
              time="4 min read"
              summary="During my internship, I discovered the critical role of data transactions and concurrency control in databases. I found that uncommitted data updates can result in data discrepancies and duplications can occur from multiple simultaneous transactions. To address this, I suggest implementing a wound-wait scheme, demonstrating my ability to apply theoretical computer science concepts in a practical context."
              link="https://medium.com/@yidigeng95_64319/data-transactions-and-concurrency-control-ffb195af3857"
            />

            <FeaturedArticle
              img={blog2}
              title="History of SQL"
              time="3 min read"
              summary="I delve into the history of SQL, a key language for database management. Originating from Edgar Frank Codd's work on the relational data model in the late 1960s, SQL was developed by Don Chamberlin and Ray Boyce during IBM's 'System R' project in the 1970s. Initially termed SQUARE, it was later modified into SEQUEL and finally became SQL. Despite its early development, SQL gained popularity only with the onset of the big data era in the 21st century. I encourage more people to appreciate and learn SQL and its fascinating history."
              link="https://devdreaming.com/blogs/create-3-different-types-of-loading-screens-in-react"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            All Articles
          </h2>

          <ul className="flex flex-col items-center relative">
            <Article
              title="Data Transactions and Concurrency Control"
              img={blog1}
              date="September 29, 2022"
              link="https://medium.com/@yidigeng95_64319/data-transactions-and-concurrency-control-ffb195af3857"
            />
            <Article
              title="History of SQL"
              img={blog3}
              date="October 14, 2022"
              link="https://medium.com/@yidigeng95_64319/history-of-sql-bc92a4981d60"
            />
            <Article
              title="Market Mix Modelling Application in the CPG industry with MLR"
              img={blog2}
              date="November 12, 2022"
              link="https://medium.com/@yidigeng95_64319/market-mix-modelling-application-in-the-cpg-industry-with-mlr-bcb749f3e954"
            />
          </ul>
        </Layout>
      </main>
      <ScrollToTop />
    </>
  );
}
