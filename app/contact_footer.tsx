import styles from "./page.module.css";

type ContactLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type ContactFooterProps = {
  contactLinks: ContactLink[];
  whatsappHref: string;
};

export function ContactFooter({
  contactLinks,
  whatsappHref,
}: ContactFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <p className={styles.socialsLabel}>CONECTE-SE</p>
        {contactLinks.map((link) => (
          <a href={link.href} key={link.label}>
            <span className={styles.socialIcon} aria-hidden="true">
              {link.icon}
            </span>
            <span>{link.label}</span>
          </a>
        ))}
      </div>

      <a
        className={styles.footerSlogan}
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
      >
        <span aria-hidden="true">＋</span>
        <p>
          VAMOS CONSTRUIR
          <br />
          SOLUÇÕES QUE
          <br />
          FAZEM SENTIDO.
        </p>
      </a>
    </footer>
  );
}
