// hooks/useScrollReveal.js
// Attaches IntersectionObserver to trigger .visible class for animations
import { useEffect, useRef } from 'react';

/**
 * useScrollReveal
 * Returns a ref to attach to any element. When it enters the viewport,
 * the 'visible' class is added to trigger CSS reveal transitions.
 *
 * @param {Object} options — IntersectionObserver options
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el); // only fire once
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
