import Link from 'next/link';
import Image from 'next/image';
import { HERO_BLUR_DATA_URL } from '@/lib/blur-data';

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 py-24 sm:min-h-screen sm:py-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/IMG-Hero.webp"
          alt="LuxAura Premium Window Treatments"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
          quality={75}
          placeholder="blur"
          blurDataURL={HERO_BLUR_DATA_URL}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-neutral-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 text-center sm:px-6">
        <h1 className="animate-fade-in mb-4 font-heading text-4xl font-bold text-white drop-shadow-lg sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
          Australia's Premier Blinds & Curtains
        </h1>
        <p
          className="animate-fade-in mb-6 text-lg text-white drop-shadow-md sm:mb-8 sm:text-xl md:text-2xl"
          style={{ animationDelay: '0.2s' }}
        >
          Premium Custom Blinds, Curtains & Window Treatments Across Australia
        </p>
        <p
          className="animate-fade-in mb-8 text-base text-white/90 drop-shadow-md sm:mb-12 sm:text-lg"
          style={{ animationDelay: '0.4s' }}
        >
          Australian Craftsmanship | Made to Measure | Free Consultation
        </p>

        <div
          className="animate-fade-in flex flex-col justify-center gap-4 sm:flex-row"
          style={{ animationDelay: '0.6s' }}
        >
          <Link href="/quote" className="btn-primary">
            Get Free Quote
          </Link>
          <Link href="#products" className="btn-secondary">
            Explore Products
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 transform animate-bounce sm:bottom-8 sm:block">
        <svg
          className="h-5 w-5 text-white drop-shadow-lg sm:h-6 sm:w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
