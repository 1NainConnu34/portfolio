import { useEffect, useRef, useState } from 'react';

interface CursorState {
  x: number;
  y: number;
  isPointer: boolean;
  isVisible: boolean;
}

export function useCustomCursor(): CursorState {
  const [cursor, setCursor] = useState<CursorState>({
    x: -100,
    y: -100,
    isPointer: false,
    isVisible: false,
  });

  const rafId = useRef<number>(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const el = document.elementFromPoint(e.clientX, e.clientY);
        const isPointer = el
          ? window.getComputedStyle(el).cursor === 'pointer' ||
            el.closest('a, button, [role="button"], [data-cursor="pointer"]') !== null
          : false;

        setCursor({ x: e.clientX, y: e.clientY, isPointer, isVisible: true });
      });
    };

    const handleLeave = () => setCursor((prev) => ({ ...prev, isVisible: false }));
    const handleEnter = () => setCursor((prev) => ({ ...prev, isVisible: true }));

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return cursor;
}
