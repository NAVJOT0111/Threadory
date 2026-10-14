import { useEffect, useRef, useState } from 'react';
import { ScrollRestoration, useLocation } from 'react-router';

/**
 * Scrolls to top on navigation and restores position on back and forward.
 * After each route change focus moves to the page H1 and the new title is announced politely.
 */
export function ScrollManager() {
  const { pathname } = useLocation();
  const first = useRef(true);
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const id = window.setTimeout(() => {
      const h1 = document.querySelector<HTMLElement>('main h1');
      if (h1) {
        h1.setAttribute('tabindex', '-1');
        h1.focus({ preventScroll: true });
      }
      setAnnouncement(document.title);
    }, 50);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return (
    <>
      <ScrollRestoration getKey={(location) => location.pathname} />
      <div role="status" aria-live="polite" className="sr-only">
        {announcement}
      </div>
    </>
  );
}
