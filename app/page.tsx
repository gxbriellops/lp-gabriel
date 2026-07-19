"use client";

import Image from "next/image";
import { useState } from "react";
import { GradientBackground } from "@/components/ui/paper-design-shader-background";
import styles from "./page.module.css";

const navigationLinks = [
  { label: "INÍCIO", href: "#inicio" },
  { label: "LABORATÓRIO", href: "#laboratorio" },
  { label: "CONTATO", href: "#contato" },
];

const processSteps = [
  {
    number: "01",
    title: "PROBLEMA",
    description: "Entendemos o contexto e o que realmente importa.",
  },
  {
    number: "02",
    title: "DIAGNÓSTICO",
    description: "Mapeamos causas, gargalos e oportunidades.",
  },
  {
    number: "03",
    title: "ESTRATÉGIA",
    description: "Definimos a abordagem ideal e o que construir.",
  },
  {
    number: "04",
    title: "PROTÓTIPO",
    description: "Validamos a solução com rapidez antes de escalar.",
  },
  {
    number: "05",
    title: "DESENVOLVIMENTO",
    description: "Código limpo, escalável e documentado.",
  },
  {
    number: "06",
    title: "ENTREGA",
    description: "Implantamos, treinamos e acompanhamos.",
  },
];

const caseStudies = [
  {
    number: "01",
    category: "PRODUTO DIGITAL / CONVERSÃO",
    title: "JORNADA MAIS CURTA, DECISÃO MAIS CLARA.",
    description:
      "Uma landing page orientada à conversão, com proposta de valor direta, hierarquia objetiva e menos atrito até o contato.",
    results: ["NARRATIVA MAIS CLARA", "MENOS PASSOS ATÉ O LEAD"],
    href: "#contato",
    previewLabel: "CASE_01 / LANDING PAGE",
  },
  {
    number: "02",
    category: "SERVIÇOS / POSICIONAMENTO",
    title: "COMPLEXIDADE TRADUZIDA EM CONFIANÇA.",
    description:
      "Reposicionamento digital para transformar um serviço técnico em uma experiência simples, confiável e pronta para gerar oportunidades.",
    results: ["MENSAGEM MAIS OBJETIVA", "MAIOR PERCEPÇÃO DE VALOR"],
    href: "#contato",
    previewLabel: "CASE_02 / LANDING PAGE",
  },
];

const contactLinks = [
  {
    icon: "✉",
    label: "contato@manifesto.dev",
    href: "mailto:contato@manifesto.dev",
  },
  {
    icon: "●",
    label: "github.com/manifesto-dev",
    href: "https://github.com/manifesto-dev",
  },
  {
    icon: "in",
    label: "linkedin.com/in/manifesto-dev",
    href: "https://linkedin.com/in/manifesto-dev",
  },
];

function Glow({
  src,
  className,
}: {
  src: string;
  className: string;
}) {
  return (
    <div className={className} aria-hidden="true">
      <Image src={src} alt="" fill sizes="100vw" priority />
    </div>
  );
}

function Header() {
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

function PrimaryCta() {
  return (
    <a className={styles.primaryCta} href="mailto:contato@manifesto.dev">
      <span>AGENDAR UMA CONVERSA</span>
      <span className={styles.ctaArrow} aria-hidden="true">
        →
      </span>
    </a>
  );
}

function HeroSection() {
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
          O mais alto grau de excelência é entender o problema, eliminar a
          complexidade e entregar a solução mais eficiente.
        </p>
        <PrimaryCta />
      </div>

      <div className={styles.crosshair} aria-hidden="true" />

      <div className={styles.manifestoStatement}>
        <div>
          <p className={styles.eyebrow}>{"// MANIFESTO"}</p>
          <h2>
            SOFTWARE É
            <br />
            CONSEQUÊNCIA.
          </h2>
        </div>
        <div className={styles.statementCopy}>
          <p>o essencial é entender pessoas, processos e objetivos.</p>
          <p>
            boas soluções vêm de boas perguntas, não de mais funcionalidades.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <ol className={styles.processList}>
      {processSteps.map((step, index) => (
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
          {index < processSteps.length - 1 && (
            <span className={styles.stepArrow} aria-hidden="true">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

function CasePreview({ label, variant }: { label: string; variant: number }) {
  return (
    <div className={`${styles.casePreview} ${variant === 2 ? styles.casePreviewAlt : ""}`}>
      <div className={styles.previewBrowser} aria-hidden="true">
        <div className={styles.previewToolbar}>
          <span />
          <span />
          <span />
          <p>{label}</p>
        </div>
        <div className={styles.previewCanvas}>
          <p>{`// ${variant === 1 ? "CONVERSÃO" : "POSICIONAMENTO"}`}</p>
          <strong>
            {variant === 1 ? "CLAREZA QUE CONVERTE." : "VALOR QUE SE ENTENDE."}
          </strong>
          <span />
          <div>
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}

function CasesShowcase() {
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
            <CasePreview label={caseStudy.previewLabel} variant={index + 1} />
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
              <a className={styles.caseLink} href={caseStudy.href}>
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

function LaboratorySection() {
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

      <ProcessTimeline />
      <CasesShowcase />
    </section>
  );
}

function ContactFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSlogan}>
        <span aria-hidden="true">＋</span>
        <p>
          VAMOS CONSTRUIR
          <br />
          SOLUÇÕES QUE
          <br />
          FAZEM SENTIDO.
        </p>
      </div>

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
    </footer>
  );
}

function ContactSection() {
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
          <p>
            se o processo é lento, repetitivo ou difícil de escalar, existe uma
            solução melhor.
          </p>
          <p>vamos descobrir juntos.</p>
          <p>
            primeira conversa: entender o cenário e ver se vale a pena. Sem
            compromisso, só clareza.
          </p>
        </div>
      </div>

      <ContactFooter />
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <HeroSection />
        <LaboratorySection />
        <ContactSection />
      </main>
    </>
  );
}
