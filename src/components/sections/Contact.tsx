import { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowButton } from '@/components/ui/GlowButton';
import { Icon } from '@/components/ui/Icon';
import { socials } from '@/data/socials';
import styles from './Contact.module.css';

const EMAIL = 'alexandrebret.84@gmail.com';

const TERMINAL_LINES = [
  { type: 'prompt', text: '$ whoami' },
  { type: 'output', text: '  visiteur' },
  { type: 'prompt', text: '$ cat contact.txt' },
  { type: 'output', text: `  Email    : ${EMAIL}` },
  { type: 'output', text: '  GitHub   : github.com/1NainConnu34' },
  { type: 'output', text: '  LinkedIn : linkedin.com/in/alexandre-bret' },
  { type: 'prompt', text: "$ echo \"Envoie-moi un message !\"" },
  { type: 'output', text: '  Envoie-moi un message !' },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" aria-labelledby="contact-heading">
      <SectionHeading label="Contact" sectionNumber="05" id="contact-heading" />

      <div className={styles.grid}>
        {/* Terminal décoratif (aria-hidden) */}
        <div className={styles.terminal} aria-hidden="true">
          <div className={styles.termHeader}>
            <span className={styles.dot} style={{ background: '#ff5f56' }} />
            <span className={styles.dot} style={{ background: '#ffbd2e' }} />
            <span className={styles.dot} style={{ background: '#27c93f' }} />
            <span className={styles.termTitle}>contact.sh</span>
          </div>
          <div className={styles.termBody}>
            {TERMINAL_LINES.map((line, i) => (
              <div key={i} className={styles.termLine}>
                <span className={line.type === 'prompt' ? styles.termPrompt : styles.termOutput}>
                  {line.text}
                </span>
              </div>
            ))}
            <span className={styles.termCursor}>█</span>
          </div>
        </div>

        {/* Section accessible */}
        <div className={styles.accessible}>
          <p className={styles.intro}>
            Une question, une opportunité, une idée ? Je suis disponible et réponds rapidement.
          </p>

          {/* Email */}
          <div className={styles.emailBlock}>
            <div className={styles.emailAddress}>
              <Icon name="mail" size={16} />
              <a
                href={`mailto:${EMAIL}`}
                className={styles.emailLink}
                data-cursor="pointer"
              >
                {EMAIL}
              </a>
            </div>
            <button
              className={styles.copyBtn}
              onClick={copyEmail}
              aria-label={copied ? 'Email copié !' : 'Copier l\'email'}
              data-cursor="pointer"
            >
              <Icon name={copied ? 'check' : 'copy'} size={15} />
              <span>{copied ? 'Copié !' : 'Copier'}</span>
            </button>
          </div>

          {/* Liens sociaux */}
          <nav className={styles.socialList} aria-label="Réseaux sociaux">
            {socials
              .filter((s) => s.icon !== 'mail')
              .map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialItem}
                  data-cursor="pointer"
                >
                  <Icon name={s.icon} size={18} />
                  <span>{s.platform}</span>
                  <Icon name="external" size={12} className={styles.extIcon} />
                </a>
              ))}
          </nav>

          <div className={styles.cta}>
            <GlowButton href={`mailto:${EMAIL}`}>
              <Icon name="mail" size={15} />
              M&apos;envoyer un email
            </GlowButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
