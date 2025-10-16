'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(prev => (prev !== scrolled ? scrolled : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateScrollState);
      }
    };

    updateScrollState();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Curtains & Sheers', href: '/curtains-sheers' },
    { name: 'Blinds', href: '/blinds' },
    { name: 'Motorisation', href: '/motorisation' },
    { name: 'About', href: '/about' },
    { name: 'Trade Registration', href: '/trade' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between gap-6 py-6 lg:py-8">
          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 items-center pr-2">
            <Image
              src="/logo.svg"
              alt="LuxAura"
              width={180}
              height={180}
              priority
              className="h-[72px] w-auto -translate-y-1 md:h-[80px] lg:h-[92px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-center space-x-3 px-4 lg:flex xl:space-x-5">
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={true}
                  className={`whitespace-nowrap py-2 text-sm font-medium transition-colors duration-200 xl:text-base ${
                    isActive
                      ? 'border-b-2 border-primary font-semibold text-primary'
                      : 'text-neutral-800 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden flex-shrink-0 lg:block">
            <Link
              href="/quote"
              className="btn-primary px-5 py-2.5 text-xs xl:px-7 xl:py-3 xl:text-sm"
            >
              Free Measure & Quote
            </Link>
          </div>

          {/* Mobile Menu Button - 更大的触摸区域 */}
          <button
            className="flex h-12 w-12 items-center justify-center text-neutral-800 focus:outline-none lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="h-8 w-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - 优化触摸体验 */}
        {isMobileMenuOpen && (
          <div className="mt-4 border-t border-neutral-200 pb-6 pt-4 lg:hidden">
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={true}
                  className={`flex min-h-[56px] items-center rounded px-4 py-4 text-base font-medium transition-colors active:scale-95 sm:text-lg ${
                    isActive
                      ? 'border-l-4 border-primary bg-primary/5 font-semibold text-primary'
                      : 'text-neutral-800 hover:bg-neutral-50 hover:text-primary'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/quote"
              className="btn-primary mt-6 inline-block w-full py-4 text-center text-base active:scale-95 sm:text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Free Measure & Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
