import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import { FiAward, FiPlay, FiTarget } from "react-icons/fi";
import useCatchGlitchGame from "./useCatchGlitchGame";

const NotFoundMiniGame = () => {
  const reduceMotion = useReducedMotion();
  const {
    gameState,
    timeLeft,
    score,
    bestScore,
    hitRate,
    target,
    flash,
    gameDuration,
    startGame,
    catchGlitch,
  } = useCatchGlitchGame();

  return (
    <section className="w-full">
      <div className="relative overflow-hidden rounded-2xl border-2 border-dark/15 bg-light/70 p-5 shadow-3xl backdrop-blur dark:border-light/15 dark:bg-dark/70 sm:p-4">
        <div className="mb-4 flex items-center justify-between gap-3 text-sm font-semibold sm:flex-wrap">
          <span className="inline-flex items-center gap-1 rounded-full bg-dark px-3 py-1 text-light dark:bg-light dark:text-dark">
            <FiTarget /> Score: {score}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-primary px-3 py-1 text-primary dark:border-primaryDark dark:text-primaryDark">
            <FiAward /> Best: {bestScore}
          </span>
          <span className="rounded-full bg-primary/15 px-3 py-1 text-dark dark:bg-primaryDark/20 dark:text-light">
            Time: {timeLeft}s
          </span>
          <span className="text-dark/60 dark:text-light/60">Rate: {hitRate}/s</span>
        </div>

        <div className="relative h-64 overflow-hidden rounded-xl border border-dark/15 bg-gradient-to-br from-primary/10 via-transparent to-primaryDark/15 dark:border-light/20 sm:h-56">
          <div
            className="absolute inset-0 bg-circularLightSm opacity-40 dark:bg-circularDarkSm dark:opacity-50"
            aria-hidden
          />

          {gameState !== "running" && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 text-center">
              <p className="text-lg font-bold text-dark dark:text-light">
                {gameState === "over" ? "Time up!" : "Ready to play?"}
              </p>
              <p className="max-w-xs text-sm text-dark/70 dark:text-light/70">
                Catch the moving glitch as many times as possible in {gameDuration}{" "}
                seconds.
              </p>
            </div>
          )}

          <motion.button
            type="button"
            onClick={catchGlitch}
            disabled={gameState !== "running"}
            className="absolute z-20 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-light bg-dark text-lg font-bold text-light shadow-lg transition disabled:cursor-not-allowed disabled:opacity-60 dark:border-dark dark:bg-light dark:text-dark"
            style={{ left: `${target.x}%`, top: `${target.y}%` }}
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: flash ? [1, 1.2, 1] : [1, 1.08, 1],
                    rotate: [0, 6, -6, 0],
                  }
            }
            transition={{
              duration: flash ? 0.2 : 1.1,
              repeat: flash ? 0 : Infinity,
              ease: "easeInOut",
            }}
            aria-label="Catch moving glitch"
          >
            *
          </motion.button>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 sm:flex-col sm:items-stretch">
          <p className="text-sm text-dark/65 dark:text-light/65">
            {gameState === "running"
              ? "Game live now. Catch it before time runs out."
              : gameState === "over"
                ? `You scored ${score}. ${score >= bestScore ? "New high score!" : "Try again."}`
                : "Press Start to begin."}
          </p>
          <button
            type="button"
            onClick={startGame}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-dark/20 px-4 py-2 text-sm font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-light/20 dark:text-light dark:hover:border-primaryDark dark:hover:text-primaryDark"
          >
            <FiPlay />
            {gameState === "running"
              ? "Restart"
              : gameState === "over"
                ? "Play again"
                : "Start"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundMiniGame;
