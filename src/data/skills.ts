import type { SkillGroup } from '@/types';

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'HTML / CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'SQL'],
  },
  {
    category: 'Languages',
    items: ['C', 'C++', 'Python', 'Assembleur'],
  },
  {
    category: 'Systems & Network',
    items: ['Programmation réseau', 'Multithreading', 'IPC / Multi-processus', 'Unix / POSIX', 'Shell / Bash'],
  },
  {
    category: 'Graphics & Games',
    items: ['SFML / CSFML', 'Moteur de jeu', 'Rendu 3D / Raytracing'],
  },
  {
    category: 'Mobile',
    items: ['React Native'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Linux', 'Docker', 'Vite', 'Makefile', 'CMake', 'WordPress', 'Figma', 'Trello', 'Jira'],
  },
];
