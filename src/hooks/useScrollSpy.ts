'use client';

import { useEffect, useState } from 'react';

/**
 * Watches a list of section IDs and returns whichever one is currently
 * most prominent in the viewport. Used to highlight the active nav link.
 */
export function useScrollSpy(sectionIds: string[], offset = 120): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const onScroll = () => {
      // Walk sections bottom-up and pick the first one whose top edge
      // has passed the offset threshold.
      let found = '';
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= offset) {
          found = sectionIds[i];
          break;
        }
      }
      setActiveId(found);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds, offset]);

  return activeId;
}
