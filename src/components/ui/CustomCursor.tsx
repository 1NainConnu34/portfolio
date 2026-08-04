import { useRef, useEffect } from 'react';
import { useCustomCursor } from '@/hooks/useCustomCursor';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import styles from './CustomCursor.module.css';

const TRAIL_MAX_AGE = 28;
const LERP = 0.13; // facteur d'interpolation : 13% de la distance restante par frame

export function CustomCursor() {
  const { x, y, isPointer, isVisible } = useCustomCursor();
  const reduced = useReducedMotion();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Refs pour la boucle rAF (pas de React state = pas de re-render inutile)
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const trail = useRef<{ x: number; y: number; age: number }[]>([]);
  const isPointerRef = useRef(false);
  const animFrame = useRef(0);

  // Sync isPointer state → ref (lu dans la boucle rAF)
  useEffect(() => { isPointerRef.current = isPointer; }, [isPointer]);

  // Mousemove direct pour la position précise (bypassé React state)
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const { clientX: mx, clientY: my } = e;
      mousePos.current = { x: mx, y: my };
      // Initialiser le ring à la première position (évite le lerp depuis le coin)
      if (ringPos.current.x === -100) {
        ringPos.current = { x: mx, y: my };
      }
    };
    document.addEventListener('mousemove', onMove, { passive: true });
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  // Resize canvas
  useEffect(() => {
    if (reduced) return;
    const resize = () => {
      const c = canvasRef.current;
      if (c) { c.width = window.innerWidth; c.height = window.innerHeight; }
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [reduced]);

  // Boucle unifiée : lerp ring + trail canvas
  useEffect(() => {
    if (reduced) return;
    let lastSpawn = 0;

    const loop = (time: number) => {
      const { x: mx, y: my } = mousePos.current;

      // 1. Lerp : ring suit la souris avec un délai doux
      ringPos.current.x += (mx - ringPos.current.x) * LERP;
      ringPos.current.y += (my - ringPos.current.y) * LERP;

      if (ringRef.current) {
        const offset = isPointerRef.current ? 22 : 16;
        ringRef.current.style.left = `${ringPos.current.x - offset}px`;
        ringRef.current.style.top = `${ringPos.current.y - offset}px`;
      }

      // 2. Trail : ajouter un point toutes les ~16ms
      if (time - lastSpawn > 16 && mx !== -100) {
        trail.current.push({ x: mx, y: my, age: 0 });
        lastSpawn = time;
      }

      const alive: typeof trail.current = [];
      for (const p of trail.current) {
        p.age++;
        if (p.age < TRAIL_MAX_AGE) alive.push(p);
      }
      trail.current = alive;

      // 3. Dessiner trail sur le canvas
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (const p of trail.current) {
            const life = 1 - p.age / TRAIL_MAX_AGE;
            ctx.beginPath();
            ctx.arc(p.x, p.y, life * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 213, ${life * 0.45})`;
            ctx.fill();
            if (p.age < 6) {
              ctx.beginPath();
              ctx.arc(p.x, p.y, life * 8, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(0, 255, 213, ${life * 0.08})`;
              ctx.fill();
            }
          }
        }
      }

      animFrame.current = requestAnimationFrame(loop);
    };

    animFrame.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrame.current);
  }, [reduced]);

  return (
    <>
      {/* Canvas trail */}
      {!reduced && (
        <canvas ref={canvasRef} className={styles.trailCanvas} aria-hidden="true" />
      )}

      {/* Glow radial — centré via translate(-50%,-50%) */}
      {!reduced && (
        <div
          className={`${styles.glow} ${!isVisible ? styles.hidden : ''}`}
          style={{ left: x, top: y }}
          aria-hidden="true"
        />
      )}

      {/* Ring — position gérée par la boucle lerp via ref, pas par React */}
      <div
        ref={ringRef}
        className={`${styles.ring} ${isPointer ? styles.pointer : ''} ${!isVisible ? styles.hidden : ''}`}
        aria-hidden="true"
      />

      {/* Dot — toujours à la position exacte de la souris */}
      <div
        className={`${styles.dot} ${isPointer ? styles.dotHidden : ''} ${!isVisible ? styles.hidden : ''}`}
        style={{ left: x - 3, top: y - 3 }}
        aria-hidden="true"
      />
    </>
  );
}
