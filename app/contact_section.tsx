import { ContactFooter } from "./contact_footer";
import { Glow } from "./glow";
import type { ContactLink } from "./landing_types";
import styles from "./page.module.css";
import { PrimaryCta } from "./primary_cta";

type ContactSectionProps = {
  contactLinks: readonly ContactLink[];
  conversationWhatsappHref: string;
  footerWhatsappHref: string;
};

export function ContactSection({
  contactLinks,
  conversationWhatsappHref,
  footerWhatsappHref,
}: ContactSectionProps) {
  return (
    <section className={`${styles.section} ${styles.contact}`} id="contato">
      <Glow
        src="/assets/manifesto/contact-glow-top-desktop.svg"
        className={`${styles.glow} ${styles.contactGlowTop}`}
      />
      <Glow
        src="/assets/manifesto/contact-glow-bottom-desktop.svg"
        className={`${styles.glow} ${styles.contactGlowBottom}`}
      />

      <div className={styles.sectionIntro}>
        <p className={styles.eyebrow}>{"// 03 CONTATO"}</p>
        <h2>
          VAMOS ENTENDER
          <br />O SEU PROBLEMA.
        </h2>
        <div className={styles.contactCopy}>
          <p>mapearemos sua situação e vemos se faz sentido trabalharmos juntos.</p>
        </div>
        <PrimaryCta href={conversationWhatsappHref} />
      </div>

      <ContactFooter contactLinks={contactLinks} whatsappHref={footerWhatsappHref} />
    </section>
  );
}
