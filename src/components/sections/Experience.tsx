import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useI18n } from '@/i18n';
import { experiences } from '@/data/experience';
import styles from './Experience.module.css';

export function Experience() {
  const reduced = useReducedMotion();
  const { t, loc } = useI18n();

  return (
    <Section id="experience" aria-labelledby="experience-heading">
      <SectionHeading label={t.nav.experience} sectionNumber="03" id="experience-heading" />
      <div className={styles.timeline}>
        {/* Ligne verticale */}
        <motion.div
          className={styles.line}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 0.8, ease: 'easeOut', delay: 0.2 }}
          style={{ originY: 0 }}
          aria-hidden="true"
        />

        {experiences.map((exp, i) => (
          <motion.article
            key={i}
            className={styles.entry}
            initial={reduced ? { opacity: 1 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reduced ? 0 : 0.3 + i * 0.18, duration: 0.5 }}
          >
            {/* Nœud losange */}
            <div className={styles.node} aria-hidden="true">
              <div className={styles.diamond} />
            </div>

            <div className={styles.content}>
              <time className={styles.date}>{loc(exp.date)}</time>
              <h3 className={styles.role}>{loc(exp.role)}</h3>
              <p className={styles.company}>{loc(exp.company)}</p>
              <p className={styles.description}>{loc(exp.description)}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
