export interface ProjectMedia {
  type: 'image' | 'video';
  /** URL résolue par Vite (import du fichier dans src/assets/projects) */
  src: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  media?: ProjectMedia;
}

export interface Experience {
  date: string;
  role: string;
  company: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon: 'github' | 'linkedin' | 'itchio' | 'mail';
}
