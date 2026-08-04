import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useUIStore } from '@/store/uiStore';
import { useI18n } from '@/i18n';
import styles from './LoadingScreen.module.css';

export function LoadingScreen() {
  const setLoading = useUIStore((s) => s.setLoading);
  const reduced = useReducedMotion();
  const { t } = useI18n();
  const bootLines = t.loading.lines;
  const { displayedLines, isComplete } = useTypingEffect(
    bootLines,
    reduced ? 0 : 4
  );

  useEffect(() => {
    if (isComplete || reduced) {
      const timer = setTimeout(() => setLoading(false), reduced ? 300 : 200);
      return () => clearTimeout(timer);
    }
  }, [isComplete, reduced, setLoading]);

  const progress = reduced
    ? 100
    : Math.round((displayedLines.length / bootLines.length) * 100);

  return (
    <motion.div
      className={styles.screen}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Scanline overlay */}
      <div className={styles.scanline} aria-hidden="true" />

      {/* Contenu terminal */}
      <div className={styles.terminal} role="status" aria-live="polite" aria-label={t.loading.ariaLabel}>
        <div className={styles.header}>
          <span className={styles.dot} style={{ background: '#ff5f56' }} />
          <span className={styles.dot} style={{ background: '#ffbd2e' }} />
          <span className={styles.dot} style={{ background: '#27c93f' }} />
          <span className={styles.title}>system_boot.sh</span>
        </div>

        <div className={styles.body}>
          {(reduced ? bootLines : displayedLines).map((line, i) => (
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
          transition={{ duration: 0.15, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}
