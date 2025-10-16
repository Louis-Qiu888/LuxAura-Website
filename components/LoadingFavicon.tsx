'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function LoadingFavicon() {
  const pathname = usePathname();

  useEffect(() => {
    // 确保 favicon 存在
    let favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement | null;
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.href = '/logo.svg';
      document.head.appendChild(favicon);
    }

    // 保存原始 favicon
    const originalHref = favicon.href || '/logo.svg';

    // 点击链接时显示加载图标
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href]') as HTMLAnchorElement | null;
      
      if (!anchor || event.defaultPrevented || event.button !== 0) return;
      
      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }

      if (anchor.target && anchor.target !== '_self') return;
      if (anchor.hasAttribute('download')) return;
      if (anchor.origin && anchor.origin !== window.location.origin) return;

      const faviconLink = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      if (faviconLink) {
        faviconLink.href = '/loading-favicon.svg';
      }
    };

    document.addEventListener('click', handleLinkClick, { passive: true });

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // 路径改变时恢复原始 favicon
  useEffect(() => {
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (favicon) {
      const timer = setTimeout(() => {
        favicon.href = '/logo.svg';
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
