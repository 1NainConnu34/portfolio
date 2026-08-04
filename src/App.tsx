import { lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useUIStore } from '@/store/uiStore';
import { useActiveSection } from '@/hooks/useActiveSection';
import { LanguageProvider, useI18n } from '@/i18n';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LoadingScreen } from '@/components/sections/LoadingScreen';
import { Hero } from '@/components/sections/Hero';

const About = lazy(() => import('@/components/sections/About').then((m) => ({ default: m.About })));
const Skills = lazy(() => import('@/components/sections/Skills').then((m) => ({ default: m.Skills })));
const Experience = lazy(() => import('@/components/sections/Experience').then((m) => ({ default: m.Experience })));
const Projects = lazy(() => import('@/components/sections/Projects').then((m) => ({ default: m.Projects })));
const Contact = lazy(() => import('@/components/sections/Contact').then((m) => ({ default: m.Contact })));

const SECTION_IDS = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];

function MainContent() {
  useActiveSection(SECTION_IDS);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function AppShell() {
  const isLoading = useUIStore((s) => s.isLoading);
  const { t } = useI18n();

  return (
    <>
      {/* Skip to content */}
      <a href="#main-content" className="skip-to-content">
        {t.skipToContent}
      </a>

      <CustomCursor />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <MainContent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}
