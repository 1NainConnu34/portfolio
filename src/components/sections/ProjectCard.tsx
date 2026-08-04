import { Icon } from '@/components/ui/Icon';
import { Tag } from '@/components/ui/Tag';
import { ProjectMedia } from './ProjectMedia';
import type { Project } from '@/types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      {project.media && (
        <div className={styles.media}>
          <ProjectMedia media={project.media} title={project.title} />
        </div>
      )}
      <div className={styles.header}>
        <h3 className={styles.title}>{project.title}</h3>
        <div className={styles.links}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Code source de ${project.title} sur GitHub`}
              className={styles.iconLink}
              data-cursor="pointer"
            >
              <Icon name="github" size={18} />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Voir ${project.title}`}
              className={styles.iconLink}
              data-cursor="pointer"
            >
              <Icon name="external" size={18} />
            </a>
          )}
        </div>
      </div>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.tags}>
        {project.technologies.map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
      </div>
    </article>
  );
}
