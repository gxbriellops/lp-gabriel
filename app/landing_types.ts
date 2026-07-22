export type NavigationLink = {
  label: string;
  href: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type CaseStudy = {
  number: string;
  category: string;
  image?: string;
  title: string;
  description: string;
  results: readonly string[];
  href: string;
  previewLabel: string;
};

export type ContactLink = {
  icon: string;
  label: string;
  href: string;
};
