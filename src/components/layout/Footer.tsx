import { Icon } from '@/components/ui/Icon';
import { useI18n } from '@/i18n';
import { socials } from '@/data/socials';
import styles from './Footer.module.css';

export function Footer() {
  const { t, loc } = useI18n();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.credit}>
          {t.footer.credit}{' '}
          <a
            href="https://github.com/1NainConnu34"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            data-cursor="pointer"
          >
            Alexandre Bret
          </a>
        </p>

        <nav className={styles.socials} aria-label={t.footer.socialsLabel}>
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target={s.icon !== 'mail' ? '_blank' : undefined}
              rel={s.icon !== 'mail' ? 'noopener noreferrer' : undefined}
              aria-label={loc(s.label)}
              className={styles.socialLink}
              data-cursor="pointer"
            >
              <Icon name={s.icon} size={16} />
            </a>
          ))}
        </nav>

        <p className={styles.copy}>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
