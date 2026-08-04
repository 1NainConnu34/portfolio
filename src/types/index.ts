export const LANGUAGES = ['fr', 'en'] as const;

export type Language = (typeof LANGUAGES)[number];

/** Une chaîne déclinée dans chaque langue supportée */
export type Localized = Record<Language, string>;

export interface ProjectMedia {
  type: 'image' | 'video';
  /** URL résolue par Vite (import du fichier dans src/assets/projects) */
  src: string;
}

export interface Project {
  id: string;
  title: string;
  description: Localized;
  technologies: Localized[];
  link?: string;
  github?: string;
  media?: ProjectMedia;
}

export interface Experience {
  date: Localized;
  role: Localized;
  company: Localized;
  description: Localized;
}

export interface SkillGroup {
  category: Localized;
  items: Localized[];
}

export interface SocialLink {
  platform: string;
  url: string;
  label: Localized;
  icon: 'github' | 'linkedin' | 'itchio' | 'mail';
}
