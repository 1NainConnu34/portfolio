import { motion } from 'framer-motion';
import { GlowButton } from '@/components/ui/GlowButton';
import { Icon } from '@/components/ui/Icon';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import styles from './Hero.module.css';

function scrollToProjects() {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
}

export function Hero() {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: reduced ? 0 : 0.15 } },
  };

  const item = reduced
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.greeting} variants={item}>
            <span className={styles.prompt} aria-hidden="true">&gt;</span> Bonjour, je suis
          </motion.p>

          <motion.h1 className={styles.name} variants={item}>
            Alexandre Bret
          </motion.h1>

          <motion.p className={styles.role} variants={item}>
            Développeur Web &amp; Software
          </motion.p>

          <motion.p className={styles.bio} variants={item}>
            Étudiant passionné par la création de sites et d&apos;applications innovantes.
          </motion.p>

          <motion.div className={styles.cta} variants={item}>
            <GlowButton onClick={scrollToProjects}>
              Voir mes projets
            </GlowButton>
            <GlowButton
              href="https://github.com/1NainConnu34"
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" size={16} />
              GitHub
            </GlowButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Chevron scroll */}
      <motion.div
        className={styles.scrollIndicator}
        animate={reduced ? {} : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <Icon name="chevron-down" size={24} />
      </motion.div>
    </section>
  );
}
