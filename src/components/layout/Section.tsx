import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
  'aria-labelledby'?: string;
}

export function Section({ id, children, className, fullHeight, 'aria-labelledby': labelledby }: SectionProps) {
  const reduced = useReducedMotion();

  const variants = reduced
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      };

  return (
    <motion.section
      id={id}
      className={`${styles.section} ${fullHeight ? styles.fullHeight : ''} ${className ?? ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variants}
      aria-labelledby={labelledby}
    >
      <div className={styles.inner}>{children}</div>
    </motion.section>
  );
}
