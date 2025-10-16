'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import Image from 'next/image';

const products = [
  { id: 1, image: '01-Roller-Blinds.webp' },
  { id: 2, image: '02-Vertical-Sheer.webp' },
  { id: 3, image: '03-Skylight-Blinds.webp' },
  { id: 4, image: '04-Panel-Glides.webp' },
  { id: 5, image: '05-Vertical-Sheer.webp' },
  { id: 6, image: '06-Vertical-Blinds.webp' },
  { id: 7, image: '07-Wood-Blinds.webp' },
  { id: 8, image: '08-Aluminum-Blinds.webp' },
  { id: 9, image: '09-Curtain-Track.webp' },
  { id: 10, image: '10-Bamboo-Screen.webp' },
  { id: 11, image: '11-Roman-Blind.webp' },
  { id: 12, image: '12-Product.webp' },
  { id: 13, image: '13-Product.webp' },
  { id: 14, image: '14-Sheer-Elegance.webp' },
];

const MOBILE_SLICE_COUNT = 8;

export default function ProductCarousel() {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;

    if (!element || typeof IntersectionObserver === 'undefined') {
      setIsActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setIsActive(entry.isIntersecting);
        });
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') {
      return;
    }

    const media = window.matchMedia('(max-width: 640px)');

    const updateMatch = (value: boolean) => setIsMobile(value);

    updateMatch(media.matches);

    const handleChange = (event: MediaQueryListEvent) => updateMatch(event.matches);

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', handleChange);
      return () => media.removeEventListener('change', handleChange);
    }

    // Fallback for older browsers
    media.addListener(handleChange);
    return () => media.removeListener(handleChange);
  }, []);

  const baseProducts =
    isMobile && products.length > MOBILE_SLICE_COUNT
      ? products.slice(0, MOBILE_SLICE_COUNT)
      : products;

  const renderedProducts = [...baseProducts, ...baseProducts];
  type CarouselStyle = CSSProperties & { '--carousel-count'?: number };
  const animationStyle: CarouselStyle = {
    animationPlayState: isActive ? 'running' : 'paused',
    animationDuration: isMobile ? '32s' : '25s',
    '--carousel-count': baseProducts.length,
  };

  return (
    <section className="overflow-hidden bg-white py-12">
      <div className="container-custom">
        <div className="mb-8 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-neutral-800 sm:text-4xl md:text-5xl">
            Our Product Gallery
          </h2>
          <p className="mx-auto max-w-2xl text-base text-neutral-600 sm:text-lg">
            Explore our comprehensive range of premium window treatments
          </p>
        </div>

        <div className="relative overflow-hidden" ref={containerRef}>
          <div className={`flex ${isActive ? 'animate-scroll' : ''}`} style={animationStyle}>
            {renderedProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="w-[220px] flex-shrink-0 px-3 sm:w-[260px]"
              >
                <div className="overflow-hidden rounded-sm bg-white shadow-sm">
                  <div className="relative h-56">
                    <Image
                      src={`/images/carousel/${product.image}`}
                      alt={`Product ${product.id}`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 70vw, 260px"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(
              calc(
                -260px * var(--carousel-count, ${products.length}) - 12px *
                  var(--carousel-count, ${products.length})
              )
            );
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
