import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tag } from '@/components/ui/Tag';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { skills } from '@/data/skills';
import styles from './Skills.module.css';

export function Skills() {
  const reduced = useReducedMotion();

  return (
    <Section id="skills" aria-labelledby="skills-heading">
      <SectionHeading label="Skills" sectionNumber="02" id="skills-heading" />
      <div className={styles.groups}>
        {skills.map((group, gi) => (
          <div key={group.category} className={styles.group}>
            <p className={styles.category}>
              <span className={styles.bracket} aria-hidden="true">[</span>
              {group.category}
              <span className={styles.bracket} aria-hidden="true">]</span>
            </p>
            <motion.div
              className={styles.tags}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: reduced ? 0 : 0.04, delayChildren: reduced ? 0 : gi * 0.1 } },
                hidden: {},
              }}
            >
              {group.items.map((item) => (
                <motion.div
                  key={item}
                  variants={
                    reduced
                      ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
                      : { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }
                  }
                >
                  <Tag label={item} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
}
