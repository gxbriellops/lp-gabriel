import styles from "./page.module.css";
import { GradientBackground } from "@/components/ui/paper-design-shader-background";
import { PrimaryCta } from "./primary_cta";

type HeroSectionProps = {
  conversationWhatsappHref: string;
};

export function HeroSection({ conversationWhatsappHref }: HeroSectionProps) {
  return (
    <section className={styles.hero} id="inicio">
      <GradientBackground />

      <div className={`${styles.sectionIntro} ${styles.heroIntro}`}>
        <p className={styles.eyebrow}>{"// MANIFESTO_01"}</p>
        <h1>
          AÇÕES ORIENTADAS
          <br />A RESOLVER PROBLEMAS.
        </h1>
        <p className={styles.heroCopy}>
          transformando complexidade em resultados claros, elegantes e processos que realmente funcionam.
        </p>
        <PrimaryCta href={conversationWhatsappHref} />
      </div>

      <div className={styles.crosshair} aria-hidden="true" />

      <div className={styles.manifestoStatement}>
        <div>
          <p className={styles.eyebrow}>{"// MANIFESTO"}</p>
          <h2>
            SOLÇÕES
            <br/>
            INTELIGENTES
          </h2>
        </div>
        <ul className={styles.statementCopy}>
          <li><strong>landing Pages:</strong> mais leads, menos atrito no dia a dia.</li>
          <li><strong>automações:</strong> menos tarefas, erros e tempo perdido.</li>
          <li><strong>sistemas:</strong> operações organizadas, integradas e escaláveis.</li>
        </ul>
      </div>
    </section>
  );
}
