export type AppRoute = 'home' | 'sobrenos' | 'atuacao' | 'casos' | 'conteudos' | 'faq' | 'contato';

export type ThemeMode = 'dark' | 'light';

export interface CasePrecedent {
  id: string;
  category: 'Habeas Corpus' | 'Audiência de Custódia' | 'Tribunal do Júri' | 'Execução Penal' | 'Inquérito Policial' | 'Acordo ANPP';
  title: string;
  court: string;
  caseSummary: string;
  legalThesis: string;
  outcome: string;
  dateOrYear: string;
  pjeLink?: string;
  tags: string[];
}

export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  urgencyLevel?: 'immediate' | 'standard';
  whatsappMessage: string;
  iconName: string;
  imageUrl?: string;
  badge?: string;
}

export interface ContentArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  fullContent: string[];
  instagramRef?: string;
  date: string;
  imageUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'urgencias' | 'processual' | 'atendimento';
  whatsappFollowUp: string;
}

export interface ConfirmedLawyerProfile {
  name: string;
  specialty: string;
  mandate: string;
  city: string;
  state: string;
  phoneRaw: string;
  phoneFormatted: string;
  oabNumber: string;
  academicFormation: string;
  email: string;
  address: string;
  instagram: string;
  instagramUrl: string;
  pje1gUrl: string;
  pje2gUrl: string;
  oabCnaUrl: string;
  tjpiUrl: string;
}

