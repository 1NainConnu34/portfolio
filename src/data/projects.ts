import type { Project } from '@/types';

import sh42Img from '@/assets/projects/42sh.png';
import deadlockdleImg from '@/assets/projects/deadlockdle.png';
import arcadeVideo from '@/assets/projects/arcade_FINAL.mp4';
import corewarVideo from '@/assets/projects/corewar_FINAL.mp4';
import myRpgVideo from '@/assets/projects/my_rpg_FINAL.mp4';
import nanoTekspiceImg from '@/assets/projects/nano_tekspice.png';
import plazzaVideo from '@/assets/projects/plazza_FINAL.mp4';
import raytracerImg from '@/assets/projects/raytracer.png';
import rtypeVideo from '@/assets/projects/rtype_FINAL.mp4';
import zappyVideo from '@/assets/projects/zappy_FINAL.mp4';

export const projects: Project[] = [
  {
    id: 'deadlockdle',
    title: 'Deadlockdle',
    description: "Site web avec des mini jeux dans l'univers du jeu Deadlock. Full-stack avec backend Express et base MongoDB.",
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Express', 'MongoDB'],
    media: { type: 'image', src: deadlockdleImg },
    link: 'https://deadlockdle.net',
  },
  {
    id: 'rtype',
    title: 'R-Type',
    description: "Shoot'em up multijoueur en réseau développé en C++, avec un moteur maison et un protocole binaire client/serveur.",
    technologies: ['C++', 'Réseau', 'Game Engine', 'CMake'],
    media: { type: 'video', src: rtypeVideo },
    link: 'https://github.com/1NainConnu34/r-type',
    github: 'https://github.com/1NainConnu34/r-type',
  },
  {
    id: 'zappy',
    title: 'Zappy',
    description: "Simulation d'un monde en réseau où des équipes de drones autonomes collectent des ressources pour s'élever. Serveur, IA et visualisation graphique.",
    technologies: ['C', 'C++', 'Python', 'Réseau', 'IA'],
    media: { type: 'video', src: zappyVideo },
    link: 'https://github.com/1NainConnu34/Zappy',
    github: 'https://github.com/1NainConnu34/Zappy',
  },
  {
    id: '42sh',
    title: '42sh',
    description: 'Shell UNIX complet en C : parsing, pipes, redirections, gestion des jobs, alias, historique et builtins.',
    technologies: ['C', 'Unix', 'Makefile'],
    media: { type: 'image', src: sh42Img },
    link: 'https://github.com/1NainConnu34/42sh',
    github: 'https://github.com/1NainConnu34/42sh',
  },
  {
    id: 'plazza',
    title: 'Plazza',
    description: "Simulation d'une pizzeria : gestion multi-processus et multi-thread avec communication inter-processus et répartition de charge entre cuisines.",
    technologies: ['C++', 'Threads', 'IPC', 'POO'],
    media: { type: 'video', src: plazzaVideo },
    link: 'https://github.com/1NainConnu34/The-Plazza',
    github: 'https://github.com/1NainConnu34/The-Plazza',
  },
  {
    id: 'raytracer',
    title: 'Raytracer',
    description: 'Moteur de rendu 3D par lancer de rayons en C++ : primitives, lumières, ombres, réflexions et scènes configurables.',
    technologies: ['C++', 'Maths 3D', 'POO'],
    media: { type: 'image', src: raytracerImg },
    link: 'https://github.com/1NainConnu34/RayTracer',
    github: 'https://github.com/1NainConnu34/RayTracer',
  },
  {
    id: 'corewar',
    title: 'Corewar',
    description: "Implémentation du jeu Corewar : assembleur, machine virtuelle exécutant les champions et champions écrits en assembleur maison.",
    technologies: ['C', 'Assembleur', 'Makefile'],
    media: { type: 'video', src: corewarVideo },
    link: 'https://github.com/1NainConnu34/Corewar',
    github: 'https://github.com/1NainConnu34/Corewar',
  },
  {
    id: 'arcade',
    title: 'Arcade',
    description: "Plateforme de jeux rétro où bibliothèques graphiques et jeux sont chargés dynamiquement à chaud via des librairies partagées.",
    technologies: ['C++', 'dlopen', 'POO'],
    media: { type: 'video', src: arcadeVideo },
    link: 'https://github.com/1NainConnu34/Arcade',
    github: 'https://github.com/1NainConnu34/Arcade',
  },
  {
    id: 'nano-tekspice',
    title: 'Nano Tekspice',
    description: 'Simulateur de circuits logiques en C++ : composants élémentaires, portes, chaînage des liens et shell interactif de simulation.',
    technologies: ['C++', 'POO', 'Parsing'],
    media: { type: 'image', src: nanoTekspiceImg },
    link: 'https://github.com/1NainConnu34/Tekspice',
    github: 'https://github.com/1NainConnu34/Tekspice',
  },
  {
    id: 'my-rpg',
    title: 'My RPG',
    description: "RPG top-down développé en C avec la bibliothèque CSFML. Système de combat, exploration de niveaux et gestion d'inventaire.",
    technologies: ['C', 'CSFML', 'Makefile'],
    link: 'https://github.com/1NainConnu34/my_rpg',
    github: 'https://github.com/1NainConnu34/my_rpg',
    media: { type: 'video', src: myRpgVideo },
  },
  {
    id: 'phoenix-hunter',
    title: 'Phoenix Hunter',
    description: "Jeu en C inspiré de Duck Hunt. Développé avec la bibliothèque CSFML pour le rendu graphique et la gestion des événements.",
    technologies: ['C', 'CSFML', 'Makefile'],
    link: 'https://github.com/1NainConnu34/Phoenix-Hunter',
    github: 'https://github.com/1NainConnu34/Phoenix-Hunter',
  },
];
