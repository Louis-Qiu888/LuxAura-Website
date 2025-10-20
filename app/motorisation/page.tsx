import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Motorised Blinds Sydney | Smart Home Window Automation',
  description:
    "Smart motorised blinds & curtains in Sydney. Home automation, remote control & voice activated. Expert installation. Free consultation across Sydney suburbs.",
  keywords:
    'motorised blinds Sydney, smart blinds Sydney, automated curtains Sydney, home automation Sydney, electric blinds Sydney, remote control blinds Sydney, smart home window treatments Sydney, voice controlled blinds, motorized shades Sydney, Sydney blind automation',
  alternates: {
    canonical: `${SITE_CONFIG.url}/motorisation`,
  },
};

export default function MotorisationPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Motorisation', url: '/motorisation' },
  ]);

  return (
    <>
      {/* Breadcrumb Navigation - separate from dark background */}
      <div className="bg-white pt-28 lg:pt-32">
        <div className="container-custom pb-4">
          <Breadcrumb items={[{ label: 'Motorisation', href: '/motorisation' }]} />
        </div>
      </div>

      <div className="min-h-screen bg-neutral-900">
        {/* Hero Video Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
              <source src="/videos/motorisation-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-neutral-900/50"></div>
          </div>

          {/* Content - Minimal text on video */}
          <div className="relative z-10 px-4 py-20 text-center sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-6 font-heading text-5xl font-bold text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl">
                LuxAura Motorized System Series
              </h1>
              <p className="mb-10 text-xl text-white/90 drop-shadow-lg sm:text-2xl md:text-3xl">
                Transform Light Into An Art Form
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/quote" className="btn-primary text-lg">
                  Request Consultation
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary border-white bg-white/10 text-lg text-white backdrop-blur-sm hover:bg-white/20"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce sm:block">
            <svg
              className="h-6 w-6 text-white drop-shadow-lg"
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

        {/* Brand Story Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl space-y-8 text-center">
              <div className="space-y-6 text-lg text-neutral-700 sm:text-xl">
                <p>
                  With over <strong>30 years of expertise</strong> and a presence in{' '}
                  <strong>30 countries worldwide</strong>, LuxAura, the exclusive Sydney distributor
                  of Many Blinds, brings world-class smart shading technology to every space.
                </p>

                <p>
                  The LuxAura Motorized System Series offers a complete range of intelligent shading
                  solutions — including motorized curtains, roller blinds, venetian blinds, and
                  sheer shades — all crafted with exceptional quality and precision.
                </p>

                <p>
                  Whether it&apos;s a sophisticated home or a commercial project, LuxAura seamlessly
                  combines advanced automation, refined design, and enduring performance to
                  transform light into an art form.
                </p>

                <p className="text-xl italic text-neutral-600 sm:text-2xl">
                  Meaning &quot;the aura of light,&quot; LuxAura reflects our commitment to
                  excellence, intelligence, and elegance — creating products that empower designers,
                  developers, and homeowners to elevate both aesthetics and functionality through
                  smart living.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <h2 className="mb-12 text-center font-heading text-4xl font-bold text-neutral-800">
              Smart Shading Solutions
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-sm bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 text-6xl">🎭</div>
                <h3 className="mb-3 font-heading text-xl font-semibold text-neutral-800">
                  Motorized Curtains
                </h3>
                <p className="text-neutral-600">Elegant automation for luxury drapes and sheers</p>
              </div>

              <div className="rounded-sm bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 text-6xl">🪟</div>
                <h3 className="mb-3 font-heading text-xl font-semibold text-neutral-800">
                  Roller Blinds
                </h3>
                <p className="text-neutral-600">Smart control for modern roller systems</p>
              </div>

              <div className="rounded-sm bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 text-6xl">🎚️</div>
                <h3 className="mb-3 font-heading text-xl font-semibold text-neutral-800">
                  Venetian Blinds
                </h3>
                <p className="text-neutral-600">Precision tilt and lift automation</p>
              </div>

              <div className="rounded-sm bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 text-6xl">✨</div>
                <h3 className="mb-3 font-heading text-xl font-semibold text-neutral-800">
                  Sheer Shades
                </h3>
                <p className="text-neutral-600">Whisper-quiet light diffusion control</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-neutral-800 text-center text-white">
          <div className="container-custom max-w-3xl">
            <h2 className="mb-6 font-heading text-4xl font-bold">
              Experience the Future of Window Treatments
            </h2>
            <p className="mb-8 text-xl text-neutral-300">
              Discover how LuxAura&apos;s motorized solutions can transform your space with
              effortless control and timeless elegance.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/quote" className="btn-primary">
                Get Free Quote
              </Link>
              <Link
                href="/blinds"
                className="btn-secondary border-white bg-white text-neutral-800 hover:bg-neutral-100"
              >
                View Products
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
