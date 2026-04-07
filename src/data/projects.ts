import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'deadlockdle',
    title: 'Deadlockdle',
    description: "Site web avec des mini jeux dans l'univers du jeu Deadlock. Full-stack avec backend Express et base MongoDB.",
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Express', 'MongoDB'],
    link: 'https://deadlockdle.net',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: 'Ce portfolio cyberpunk, construit from scratch avec Vite, React et TypeScript. Animations via Framer Motion, CSS Modules pour le styling.',
    technologies: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'CSS Modules'],
    link: 'https://1NainConnu34.github.io/portfolio',
    github: 'https://github.com/1NainConnu34/portfolio',
  },
  {
    id: 'phoenix-hunter',
    title: 'Phoenix Hunter',
    description: "Jeu en C inspiré de Duck Hunt. Développé avec la bibliothèque CSFML pour le rendu graphique et la gestion des événements.",
    technologies: ['C', 'CSFML', 'Makefile'],
    link: 'https://github.com/1NainConnu34/Phoenix-Hunter',
    github: 'https://github.com/1NainConnu34/Phoenix-Hunter',
  },
  {
    id: 'my-rpg',
    title: 'My RPG',
    description: "RPG top-down développé en C avec la bibliothèque CSFML. Système de combat, exploration de niveaux et gestion d'inventaire.",
    technologies: ['C', 'CSFML', 'Makefile'],
    link: 'https://github.com/1NainConnu34/my_rpg',
    github: 'https://github.com/1NainConnu34/my_rpg',
  },
];
