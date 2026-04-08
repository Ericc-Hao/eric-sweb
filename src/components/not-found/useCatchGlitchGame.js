import { useEffect, useMemo, useState } from "react";

const GAME_DURATION = 20;

const randomPosition = () => ({
  x: 10 + Math.random() * 80,
  y: 14 + Math.random() * 72,
});

const useCatchGlitchGame = () => {
  const [gameState, setGameState] = useState("idle");
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [target, setTarget] = useState(() => randomPosition());
  const [flash, setFlash] = useState(false);

  const hitRate = useMemo(() => {
    const playedSeconds = GAME_DURATION - timeLeft;
    if (playedSeconds <= 0) return 0;
    return Math.round((score / playedSeconds) * 10) / 10;
  }, [score, timeLeft]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedBest = Number(window.localStorage.getItem("404-best-score") || 0);
    if (Number.isFinite(savedBest)) setBestScore(savedBest);
  }, []);

  useEffect(() => {
    if (gameState !== "running") return undefined;

    const countdown = setInterval(() => {
      setTimeLeft((current) => {
        if (current <= 1) {
          setGameState("over");
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [gameState]);

  useEffect(() => {
    if (gameState !== "running") return undefined;

    const speed = Math.max(280, 760 - score * 10);
    const mover = setInterval(() => {
      setTarget(randomPosition());
      setFlash(true);
      setTimeout(() => setFlash(false), 120);
    }, speed);

    return () => clearInterval(mover);
  }, [gameState, score]);

  useEffect(() => {
    if (gameState !== "over") return;
    const nextBest = Math.max(score, bestScore);
    if (nextBest !== bestScore) {
      setBestScore(nextBest);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("404-best-score", String(nextBest));
      }
    }
  }, [bestScore, gameState, score]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setTarget(randomPosition());
    setGameState("running");
  };

  const catchGlitch = () => {
    if (gameState !== "running") return;
    setScore((current) => current + 1);
    setTarget(randomPosition());
  };

  return {
    gameState,
    timeLeft,
    score,
    bestScore,
    hitRate,
    target,
    flash,
    gameDuration: GAME_DURATION,
    startGame,
    catchGlitch,
  };
};

export default useCatchGlitchGame;
