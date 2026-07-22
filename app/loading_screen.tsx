import styles from "./page.module.css";

export type IntroPhase = "loading" | "exiting" | "complete";

type LoadingScreenProps = {
  phase: IntroPhase;
  visibleLetters: number;
  word: string;
};

export function LoadingScreen({ phase, visibleLetters, word }: LoadingScreenProps) {
  if (phase === "complete") {
    return null;
  }

  return (
    <div
      className={`${styles.loadingScreen} ${phase === "exiting" ? styles.loadingScreenExit : ""}`}
      role="status"
      aria-label={`Carregando ${word}`}
    >
      <div className={styles.loadingWord} aria-hidden="true">
        {Array.from(word).map((letter, index) => (
          <span
            className={`${styles.loadingLetter} ${index < visibleLetters ? styles.loadingLetterVisible : ""}`}
            key={`${letter}-${index}`}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}
