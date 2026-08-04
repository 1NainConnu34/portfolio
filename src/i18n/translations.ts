import type { Language } from '@/types';

const fr = {
  meta: {
    title: 'Alexandre Bret — Portfolio',
    description: 'Alexandre Bret — Développeur Web & Software',
  },

  skipToContent: 'Aller au contenu',

  languageSwitch: {
    label: 'Changer de langue',
    switchTo: 'Passer en anglais',
  },

  nav: {
    about: 'À propos',
    skills: 'Compétences',
    experience: 'Expérience',
    projects: 'Projets',
    contact: 'Contact',
    backToTop: 'Retour en haut',
    mainNav: 'Navigation principale',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    menuLabel: 'Menu navigation',
  },

  loading: {
    ariaLabel: 'Chargement',
    lines: [
      '> SYSTEM_INIT...',
      '> Chargement des modules... [OK]',
      '> Établissement de la connexion... [OK]',
      '> Profil utilisateur chargé : Alexandre Bret',
      '> Rôle : Développeur Web & Software',
      '> Statut : PRÊT',
      '> Lancement de l\'interface...',
    ],
  },

  hero: {
    ariaLabel: 'Introduction',
    greeting: 'Bonjour, je suis',
    role: 'Développeur Web & Software',
    bio: 'Étudiant passionné par la création de sites et d\'applications innovantes.',
    ctaProjects: 'Voir mes projets',
  },

  about: {
    codeAriaLabel: 'À propos d\'Alexandre Bret en format code',
    role: 'Développeur Web & Software',
    location: 'France',
    education: 'Étudiant en informatique',
    interests: [
      'Création de sites innovants',
      'Développement d\'applications',
      'Design d\'expériences utilisateur',
    ],
    status: 'Recherche de stage',
  },

  projects: {
    listLabel: 'Liste des projets',
    viewProject: 'Voir le projet',
    sourceOf: (title: string) => `Code source de ${title}`,
    viewOf: (title: string) => `Voir ${title}`,
    previewOf: (title: string) => `Aperçu de ${title}`,
    videoOf: (title: string) => `Démo vidéo de ${title}`,
  },

  contact: {
    intro: 'Une question, une opportunité, une idée ? Je suis disponible et réponds rapidement.',
    terminal: {
      whoami: 'visiteur',
      message: 'Envoie-moi un message !',
    },
    copy: 'Copier',
    copied: 'Copié !',
    copyAria: 'Copier l\'email',
    copiedAria: 'Email copié !',
    socialsLabel: 'Réseaux sociaux',
    emailCta: 'M\'envoyer un email',
  },

  footer: {
    credit: 'Conçu & développé par',
    socialsLabel: 'Liens sociaux',
  },
};

export type Dictionary = typeof fr;

const en: Dictionary = {
  meta: {
    title: 'Alexandre Bret — Portfolio',
    description: 'Alexandre Bret — Web & Software Developer',
  },

  skipToContent: 'Skip to content',

  languageSwitch: {
    label: 'Change language',
    switchTo: 'Switch to French',
  },

  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    backToTop: 'Back to top',
    mainNav: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuLabel: 'Navigation menu',
  },

  loading: {
    ariaLabel: 'Loading',
    lines: [
      '> SYSTEM_INIT...',
      '> Loading modules... [OK]',
      '> Establishing connection... [OK]',
      '> User profile loaded: Alexandre Bret',
      '> Role: Web & Software Developer',
      '> Status: READY',
      '> Launching interface...',
    ],
  },

  hero: {
    ariaLabel: 'Introduction',
    greeting: 'Hi, I\'m',
    role: 'Web & Software Developer',
    bio: 'Student passionate about building innovative websites and applications.',
    ctaProjects: 'View my projects',
  },

  about: {
    codeAriaLabel: 'About Alexandre Bret, in code form',
    role: 'Web & Software Developer',
    location: 'France',
    education: 'Computer science student',
    interests: [
      'Building innovative websites',
      'Application development',
      'Designing user experiences',
    ],
    status: 'Looking for an internship',
  },

  projects: {
    listLabel: 'Project list',
    viewProject: 'View project',
    sourceOf: (title: string) => `${title} source code`,
    viewOf: (title: string) => `View ${title}`,
    previewOf: (title: string) => `${title} preview`,
    videoOf: (title: string) => `${title} video demo`,
  },

  contact: {
    intro: 'A question, an opportunity, an idea? I\'m available and reply quickly.',
    terminal: {
      whoami: 'visitor',
      message: 'Send me a message!',
    },
    copy: 'Copy',
    copied: 'Copied!',
    copyAria: 'Copy email address',
    copiedAria: 'Email copied!',
    socialsLabel: 'Social networks',
    emailCta: 'Send me an email',
  },

  footer: {
    credit: 'Designed & built by',
    socialsLabel: 'Social links',
  },
};

export const translations: Record<Language, Dictionary> = { fr, en };
