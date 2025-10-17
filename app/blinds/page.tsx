import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { HERO_BLUR_DATA_URL } from '@/lib/blur-data';

export const metadata: Metadata = {
  title: 'Australia Blinds - Custom Roller, Roman, Venetian & More | LuxAura',
  description:
    "Australia's premium custom blinds collection. Roller, Roman, Venetian, Panel Glide, Vertical & Honeycomb blinds. Made to measure in Australia. Free measure & quote. Shop Australia blinds today!",
  keywords:
    'Australia blinds, custom blinds Australia, roller blinds Australia, roman blinds Australia, venetian blinds Australia, panel glide blinds, vertical blinds, honeycomb blinds Australia, cellular blinds, made to measure blinds, blockout blinds, Australian made blinds, motorised blinds Australia, luxury blinds Australia',
  alternates: {
    canonical: `${SITE_CONFIG.url}/blinds`,
  },
};

const blindTypes = [
  {
    name: 'Roller Blinds',
    description: 'Sleek and modern, perfect for any room with excellent light control options.',
    features: ['Light filtering or blockout', 'Easy to operate', 'Wide fabric selection'],
    imageId: 'IMG-I',
  },
  {
    name: 'Roman Blinds',
    description: 'Elegant fabric folds that add softness and sophistication to your windows.',
    features: ['Luxury fabrics', 'Custom patterns', 'Soft cascading folds'],
    imageId: 'IMG-J',
  },
  {
    name: 'Venetian Blinds',
    description: 'Classic horizontal slats offering precise light and privacy control.',
    features: ['Timber or aluminum', 'Adjustable slats', 'Durable & long-lasting'],
    imageId: 'IMG-K',
  },
  {
    name: 'Sheer Shade',
    description: 'Soft, elegant fabric that diffuses light beautifully while maintaining privacy.',
    features: ['Soft light diffusion', 'Privacy control', 'Contemporary style'],
    imageId: 'IMG-L',
  },
  {
    name: 'Vertical Blinds',
    description: 'Practical solution for wide windows and sliding doors.',
    features: ['Easy maintenance', 'Light control', 'Various materials'],
    imageId: 'IMG-M',
  },
  {
    name: 'Cellular/Honeycomb Blinds',
    description: 'Energy-efficient blinds with superior insulation properties.',
    features: ['Energy saving', 'Sound absorption', 'Light diffusion'],
    imageId: 'IMG-N',
  },
];

export default function BlindsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Custom Blinds', url: '/blinds' }]);

  return (
    <div className="pt-28 lg:pt-32">
      {/* Breadcrumb Navigation */}
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Custom Blinds', href: '/blinds' }]} />
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/blinds-hero.webp"
            alt="LuxAura custom blinds hero background"
            fill
            className="object-cover"
            sizes="100vw"
            loading="eager"
            placeholder="blur"
            blurDataURL={HERO_BLUR_DATA_URL}
          />
          <div className="absolute inset-0 bg-neutral-900/50" aria-hidden="true"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 py-20 text-center text-white">
          <div className="container-custom">
            <h1 className="mb-6 font-heading text-5xl font-bold drop-shadow-lg md:text-6xl">
              Australia Blinds
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-neutral-200 drop-shadow-md">
              Discover Australia's finest custom-made blinds, tailored to perfection for your
              windows. From modern roller blinds to elegant Romans, we have the perfect solution
              for every space across Australia.
            </p>
            <Link href="/quote" className="btn-primary">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Blind Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {blindTypes.map((blind, index) => (
              <div key={blind.name} className="bg-neutral-50 p-8 transition-shadow hover:shadow-lg">
                <div className="relative mb-6 flex h-64 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-200 to-neutral-300 md:h-80">
                  {blind.imageId === 'IMG-I' ||
                  blind.imageId === 'IMG-J' ||
                  blind.imageId === 'IMG-K' ||
                  blind.imageId === 'IMG-L' ||
                  blind.imageId === 'IMG-M' ||
                  blind.imageId === 'IMG-N' ? (
                    <Image
                      src={`/images/${blind.imageId}.webp`}
                      alt={blind.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={75}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  ) : (
                    <>
                      <span className="font-heading text-4xl text-neutral-400">
                        {blind.name[0]}
                      </span>
                      <span className="mt-2 font-mono text-sm text-neutral-500">
                        {blind.imageId}
                      </span>
                    </>
                  )}
                </div>

                <h3 className="mb-3 font-heading text-2xl font-semibold text-neutral-800">
                  {blind.name}
                </h3>
                <p className="mb-4 text-neutral-600">{blind.description}</p>

                <ul className="space-y-2">
                  {blind.features.map(feature => (
                    <li key={feature} className="flex items-center text-sm text-neutral-600">
                      <svg
                        className="mr-2 h-4 w-4 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="mb-12 text-center font-heading text-4xl font-bold text-neutral-800">
            Why Choose Our Blinds?
          </h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-heading text-2xl font-semibold text-neutral-800">
                Custom Made to Measure
              </h3>
              <p className="mb-4 text-neutral-600">
                Every blind is precision-made to fit your exact window dimensions. Our expert team
                ensures perfect measurements for a flawless fit every time.
              </p>
              <p className="text-neutral-600">
                With hundreds of fabric options, colors, and finishes, you&apos;ll find the perfect
                match for your interior design.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-heading text-2xl font-semibold text-neutral-800">
                Quality Materials
              </h3>
              <p className="mb-4 text-neutral-600">
                We use only premium materials and components, ensuring your blinds not only look
                beautiful but also stand the test of time.
              </p>
              <p className="text-neutral-600">
                All blinds come with up to 5 years warranty* and are made right here in Australia by
                skilled craftspeople.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-800 text-center text-white">
        <div className="container-custom max-w-3xl">
          <h2 className="mb-6 font-heading text-4xl font-bold">Ready to Transform Your Windows?</h2>
          <p className="mb-8 text-xl text-neutral-300">
            Book your free in-home consultation today and discover the perfect blinds for your
            space.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/quote" className="btn-primary">
              Get Free Quote
            </Link>
            <Link
              href="/contact"
              className="btn-secondary border-white bg-white text-neutral-800 hover:bg-neutral-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}
