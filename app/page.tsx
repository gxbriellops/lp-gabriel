import { ContactSection } from "./contact_section";
import { Header } from "./header";
import { HeroSection } from "./hero_section";
import { LaboratorySection } from "./laboratory_section";
import { LandingShell } from "./landing_shell";
import type {
  CaseStudy,
  ContactLink,
  NavigationLink,
  ProcessStep,
} from "./landing_types";
import styles from "./page.module.css";

const whatsappNumber = "5583986080850";

function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const conversationWhatsappHref = whatsappUrl(
  "Olá! Vim pelo site da Manifesto e gostaria de agendar uma conversa sobre uma solução para o meu negócio.",
);

const footerWhatsappHref = whatsappUrl(
  "Olá! Vim pelo site da Manifesto e quero construir uma solução que faça sentido para o meu negócio.",
);

const navigationLinks = [
  { label: "INÍCIO", href: "#inicio" },
  { label: "LABORATÓRIO", href: "#laboratorio" },
  { label: "CONTATO", href: "#contato" },
] satisfies readonly NavigationLink[];

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
] satisfies readonly ProcessStep[];

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
      "MOSTRUÁRIO DE IMÓVEIS",
    ],
    href: "https://www.lincolnpirescorretor.com/",
    previewLabel:
      "CASE_01",
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
      "MAPS INTEGRADO",
    ],
    href: "https://www.dramaureliasilva.com/",
    previewLabel: "CASE_02",
  },
] satisfies readonly CaseStudy[];

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
  },
] satisfies readonly ContactLink[];

export default function Home() {
  return (
    <LandingShell>
      <Header
        navigationLinks={navigationLinks}
        conversationWhatsappHref={conversationWhatsappHref}
      />
      <main className={styles.page}>
        <HeroSection conversationWhatsappHref={conversationWhatsappHref} />
        <LaboratorySection processSteps={processSteps} caseStudies={caseStudies} />
        <ContactSection
          contactLinks={contactLinks}
          conversationWhatsappHref={conversationWhatsappHref}
          footerWhatsappHref={footerWhatsappHref}
        />
      </main>
    </LandingShell>
  );
}
