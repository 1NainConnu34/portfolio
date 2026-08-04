import type { Localized } from '@/types';

/**
 * Raccourci pour déclarer une chaîne traduite.
 * `l('Réseau', 'Network')` → { fr: 'Réseau', en: 'Network' }
 * `l('React')` → identique dans les deux langues (noms propres, technos…)
 */
export function l(fr: string, en?: string): Localized {
  return { fr, en: en ?? fr };
}
