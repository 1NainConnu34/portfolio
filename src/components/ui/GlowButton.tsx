import styles from './GlowButton.module.css';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'ghost';
  className?: string;
  'data-cursor'?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit';
}

export function GlowButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className,
  target,
  rel,
  type = 'button',
  ...rest
}: GlowButtonProps) {
  const cls = [styles.btn, variant === 'ghost' ? styles.ghost : styles.primary, className ?? '']
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={target}
        rel={rel}
        data-cursor="pointer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} data-cursor="pointer" {...rest}>
      {children}
    </button>
  );
}
