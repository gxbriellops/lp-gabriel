"use client";

import Image from "next/image";
import { useState } from "react";
import type { NavigationLink } from "./landing_types";
import styles from "./page.module.css";

type HeaderProps = {
  navigationLinks: readonly NavigationLink[];
  conversationWhatsappHref: string;
};

export function Header({ navigationLinks, conversationWhatsappHref }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <a
        className={styles.brand}
        href="#inicio"
        aria-label="Manifesto — início"
        onClick={closeMenu}
      >
        MANIFESTO
      </a>

      <div className={styles.headerActions}>
        <nav className={styles.navigation} aria-label="Navegação principal">
          {navigationLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
          <Image
            className={styles.navDot}
            src="/assets/manifesto/nav-dot-home.svg"
            alt=""
            width={9}
            height={9}
          />
        </nav>

        <a
          className={styles.headerCta}
          href={conversationWhatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.headerCtaLong}>AGENDAR UMA CONVERSA</span>
          <span className={styles.headerCtaShort}>CONVERSAR</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <button
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}
        type="button"
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
        aria-controls="menu-mobile"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`${styles.mobileNavigation} ${isMenuOpen ? styles.mobileNavigationOpen : ""}`}
        id="menu-mobile"
        aria-label="Navegação mobile"
        aria-hidden={!isMenuOpen}
      >
        {navigationLinks.map((link, index) => (
          <a
            href={link.href}
            key={link.href}
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <span>0{index + 1}</span>
            {link.label}
            <span aria-hidden="true">→</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
