import type { Project } from '@/types';
import { l } from '@/i18n';

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
    description: l(
      "Site web avec des mini jeux dans l'univers du jeu Deadlock. Full-stack avec backend Express et base MongoDB.",
      'Website featuring mini games set in the universe of the game Deadlock. Full-stack, with an Express backend and a MongoDB database.'
    ),
    technologies: [
      l('React'),
      l('Next.js'),
      l('TypeScript'),
      l('Tailwind'),
      l('Express'),
      l('MongoDB'),
    ],
    media: { type: 'image', src: deadlockdleImg },
    link: 'https://deadlockdle.net',
  },
  {
    id: 'rtype',
    title: 'R-Type',
    description: l(
      "Shoot'em up multijoueur en réseau développé en C++, avec un moteur maison et un protocole binaire client/serveur.",
      "Networked multiplayer shoot'em up built in C++, with a custom engine and a binary client/server protocol."
    ),
    technologies: [l('C++'), l('Réseau', 'Network'), l('Game Engine'), l('CMake')],
    media: { type: 'video', src: rtypeVideo },
    link: 'https://github.com/1NainConnu34/r-type',
    github: 'https://github.com/1NainConnu34/r-type',
  },
  {
    id: 'zappy',
    title: 'Zappy',
    description: l(
      "Simulation d'un monde en réseau où des équipes de drones autonomes collectent des ressources pour s'élever. Serveur, IA et visualisation graphique.",
      'Simulation of a networked world where teams of autonomous drones gather resources to level up. Server, AI and graphical visualisation.'
    ),
    technologies: [l('C'), l('C++'), l('Python'), l('Réseau', 'Network'), l('IA', 'AI')],
    media: { type: 'video', src: zappyVideo },
    link: 'https://github.com/1NainConnu34/Zappy',
    github: 'https://github.com/1NainConnu34/Zappy',
  },
  {
    id: '42sh',
    title: '42sh',
    description: l(
      'Shell UNIX complet en C : parsing, pipes, redirections, gestion des jobs, alias, historique et builtins.',
      'Full UNIX shell written in C: parsing, pipes, redirections, job control, aliases, history and builtins.'
    ),
    technologies: [l('C'), l('Unix'), l('Makefile')],
    media: { type: 'image', src: sh42Img },
    link: 'https://github.com/1NainConnu34/42sh',
    github: 'https://github.com/1NainConnu34/42sh',
  },
  {
    id: 'plazza',
    title: 'Plazza',
    description: l(
      "Simulation d'une pizzeria : gestion multi-processus et multi-thread avec communication inter-processus et répartition de charge entre cuisines.",
      'Pizzeria simulation: multi-process and multi-threaded management with inter-process communication and load balancing across kitchens.'
    ),
    technologies: [l('C++'), l('Threads'), l('IPC'), l('POO', 'OOP')],
    media: { type: 'video', src: plazzaVideo },
    link: 'https://github.com/1NainConnu34/The-Plazza',
    github: 'https://github.com/1NainConnu34/The-Plazza',
  },
  {
    id: 'raytracer',
    title: 'Raytracer',
    description: l(
      'Moteur de rendu 3D par lancer de rayons en C++ : primitives, lumières, ombres, réflexions et scènes configurables.',
      '3D ray tracing render engine in C++: primitives, lights, shadows, reflections and configurable scenes.'
    ),
    technologies: [l('C++'), l('Maths 3D', '3D Math'), l('POO', 'OOP')],
    media: { type: 'image', src: raytracerImg },
    link: 'https://github.com/1NainConnu34/RayTracer',
    github: 'https://github.com/1NainConnu34/RayTracer',
  },
  {
    id: 'corewar',
    title: 'Corewar',
    description: l(
      "Implémentation du jeu Corewar : assembleur, machine virtuelle exécutant les champions et champions écrits en assembleur maison.",
      'Implementation of the Corewar game: assembler, virtual machine running the champions, and champions written in a custom assembly language.'
    ),
    technologies: [l('C'), l('Assembleur', 'Assembly'), l('Makefile')],
    media: { type: 'video', src: corewarVideo },
    link: 'https://github.com/1NainConnu34/Corewar',
    github: 'https://github.com/1NainConnu34/Corewar',
  },
  {
    id: 'arcade',
    title: 'Arcade',
    description: l(
      "Plateforme de jeux rétro où bibliothèques graphiques et jeux sont chargés dynamiquement à chaud via des librairies partagées.",
      'Retro gaming platform where graphics libraries and games are hot-swapped at runtime through shared libraries.'
    ),
    technologies: [l('C++'), l('dlopen'), l('POO', 'OOP')],
    media: { type: 'video', src: arcadeVideo },
    link: 'https://github.com/1NainConnu34/Arcade',
    github: 'https://github.com/1NainConnu34/Arcade',
  },
  {
    id: 'nano-tekspice',
    title: 'Nano Tekspice',
    description: l(
      'Simulateur de circuits logiques en C++ : composants élémentaires, portes, chaînage des liens et shell interactif de simulation.',
      'Logic circuit simulator in C++: elementary components, gates, link chaining and an interactive simulation shell.'
    ),
    technologies: [l('C++'), l('POO', 'OOP'), l('Parsing')],
    media: { type: 'image', src: nanoTekspiceImg },
    link: 'https://github.com/1NainConnu34/Tekspice',
    github: 'https://github.com/1NainConnu34/Tekspice',
  },
  {
    id: 'my-rpg',
    title: 'My RPG',
    description: l(
      "RPG top-down développé en C avec la bibliothèque CSFML. Système de combat, exploration de niveaux et gestion d'inventaire.",
      'Top-down RPG built in C with the CSFML library. Combat system, level exploration and inventory management.'
    ),
    technologies: [l('C'), l('CSFML'), l('Makefile')],
    link: 'https://github.com/1NainConnu34/my_rpg',
    github: 'https://github.com/1NainConnu34/my_rpg',
    media: { type: 'video', src: myRpgVideo },
  },
  {
    id: 'phoenix-hunter',
    title: 'Phoenix Hunter',
    description: l(
      "Jeu en C inspiré de Duck Hunt. Développé avec la bibliothèque CSFML pour le rendu graphique et la gestion des événements.",
      'Duck Hunt inspired game written in C. Built with the CSFML library for graphics rendering and event handling.'
    ),
    technologies: [l('C'), l('CSFML'), l('Makefile')],
    link: 'https://github.com/1NainConnu34/Phoenix-Hunter',
    github: 'https://github.com/1NainConnu34/Phoenix-Hunter',
  },
];
