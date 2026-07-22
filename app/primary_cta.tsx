import styles from "./page.module.css";

type PrimaryCtaProps = {
  href: string;
};

export function PrimaryCta({ href }: PrimaryCtaProps) {
  return (
    <a
      className={styles.primaryCta}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span>AGENDAR UMA CONVERSA</span>
      <span className={styles.ctaArrow} aria-hidden="true">
        →
      </span>
    </a>
  );
}
