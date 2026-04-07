import styles from './Tag.module.css';

interface TagProps {
  label: string;
  variant?: 'cyan' | 'dim';
}

export function Tag({ label, variant = 'cyan' }: TagProps) {
  return (
    <span className={`${styles.tag} ${variant === 'dim' ? styles.dim : styles.cyan}`}>
      {label}
    </span>
  );
}
