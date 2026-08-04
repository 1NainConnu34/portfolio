import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useI18n, type Dictionary } from '@/i18n';
import styles from './About.module.css';

interface CodeLine {
  indent: number;
  content: React.ReactNode;
}

function CodeBlock({ lines, ariaLabel }: { lines: CodeLine[]; ariaLabel: string }) {
  const reduced = useReducedMotion();
  return (
    <div className={styles.code} aria-label={ariaLabel}>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          className={styles.codeLine}
          initial={reduced ? { opacity: 1 } : { opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: reduced ? 0 : i * 0.07, duration: 0.3 }}
        >
          <span className={styles.lineNum} aria-hidden="true">
            {String(i + 1).padStart(2, ' ')}
          </span>
          <span style={{ paddingLeft: `${line.indent * 1.5}rem` }}>{line.content}</span>
        </motion.div>
      ))}
    </div>
  );
}

/** Une ligne `prop: "valeur",` du bloc de code */
function propLine(name: string, value: string, comma = true): CodeLine {
  return {
    indent: 1,
    content: (
      <>
        <span className={styles.prop}>{name}</span>
        <span className={styles.colon}>:</span>{' '}
        <span className={styles.string}>&quot;{value}&quot;</span>
        {comma && <span className={styles.comma}>,</span>}
      </>
    ),
  };
}

function buildCodeLines(t: Dictionary): CodeLine[] {
  return [
    {
      indent: 0,
      content: (
        <>
          <span className={styles.keyword}>const</span>{' '}
          <span className={styles.varName}>alexandre</span>{' '}
          <span className={styles.operator}>=</span>{' '}
          <span className={styles.brace}>{'{'}</span>
        </>
      ),
    },
    propLine('name', 'Alexandre Bret'),
    propLine('role', t.about.role),
    propLine('location', t.about.location),
    propLine('education', t.about.education),
    {
      indent: 1,
      content: (
        <>
          <span className={styles.prop}>interests</span>
          <span className={styles.colon}>:</span>{' '}
          <span className={styles.brace}>[</span>
        </>
      ),
    },
    ...t.about.interests.map((interest) => ({
      indent: 2,
      content: <span className={styles.string}>&quot;{interest}&quot;</span>,
    })),
    { indent: 1, content: <span className={styles.brace}>]</span> },
    propLine('status', t.about.status),
    {
      indent: 1,
      content: (
        <>
          <span className={styles.prop}>available</span>
          <span className={styles.colon}>:</span>{' '}
          <span className={styles.bool}>true</span>
        </>
      ),
    },
    { indent: 0, content: <span className={styles.brace}>{'}'}</span> },
  ];
}

export function About() {
  const { t } = useI18n();

  return (
    <Section id="about" aria-labelledby="about-heading">
      <SectionHeading label={t.nav.about} sectionNumber="01" id="about-heading" />
      <CodeBlock lines={buildCodeLines(t)} ariaLabel={t.about.codeAriaLabel} />
    </Section>
  );
}
