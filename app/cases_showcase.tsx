import { CasePreview } from "./case_preview";
import type { CaseStudy } from "./landing_types";
import styles from "./page.module.css";

type CasesShowcaseProps = {
  caseStudies: readonly CaseStudy[];
};

export function CasesShowcase({ caseStudies }: CasesShowcaseProps) {
  return (
    <div className={styles.casesShowcase}>
      <div className={styles.casesHeading}>
        <p className={styles.eyebrow}>{"// CASES SELECIONADOS"}</p>
        <p>
          projetos onde estratégia, design e tecnologia trabalharam para produzir
          um resultado mais simples de perceber.
        </p>
      </div>

      <div className={styles.caseGrid}>
        {caseStudies.map((caseStudy, index) => (
          <article className={styles.caseCard} key={caseStudy.number}>
            <CasePreview
              label={caseStudy.previewLabel}
              variant={index + 1}
              image={caseStudy.image}
            />
            <div className={styles.caseContent}>
              <div className={styles.caseMeta}>
                <span>{caseStudy.number}</span>
                <span>{caseStudy.category}</span>
              </div>
              <h3>{caseStudy.title}</h3>
              <p className={styles.caseDescription}>{caseStudy.description}</p>
              <ul className={styles.caseResults}>
                {caseStudy.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
              <a
                className={styles.caseLink}
                href={caseStudy.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>VER LANDING PAGE</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
