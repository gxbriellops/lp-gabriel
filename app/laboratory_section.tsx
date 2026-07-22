import { CasesShowcase } from "./cases_showcase";
import { Glow } from "./glow";
import type { CaseStudy, ProcessStep } from "./landing_types";
import styles from "./page.module.css";
import { ProcessTimeline } from "./process_timeline";

type LaboratorySectionProps = {
  processSteps: readonly ProcessStep[];
  caseStudies: readonly CaseStudy[];
};

export function LaboratorySection({ processSteps, caseStudies }: LaboratorySectionProps) {
  return (
    <section className={`${styles.section} ${styles.laboratory}`} id="laboratorio">
      <Glow
        src="/assets/manifesto/lab-glow-top-desktop.svg"
        className={`${styles.glow} ${styles.labGlowTop}`}
      />
      <Glow
        src="/assets/manifesto/lab-glow-bottom-desktop.svg"
        className={`${styles.glow} ${styles.labGlowBottom}`}
      />

      <div className={styles.sectionIntro}>
        <p className={styles.eyebrow}>{"// 02 PROCESSO"}</p>
        <h2>LABORATÓRIO</h2>
        <div className={styles.introCopy}>
          <p>cada projeto nasce de um método.</p>
          <p>soluções que geram resultado e fazem sentido no longo prazo.</p>
        </div>
      </div>

      <ProcessTimeline steps={processSteps} />
      <CasesShowcase caseStudies={caseStudies} />
    </section>
  );
}
