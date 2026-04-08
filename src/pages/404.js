import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import NotFoundHero from "@/components/not-found/NotFoundHero";
import { motion, useReducedMotion } from "framer-motion";
import Head from "next/head";
import React from "react";

const floatTransition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
};

const NotFound = () => {
  const reduceMotion = useReducedMotion();

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
        <div
          className="pointer-events-none absolute inset-0 bg-circularLight dark:bg-circularDark opacity-60 dark:opacity-40"
          aria-hidden
        />

        {!reduceMotion && (
          <>
            <motion.div
              className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-primary/25 blur-3xl dark:bg-primary/20"
              aria-hidden
              animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
              transition={{ ...floatTransition, duration: 7 }}
            />
            <motion.div
              className="pointer-events-none absolute -right-16 bottom-1/4 h-64 w-64 rounded-full bg-primaryDark/30 blur-3xl dark:bg-primaryDark/25"
              aria-hidden
              animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.12, 1] }}
              transition={{ ...floatTransition, duration: 5.5, delay: 0.5 }}
            />
          </>
        )}

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
