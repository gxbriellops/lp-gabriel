"use client";

import { useEffect, useState, type ReactNode } from "react";
import { LoadingScreen, type IntroPhase } from "./loading_screen";
import styles from "./page.module.css";

const loadingWord = "MANIFESTO";

type LandingShellProps = {
  children: ReactNode;
};

export function LandingShell({ children }: LandingShellProps) {
  const [introPhase, setIntroPhase] = useState<IntroPhase>("loading");
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      const reducedMotionTimer = setTimeout(() => {
        setVisibleLetters(loadingWord.length);
        setIntroPhase("complete");
      }, 0);

      return () => clearTimeout(reducedMotionTimer);
    }

    const previousOverflow = document.body.style.overflow;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const leadIn = 220;
    const letterDelay = 95;
    const wordCompleteAt = leadIn + (loadingWord.length - 1) * letterDelay;

    document.body.style.overflow = "hidden";

    Array.from(loadingWord).forEach((_, index) => {
      timers.push(
        setTimeout(() => {
          setVisibleLetters(index + 1);
        }, leadIn + index * letterDelay),
      );
    });

    timers.push(
      setTimeout(() => {
        setIntroPhase("exiting");
      }, wordCompleteAt + 520),
    );

    timers.push(
      setTimeout(() => {
        setIntroPhase("complete");
        document.body.style.overflow = previousOverflow;
      }, wordCompleteAt + 1750),
    );

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const contentIsVisible = introPhase !== "loading";

  return (
    <>
      <LoadingScreen
        phase={introPhase}
        visibleLetters={visibleLetters}
        word={loadingWord}
      />
      <div
        className={`${styles.siteShell} ${contentIsVisible ? styles.siteShellVisible : ""}`}
      >
        {children}
      </div>
    </>
  );
}
