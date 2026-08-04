import type { SocialLink } from '@/types';
import { l } from '@/i18n';

export const socials: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/1NainConnu34',
    label: l('Voir mon GitHub', 'View my GitHub'),
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/alexandre-bret/',
    label: l('Mon profil LinkedIn', 'My LinkedIn profile'),
    icon: 'linkedin',
  },
  {
    platform: 'itch.io',
    url: 'https://1nainconnu34.itch.io/',
    label: l('Mes jeux sur itch.io', 'My games on itch.io'),
    icon: 'itchio',
  },
  {
    platform: 'Email',
    url: 'mailto:alexandrebret.84@gmail.com',
    label: l('M\'envoyer un email', 'Send me an email'),
    icon: 'mail',
  },
];
