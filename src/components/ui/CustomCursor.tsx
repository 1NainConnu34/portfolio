import { useCustomCursor } from '@/hooks/useCustomCursor';
import styles from './CustomCursor.module.css';

export function CustomCursor() {
  const { x, y, isPointer, isVisible } = useCustomCursor();

  return (
    <>
      {/* Anneau extérieur (avec léger délai) */}
      <div
        className={`${styles.ring} ${isPointer ? styles.pointer : ''} ${!isVisible ? styles.hidden : ''}`}
        style={{ transform: `translate(${x - (isPointer ? 22 : 16)}px, ${y - (isPointer ? 22 : 16)}px)` }}
        aria-hidden="true"
      />
      {/* Point central */}
      <div
        className={`${styles.dot} ${isPointer ? styles.dotHidden : ''} ${!isVisible ? styles.hidden : ''}`}
        style={{ transform: `translate(${x - 3}px, ${y - 3}px)` }}
        aria-hidden="true"
      />
    </>
  );
}
