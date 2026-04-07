import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useUIStore } from '@/store/uiStore';
import styles from './LoadingScreen.module.css';

const BOOT_LINES = [
  '> SYSTEM_INIT...',
  '> Loading modules... [OK]',
  '> Establishing connection... [OK]',
  '> User profile loaded: Alexandre Bret',
  '> Role: Développeur Web & Software',
  '> Status: READY',
  '> Launching interface...',
];

export function LoadingScreen() {
  const setLoading = useUIStore((s) => s.setLoading);
  const reduced = useReducedMotion();
  const { displayedLines, isComplete } = useTypingEffect(
    BOOT_LINES,
    reduced ? 0 : 8
  );

  useEffect(() => {
    if (isComplete || reduced) {
      const timer = setTimeout(() => setLoading(false), reduced ? 800 : 500);
      return () => clearTimeout(timer);
    }
  }, [isComplete, reduced, setLoading]);

  const progress = reduced
    ? 100
    : Math.round((displayedLines.length / BOOT_LINES.length) * 100);

  return (
    <motion.div
      className={styles.screen}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Scanline overlay */}
      <div className={styles.scanline} aria-hidden="true" />

      {/* Contenu terminal */}
      <div className={styles.terminal} role="status" aria-live="polite" aria-label="Chargement">
        <div className={styles.header}>
          <span className={styles.dot} style={{ background: '#ff5f56' }} />
          <span className={styles.dot} style={{ background: '#ffbd2e' }} />
          <span className={styles.dot} style={{ background: '#27c93f' }} />
          <span className={styles.title}>system_boot.sh</span>
        </div>

        <div className={styles.body}>
          {(reduced ? BOOT_LINES : displayedLines).map((line, i) => (
            <div key={i} className={styles.line}>
              <span
                className={
                  line.includes('[OK]')
                    ? styles.lineOk
                    : line.startsWith('>')
                    ? styles.linePrompt
                    : styles.lineText
                }
              >
                {line}
              </span>
            </div>
          ))}
          {!isComplete && !reduced && (
            <span className={styles.cursor} aria-hidden="true">
              █
            </span>
          )}
        </div>
      </div>

      {/* Barre de progression */}
      <div className={styles.progressBar} aria-hidden="true">
        <motion.div
          className={styles.progressFill}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}
