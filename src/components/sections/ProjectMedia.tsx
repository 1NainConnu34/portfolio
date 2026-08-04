import { useReducedMotion } from '@/hooks/useReducedMotion';
import type { ProjectMedia as Media } from '@/types';
import styles from './ProjectMedia.module.css';

interface ProjectMediaProps {
  media: Media;
  title: string;
  /** Vrai quand un seul média est monté à la fois (panneau desktop) : la vidéo démarre seule */
  autoPlay?: boolean;
}

export function ProjectMedia({ media, title, autoPlay = false }: ProjectMediaProps) {
  const reduced = useReducedMotion();

  return (
    <div className={styles.frame}>
      {media.type === 'image' ? (
        <img
          src={media.src}
          alt={`Aperçu de ${title}`}
          className={styles.media}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <video
          src={media.src}
          className={styles.media}
          muted
          loop
          playsInline
          controls
          autoPlay={autoPlay && !reduced}
          preload={autoPlay ? 'metadata' : 'none'}
          aria-label={`Démo vidéo de ${title}`}
        />
      )}
    </div>
  );
}
