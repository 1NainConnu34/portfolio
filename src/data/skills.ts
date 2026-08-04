import type { SkillGroup } from '@/types';
import { l } from '@/i18n';

export const skills: SkillGroup[] = [
  {
    category: l('Frontend'),
    items: [
      l('React'),
      l('TypeScript'),
      l('JavaScript'),
      l('Next.js'),
      l('Tailwind CSS'),
      l('HTML / CSS'),
      l('Framer Motion'),
    ],
  },
  {
    category: l('Backend'),
    items: [l('Node.js'), l('Express')],
  },
  {
    category: l('Bases de données', 'Databases'),
    items: [l('MongoDB'), l('SQL')],
  },
  {
    category: l('Langages', 'Languages'),
    items: [l('C'), l('C++'), l('Python'), l('Assembleur', 'Assembly')],
  },
  {
    category: l('Systèmes & Réseau', 'Systems & Network'),
    items: [
      l('Programmation réseau', 'Network programming'),
      l('Multithreading'),
      l('IPC / Multi-processus', 'IPC / Multi-processing'),
      l('Unix / POSIX'),
      l('Shell / Bash'),
    ],
  },
  {
    category: l('Graphismes & Jeux', 'Graphics & Games'),
    items: [
      l('SFML / CSFML'),
      l('Moteur de jeu', 'Game engine'),
      l('Rendu 3D / Raytracing', '3D rendering / Raytracing'),
    ],
  },
  {
    category: l('Mobile'),
    items: [l('React Native')],
  },
  {
    category: l('Outils', 'Tools'),
    items: [
      l('Git'),
      l('GitHub'),
      l('Linux'),
      l('Docker'),
      l('Vite'),
      l('Makefile'),
      l('CMake'),
      l('WordPress'),
      l('Figma'),
      l('Trello'),
      l('Jira'),
    ],
  },
];
