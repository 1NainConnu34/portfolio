import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tag } from '@/components/ui/Tag';
import { GlowButton } from '@/components/ui/GlowButton';
import { Icon } from '@/components/ui/Icon';
import { ProjectCard } from './ProjectCard';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { projects } from '@/data/projects';
import styles from './Projects.module.css';

export function Projects() {
  const [selected, setSelected] = useState(0);
  const reduced = useReducedMotion();
  const project = projects[selected];

  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <SectionHeading label="Projects" sectionNumber="04" id="projects-heading" />

      {/* Desktop : deux panneaux */}
      <div className={styles.desktop}>
        {/* Liste gauche */}
        <nav className={styles.list} aria-label="Liste des projets">
          {projects.map((p, i) => (
            <button
              key={p.id}
              className={`${styles.listItem} ${i === selected ? styles.active : ''}`}
              onClick={() => setSelected(i)}
              aria-current={i === selected ? 'true' : undefined}
              data-cursor="pointer"
            >
              <span className={styles.arrow} aria-hidden="true">
                {i === selected ? '>' : ' '}
              </span>
              {p.title}
            </button>
          ))}
        </nav>

        {/* Panneau détail */}
        <div className={styles.panel}>
          <AnimatePresence mode="wait">
            <motion.article
              key={project.id}
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 1 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className={styles.detail}
            >
              <header className={styles.detailHeader}>
                <h3 className={styles.detailTitle}>{project.title}</h3>
                <div className={styles.detailLinks}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Code source de ${project.title}`}
                      className={styles.detailIconLink}
                      data-cursor="pointer"
                    >
                      <Icon name="github" size={18} />
                    </a>
                  )}
                </div>
              </header>

              <p className={styles.detailDesc}>{project.description}</p>

              <div className={styles.detailTags}>
                {project.technologies.map((tech) => (
                  <Tag key={tech} label={tech} />
                ))}
              </div>

              <div className={styles.detailCta}>
                <GlowButton
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="external" size={14} />
                  Voir le projet
                </GlowButton>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile : cards verticales */}
      <div className={styles.mobile}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  );
}
