import { useEffect, useRef, useState } from 'react';

interface TypingResult {
  displayedLines: string[];
  isComplete: boolean;
}

export function useTypingEffect(lines: string[], speed = 30): TypingResult {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    const result: string[] = [];

    const tick = () => {
      if (currentLine >= lines.length) {
        setIsComplete(true);
        return;
      }

      const line = lines[currentLine];

      if (currentChar <= line.length) {
        result[currentLine] = line.slice(0, currentChar);
        setDisplayedLines([...result]);
        currentChar++;
        timeoutRef.current = setTimeout(tick, speed);
      } else {
        currentLine++;
        currentChar = 0;
        // Petite pause entre les lignes
        timeoutRef.current = setTimeout(tick, speed * 3);
      }
    };

    tick();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [lines, speed]);

  return { displayedLines, isComplete };
}
