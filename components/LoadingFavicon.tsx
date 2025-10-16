'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ensureFavicon = () => {
  let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    link.href = '/logo.svg';
    document.head.appendChild(link);
  }

  if (!link.dataset.originalHref) {
    link.dataset.originalHref = link.href || '/logo.svg';
  }

  return link;
};

export default function LoadingFavicon() {
  const pathname = usePathname();

  useEffect(() => {
    const favicon = ensureFavicon();

    const handleLinkClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) {
        return;
      }

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href]') as HTMLAnchorElement | null;
      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }

      if (anchor.target && anchor.target !== '_self') {
        return;
      }

      if (anchor.hasAttribute('download')) {
        return;
      }

      if (anchor.origin && anchor.origin !== window.location.origin) {
        return;
      }

      if (favicon) {
        favicon.href = '/loading-favicon.svg';
      }
    };

    document.addEventListener('click', handleLinkClick, { passive: true });

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  useEffect(() => {
    const favicon =
      (document.querySelector("link[rel*='icon']") as HTMLLinkElement | null) || ensureFavicon();
    const originalHref = favicon?.dataset.originalHref || favicon?.href || '/logo.svg';

    const timeout = window.setTimeout(() => {
      if (favicon) {
        favicon.href = originalHref;
      }
    }, 120);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
