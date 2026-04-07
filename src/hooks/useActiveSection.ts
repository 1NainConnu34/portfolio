import { useEffect } from 'react';
import { useUIStore } from '@/store/uiStore';

export function useActiveSection(sectionIds: string[]): void {
  const setActiveSection = useUIStore((s) => s.setActiveSection);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibilityMap = new Map<string, number>();

    const getTopSection = () => {
      let topId = sectionIds[0];
      let maxRatio = 0;
      visibilityMap.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          topId = id;
        }
      });
      return topId;
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibilityMap.set(id, entry.intersectionRatio);
          });
          setActiveSection(getTopSection());
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1] }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds, setActiveSection]);
}
