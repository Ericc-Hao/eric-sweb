import Layout from "@/components/Layout";
import NotFoundHero from "@/components/not-found/NotFoundHero";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import type { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 — Page not found</title>
        <meta
          name="description"
          content="This page does not exist. Browse back to explore projects and articles."
        />
      </Head>

      <TransitionEffect />
      <main className="relative min-h-[75vh] w-full overflow-hidden bg-light dark:bg-dark">
        <Layout className="relative !bg-transparent !pt-12 sm:!pt-16">
          <div className="relative z-10 mx-auto w-full max-w-4xl">
            <NotFoundHero />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default NotFound;
