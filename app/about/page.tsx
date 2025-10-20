import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { HERO_BLUR_DATA_URL } from '@/lib/blur-data';

export const metadata: Metadata = {
  title: 'About LuxAura | Premium Sydney Window Treatment Specialists',
  description:
    "Sydney's trusted window treatment experts. Over a decade crafting custom blinds & curtains. Australian quality, European design. Family owned, serving all Sydney suburbs.",
  keywords:
    'about LuxAura Sydney, Sydney window treatment specialists, custom blinds company Sydney, Australian blinds maker, luxury curtain specialists Sydney, quality craftsmanship, Sydney interior design, family owned business, Australian window treatments',
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'About Us', url: '/about' }]);

  return (
    <div className="pt-28 lg:pt-32">
      {/* Breadcrumb Navigation */}
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'About Us', href: '/about' }]} />
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.webp"
            alt="LuxAura team delivering premium window treatments"
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
              About LuxAura
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-neutral-200 drop-shadow-md">
              Crafting premium window treatments with passion, precision, and Australian excellence
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-8 font-heading text-4xl font-bold text-neutral-800">Our Story</h2>
          <div className="space-y-6 text-lg text-neutral-600">
            <p>
              LuxAura was born from a simple belief: that every window deserves to be dressed with
              elegance, quality, and attention to detail. What started as a passion for transforming
              spaces has grown into a trusted name in custom window treatments.
            </p>
            <p>
              With over a decade of experience, we&apos;ve helped thousands of Australian homes and
              businesses find the perfect blinds, curtains, and soft furnishings. Our commitment to
              craftsmanship, personalized service, and quality materials sets us apart.
            </p>
            <p>
              Every product we create is made to measure, ensuring a perfect fit and finish. We work
              closely with our clients from initial consultation through to installation, making the
              entire process seamless and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="mb-12 text-center font-heading text-4xl font-bold text-neutral-800">
            Our Values
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 text-center">
              <div className="mb-4 text-5xl">🏆</div>
              <h3 className="mb-3 font-heading text-2xl font-semibold text-neutral-800">
                Quality First
              </h3>
              <p className="text-neutral-600">
                We never compromise on quality. From materials to craftsmanship, excellence is our
                standard.
              </p>
            </div>

            <div className="p-8 text-center">
              <div className="mb-4 text-5xl">🤝</div>
              <h3 className="mb-3 font-heading text-2xl font-semibold text-neutral-800">
                Customer Focused
              </h3>
              <p className="text-neutral-600">
                Your vision guides our work. We listen, advise, and deliver solutions tailored to
                your needs.
              </p>
            </div>

            <div className="p-8 text-center">
              <div className="mb-4 text-5xl">🦘</div>
              <h3 className="mb-3 font-heading text-2xl font-semibold text-neutral-800">
                Australian
              </h3>
              <p className="text-neutral-600">
                Proudly Australian owned and operated, supporting local craftsmanship and
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-12 text-center font-heading text-4xl font-bold text-neutral-800">
            Why Choose LuxAura?
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 text-2xl text-primary">✓</div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-800">Expert Consultation</h3>
                <p className="text-neutral-600">
                  Our experienced team provides personalized advice to help you choose the perfect
                  window treatments for your space.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 text-2xl text-primary">✓</div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-800">Premium Materials</h3>
                <p className="text-neutral-600">
                  We source only the finest fabrics and components, ensuring durability and timeless
                  beauty.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 text-2xl text-primary">✓</div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-800">
                  Precision Manufacturing
                </h3>
                <p className="text-neutral-600">
                  Every product is custom-made to your exact specifications with meticulous
                  attention to detail.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 text-2xl text-primary">✓</div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-800">
                  Professional Installation
                </h3>
                <p className="text-neutral-600">
                  Our skilled installers ensure perfect fitting and finish, with minimal disruption
                  to your home.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 text-2xl text-primary">✓</div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-800">
                  Up to 5 Years Warranty*
                </h3>
                <p className="text-neutral-600">
                  We stand behind our work with a comprehensive warranty, giving you complete peace
                  of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-800 text-center text-white">
        <div className="container-custom max-w-3xl">
          <h2 className="mb-6 font-heading text-4xl font-bold">Ready to Get Started?</h2>
          <p className="mb-8 text-xl text-neutral-300">
            Let&apos;s transform your space together. Book your free consultation today.
          </p>
          <Link href="/quote" className="btn-primary">
            Get Free Quote
          </Link>
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
