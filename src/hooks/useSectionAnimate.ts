'use client';

import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to every element carrying the
 * `.section-animate` class and adds `.is-visible` once it enters the
 * viewport. Pair with the CSS in globals.css for the actual animation.
 */
export function useSectionAnimate() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.section-animate');

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Once visible, no need to keep observing
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05, // trigger smoothly when 5% of the element enters viewport (ideal for mobile screens)
        rootMargin: '0px 0px -20px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
