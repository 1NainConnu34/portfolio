import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  label: string;
  sectionNumber?: string;
  id?: string;
}

export function SectionHeading({ label, sectionNumber, id }: SectionHeadingProps) {
  return (
    <div className={styles.wrapper}>
      {sectionNumber && (
        <span className={styles.number} aria-hidden="true">
          {sectionNumber}
        </span>
      )}
      <span className={styles.slash} aria-hidden="true">
        //
      </span>
      <h2 className={styles.label} id={id}>
        {label}
      </h2>
      <div className={styles.line} aria-hidden="true" />
    </div>
  );
}
