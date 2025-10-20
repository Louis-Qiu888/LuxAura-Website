import ContactSection from '@/components/ContactSection';
import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { HERO_BLUR_DATA_URL } from '@/lib/blur-data';

export const metadata: Metadata = {
  title: 'Contact LuxAura Sydney | Free Measure & Quote - 0450 871 699',
  description:
    "Contact LuxAura for custom blinds & curtains in Sydney. Free in-home measure & quote. Call 0450 871 699 or book online. Serving all Sydney suburbs including Eastern Suburbs, North Shore & CBD.",
  keywords:
    'contact LuxAura Sydney, Sydney blinds quote, free measure Sydney, curtain consultation Sydney, blinds installer Sydney, window treatment quote Sydney, Sydney Eastern Suburbs blinds, North Shore curtains, Inner West window treatments',
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Contact Us', url: '/contact' }]);

  return (
    <div className="pt-28 lg:pt-32">
      {/* Breadcrumb Navigation */}
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Contact Us', href: '/contact' }]} />
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.webp"
            alt="LuxAura customer support background"
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
              Contact Us
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-neutral-200 drop-shadow-md">
              Get in touch with our team. We&apos;re here to help you find the perfect window
              treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Map Section (Placeholder) */}
      <section className="relative flex h-96 items-center justify-center bg-neutral-200">
        <p className="text-lg text-neutral-500">[Google Map will be embedded here]</p>
        <div className="absolute right-4 top-4 rounded bg-white px-2 py-1 font-mono text-xs text-neutral-600">
          IMG-MAP
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
