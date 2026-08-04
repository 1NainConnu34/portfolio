import { LANGUAGES } from '@/types';
import { useI18n } from '@/i18n';
import styles from './LanguageSwitch.module.css';

interface LanguageSwitchProps {
  className?: string;
}

export function LanguageSwitch({ className }: LanguageSwitchProps) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      className={[styles.switch, className ?? ''].filter(Boolean).join(' ')}
      role="group"
      aria-label={t.languageSwitch.label}
    >
      <span className={styles.bracket} aria-hidden="true">
        [
      </span>
      {LANGUAGES.map((code, i) => (
        <span key={code} className={styles.slot}>
          {i > 0 && (
            <span className={styles.separator} aria-hidden="true">
              |
            </span>
          )}
          <button
            className={`${styles.option} ${code === lang ? styles.active : ''}`}
            onClick={() => setLang(code)}
            aria-pressed={code === lang}
            lang={code}
            data-cursor="pointer"
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
      <span className={styles.bracket} aria-hidden="true">
        ]
      </span>
    </div>
  );
}
