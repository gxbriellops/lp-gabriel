"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GradientBackground } from "@/components/ui/paper-design-shader-background";
import styles from "./page.module.css";
import { ContactFooter } from "@/app/contact_footer";

const navigationLinks = [
  { label: "INÍCIO", href: "#inicio" },
  { label: "LABORATÓRIO", href: "#laboratorio" },
  { label: "CONTATO", href: "#contato" },
];

const whatsappNumber = "5583986080850";
const loadingWord = "MANIFESTO";

function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const conversationWhatsappHref = whatsappUrl(
  "Olá! Vim pelo site da Manifesto e gostaria de agendar uma conversa sobre uma solução para o meu negócio.",
);

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
    image: "/assets/cases/lp_2.webp",
    title: "JORNADA MAIS CURTA, DECISÃO MAIS CLARA.",
    description:
      "Uma landing page orientada à conversão, com proposta de valor direta, hierarquia objetiva e menos atrito até o contato.",
    results: [
      "FORMULÁRIO INTELIGENTE",
      "CRM PERSONALIZADO",
      "NOTIFICAÇÃO EM TEMPO REAL",
      "MOSTRUÁRIO DE IMÓVEIS"
    ],
    href: "https://www.lincolnpirescorretor.com/",
    previewLabel: "CASE_01 / LANDING PAGE / FORMUÁRIO AUTOMATIZADO / CRM PERSONALIZADO / MOSTRUÁRIO DE IMÓVEIS",
  },
  {
    number: "02",
    category: "SERVIÇOS / POSICIONAMENTO",
    image: "/assets/cases/lp_1.webp",
    title: "COMPLEXIDADE TRADUZIDA EM CONFIANÇA.",
    description:
      "Posicionamento digital para transformar um serviço técnico em uma experiência simples, confiável e pronta para gerar oportunidades.",
    results: [
      "COPY ESTRATÉGICA",
      "ESTRUTURA DE CONVERSÃO",
      "IDENTIDADE PREMIUM",
      "MAPS INTEGRADO"
    ],
    href: "https://www.dramaureliasilva.com/",
    previewLabel: "CASE_02 / LANDING PAGE",
  },
];

const contactLinks = [
  {
    icon: "✉",
    label: "gabriellopes.ct07@gmail.com",
    href: "mailto:gabriellopes.ct07@gmail.com",
  },
  {
    icon: "●",
    label: "github.com/gxbriellops",
    href: "https://github.com/gxbriellops?tab=repositories",
  },
  {
    icon: "☎",
    label: "WhatsApp",
    href: "https://wa.me/5583986080850",
  },
  {
    icon: "◎",
    label: "Instagram",
    href: "https://instagram.com/gabriellopesct",
  }
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

function PrimaryCta() {
  return (
    <a
      className={styles.primaryCta}
      href={conversationWhatsappHref}
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
          transformando complexidade em resultados claros, elegantes e processos que realmente funcionam.
        </p>
        <PrimaryCta />
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
        <div className={styles.statementCopy}>
          <li><strong>landing Pages:</strong> mais leads, menos atrito no dia a dia.</li>
          <li><strong>automações:</strong> menos tarefas, erros e tempo perdido.</li>
          <li><strong>sistemas:</strong> operações organizadas, integradas e escaláveis.</li>
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

function CasePreview({
  label,
  variant,
  image,
}: {
  label: string;
  variant: number;
  image?: string;
}) {
  return (
    <div className={`${styles.casePreview} ${variant === 2 ? styles.casePreviewAlt : ""}`}>
      <div className={styles.previewBrowser} aria-hidden="true">
        <div className={styles.previewToolbar}>
          <span />
          <span />
          <span />
          <p>{label}</p>
        </div>
        <div className="relative w-full aspect-video overflow-hidden">
          {image && (
            <Image
              src={image}
              alt={`Prévia de ${label}`}
              fill
              className="object-cover"
            />
          )}
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
            <CasePreview label={caseStudy.previewLabel} variant={index + 1} image={caseStudy.image} />
            <div className={styles.caseContent}>
              <div className={styles.caseMeta}>
                <span>{caseStudy.number}</span>
                <span>{caseStudy.category}</span>
              </div>
              <h3>{caseStudy.title}</h3>
              <p
                className={styles.caseDescription}
                style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden' }}
              >
                {caseStudy.description}
              </p>
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
            mapearemos sua situação e vemos se faz sentido trabalharmos juntos.
          </p>
        </div>
        <PrimaryCta />
      </div>

      <ContactFooter
        contactLinks={contactLinks}
        whatsappHref={whatsappUrl(
          "Olá! Vim pelo site da Manifesto e quero construir uma solução que faça sentido para o meu negócio.",
        )}
      />
    </section>
  );
}

type IntroPhase = "loading" | "exiting" | "complete";

function LoadingScreen({
  phase,
  visibleLetters,
}: {
  phase: IntroPhase;
  visibleLetters: number;
}) {
  if (phase === "complete") {
    return null;
  }

  return (
    <div
      className={`${styles.loadingScreen} ${phase === "exiting" ? styles.loadingScreenExit : ""}`}
      role="status"
      aria-label="Carregando Manifesto"
    >
      <div className={styles.loadingWord} aria-hidden="true">
        {Array.from(loadingWord).map((letter, index) => (
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

export default function Home() {
  const [introPhase, setIntroPhase] = useState<IntroPhase>("loading");
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      const reducedMotionTimer = setTimeout(() => {
        setVisibleLetters(loadingWord.length);
        setIntroPhase("complete");
      }, 0);

      return () => clearTimeout(reducedMotionTimer);
    }

    const previousOverflow = document.body.style.overflow;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const leadIn = 220;
    const letterDelay = 95;
    const wordCompleteAt = leadIn + (loadingWord.length - 1) * letterDelay;

    document.body.style.overflow = "hidden";

    Array.from(loadingWord).forEach((_, index) => {
      timers.push(
        setTimeout(() => {
          setVisibleLetters(index + 1);
        }, leadIn + index * letterDelay),
      );
    });

    timers.push(
      setTimeout(() => {
        setIntroPhase("exiting");
      }, wordCompleteAt + 520),
    );

    timers.push(
      setTimeout(() => {
        setIntroPhase("complete");
        document.body.style.overflow = previousOverflow;
      }, wordCompleteAt + 1320),
    );

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const contentIsVisible = introPhase !== "loading";

  return (
    <>
      <LoadingScreen phase={introPhase} visibleLetters={visibleLetters} />
      <div
        className={`${styles.siteShell} ${contentIsVisible ? styles.siteShellVisible : ""}`}
      >
        <Header />
        <main
          className={`${styles.page} ${contentIsVisible ? styles.pageVisible : styles.pageWaiting}`}
        >
          <HeroSection />
          <LaboratorySection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
