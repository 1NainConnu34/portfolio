import styles from './GlitchText.module.css';

interface GlitchTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span';
  className?: string;
  glitchOnHover?: boolean;
  periodic?: boolean;
}

export function GlitchText({
  text,
  as: Tag = 'h2',
  className,
  glitchOnHover = false,
  periodic = false,
}: GlitchTextProps) {
  const cls = [
    styles.glitch,
    glitchOnHover ? styles.onHover : '',
    periodic ? styles.periodic : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={cls} data-text={text}>
      {text}
    </Tag>
  );
}
