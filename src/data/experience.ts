import type { Experience } from '@/types';
import { l } from '@/i18n';

export const experiences: Experience[] = [
  {
    date: l('Septembre/Octobre 2026 — Février 2027', 'September/October 2026 — February 2027'),
    role: l(
      'Recherche de stage à temps partiel (lundi au mercredi)',
      'Looking for a part-time internship (Monday to Wednesday)'
    ),
    company: l('En cours', 'Ongoing'),
    description: l(
      'Recherche active d\'un stage à temps partiel de développeur web, mobile ou logiciel de 5-6 mois.',
      'Actively looking for a 5-6 month part-time internship as a web, mobile or software developer.'
    ),
  },
  {
    date: l('Avril 2025 — Août 2025', 'April 2025 — August 2025'),
    role: l('Stagiaire Développeur mobile', 'Mobile Developer Intern'),
    company: l('Koovea'),
    description: l(
      'Développement d\'une application mobile complète en React Native. Mise en ligne de l\'application sur l\'Apple store et le Play store',
      'Built a complete mobile application in React Native. Published the app on the Apple Store and the Play Store.'
    ),
  },
  {
    date: l('Octobre 2023 — Novembre 2023', 'October 2023 — November 2023'),
    role: l('Stagiaire Développeur d\'application', 'Application Developer Intern'),
    company: l('Ateliers Jaco'),
    description: l(
      'Développement d\'un bot Discord et intégration d\'un chatbot pour automatiser les interactions avec la communauté.',
      'Built a Discord bot and integrated a chatbot to automate interactions with the community.'
    ),
  },
  {
    date: l('Juillet 2023 — Septembre 2023', 'July 2023 — September 2023'),
    role: l('Stagiaire Développeur Web', 'Web Developer Intern'),
    company: l('BIG ARTISAN'),
    description: l(
      'Création et maintenance de sites WordPress. Configuration de l\'hébergement via OVH.',
      'Built and maintained WordPress websites. Set up hosting through OVH.'
    ),
  },
];
