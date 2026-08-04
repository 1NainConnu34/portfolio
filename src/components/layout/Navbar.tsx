import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useUIStore } from '@/store/uiStore';
import { useI18n } from '@/i18n';
import { Icon } from '@/components/ui/Icon';
import { LanguageSwitch } from '@/components/ui/LanguageSwitch';
import styles from './Navbar.module.css';

const NAV_IDS = ['about', 'skills', 'experience', 'projects', 'contact'] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Navbar() {
  const direction = useScrollDirection();
  const activeSection = useUIStore((s) => s.activeSection);
  const isMobileMenuOpen = useUIStore((s) => s.isMobileMenuOpen);
  const toggleMobileMenu = useUIStore((s) => s.toggleMobileMenu);
  const closeMobileMenu = useUIStore((s) => s.closeMobileMenu);
  const { t } = useI18n();
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = NAV_IDS.map((id) => ({ id, label: t.nav[id] }));

  // Fermer le menu au clic en dehors
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeMobileMenu();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Fermer au ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobileMenu();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [closeMobileMenu]);

  return (
    <motion.header
      className={styles.nav}
      animate={{ y: direction === 'down' ? -80 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <button
          className={styles.logo}
          onClick={() => scrollTo('hero')}
          aria-label={t.nav.backToTop}
          data-cursor="pointer"
        >
          <span className={styles.logoText}>AB</span>
        </button>

        {/* Liens desktop */}
        <nav className={styles.links} aria-label={t.nav.mainNav}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`${styles.link} ${activeSection === link.id ? styles.active : ''}`}
              onClick={() => scrollTo(link.id)}
              data-cursor="pointer"
            >
              <span className={styles.linkSlash} aria-hidden="true">
                //
              </span>
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions droite */}
        <div className={styles.actions}>
          <LanguageSwitch />

          {/* Burger mobile */}
          <button
            className={styles.burger}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isMobileMenuOpen}
            data-cursor="pointer"
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={menuRef}
            className={styles.mobileMenu}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.menuLabel}
          >
            <nav>
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  className={`${styles.mobileLink} ${activeSection === link.id ? styles.active : ''}`}
                  onClick={() => {
                    scrollTo(link.id);
                    closeMobileMenu();
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  data-cursor="pointer"
                >
                  <span className={styles.mobileLinkSlash} aria-hidden="true">
                    //
                  </span>
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
