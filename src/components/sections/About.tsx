import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import styles from './About.module.css';

interface CodeLine {
  indent: number;
  content: React.ReactNode;
}

function CodeBlock({ lines }: { lines: CodeLine[] }) {
  const reduced = useReducedMotion();
  return (
    <div className={styles.code} aria-label="À propos d'Alexandre Bret en format code">
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

const codeLines: CodeLine[] = [
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
  {
    indent: 1,
    content: (
      <>
        <span className={styles.prop}>name</span>
        <span className={styles.colon}>:</span>{' '}
        <span className={styles.string}>&quot;Alexandre Bret&quot;</span>
        <span className={styles.comma}>,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className={styles.prop}>role</span>
        <span className={styles.colon}>:</span>{' '}
        <span className={styles.string}>&quot;Développeur Web &amp; Software&quot;</span>
        <span className={styles.comma}>,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className={styles.prop}>location</span>
        <span className={styles.colon}>:</span>{' '}
        <span className={styles.string}>&quot;France&quot;</span>
        <span className={styles.comma}>,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className={styles.prop}>education</span>
        <span className={styles.colon}>:</span>{' '}
        <span className={styles.string}>&quot;Étudiant en informatique&quot;</span>
        <span className={styles.comma}>,</span>
      </>
    ),
  },
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
  {
    indent: 2,
    content: <span className={styles.string}>&quot;Création de sites innovants&quot;</span>,
  },
  {
    indent: 2,
    content: <span className={styles.string}>&quot;Développement d&apos;applications&quot;</span>,
  },
  {
    indent: 2,
    content: <span className={styles.string}>&quot;Design d&apos;expériences utilisateur&quot;</span>,
  },
  { indent: 1, content: <span className={styles.brace}>]</span> },
  {
    indent: 1,
    content: (
      <>
        <span className={styles.prop}>status</span>
        <span className={styles.colon}>:</span>{' '}
        <span className={styles.string}>&quot;Recherche de stage&quot;</span>
        <span className={styles.comma}>,</span>
      </>
    ),
  },
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

export function About() {
  return (
    <Section id="about" aria-labelledby="about-heading">
      <SectionHeading label="About" sectionNumber="01" id="about-heading" />
      <CodeBlock lines={codeLines} />
    </Section>
  );
}
