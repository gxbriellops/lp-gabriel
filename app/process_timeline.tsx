import Image from "next/image";
import type { ProcessStep } from "./landing_types";
import styles from "./page.module.css";

type ProcessTimelineProps = {
  steps: readonly ProcessStep[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className={styles.processList}>
      {steps.map((step, index) => (
        <li className={styles.processStep} key={step.number}>
          <Image
            className={styles.stepDot}
            src="/assets/manifesto/step-dot.svg"
            alt=""
            width={7}
            height={7}
          />
          <p className={styles.stepNumber}>{step.number}</p>
          <p className={styles.stepTitle}>{step.title}</p>
          <p className={styles.stepDescription}>{step.description}</p>
          {index < steps.length - 1 && (
            <span className={styles.stepArrow} aria-hidden="true">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
