import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { HERO_BLUR_DATA_URL } from '@/lib/blur-data';
import { SITE_CONFIG } from '@/lib/constants';
import dynamic from 'next/dynamic';

const TradeForm = dynamic(() => import('@/components/TradeForm'), {
  loading: () => (
    <section className="rounded-sm bg-white p-8 text-center text-sm text-neutral-500 sm:text-base">
      Loading trade application form…
    </section>
  ),
});

export const metadata: Metadata = {
  title: 'Trade & Wholesale Partnerships | LuxAura',
  description:
    'Register your trade or wholesale interest with LuxAura. Interior designers, builders, and retailers can access exclusive pricing and tailored support for premium window treatments.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/trade`,
  },
};

export default function TradePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Trade Registration', url: '/trade' },
  ]);

  return (
    <div className="pt-28 lg:pt-32">
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Trade & Wholesale', href: '/trade' }]} />
      </div>

      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/trade-hero.webp"
            alt="LuxAura trade and wholesale partnership background"
            fill
            className="object-cover"
            sizes="100vw"
            loading="eager"
            placeholder="blur"
            blurDataURL={HERO_BLUR_DATA_URL}
          />
          <div className="absolute inset-0 bg-neutral-900/60" aria-hidden="true"></div>
        </div>

        <div className="relative z-10 px-4 py-20 text-center text-white sm:px-6">
          <div className="container-custom">
            <h1 className="mb-6 font-heading text-4xl font-bold drop-shadow-lg md:text-5xl lg:text-6xl">
              Exclusive Trade & Wholesale Partnership
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-neutral-200 drop-shadow-md md:text-2xl">
              Designed for Interior Designers, Builders, Retailers, and Commercial Projects
            </p>
            <div className="mt-10">
              <a href="#trade-form" className="btn-primary inline-block text-lg">
                Get Trade Access
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <div className="space-y-6 text-center text-lg text-neutral-700">
            <p>
              Looking for a reliable blinds and curtains supplier you can trust with exclusive trade
              pricing?
            </p>
            <p>
              At LuxAura, we make it easy for professionals to source premium custom window
              furnishings at competitive wholesale rates.
            </p>
            <p>
              With our Sydney-based warehouse and dedicated support team, you&apos;ll enjoy fast
              delivery, personalised service, and products crafted with lasting quality and style.
            </p>
            <div className="my-12 rounded-sm bg-neutral-50 p-8">
              <p className="font-heading text-2xl font-semibold text-neutral-800 md:text-3xl">
                Experience superior craftsmanship with wholesale value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="mb-12 text-center font-heading text-4xl font-bold text-neutral-800">
            Trade Program Benefits
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '💰',
                title: 'Exclusive Trade Pricing',
                description:
                  'Competitive wholesale rates for all our premium window treatment products.',
              },
              {
                icon: '🚚',
                title: 'Fast Delivery',
                description: 'Sydney-based warehouse ensuring quick turnaround for your projects.',
              },
              {
                icon: '🎨',
                title: 'Design Support',
                description:
                  'Dedicated team to help you specify the perfect solutions for your clients.',
              },
              {
                icon: '📦',
                title: 'Bulk Ordering',
                description:
                  'Volume discounts available for large commercial and residential projects.',
              },
              {
                icon: '🏆',
                title: 'Premium Quality',
                description:
                  'Australian craftsmanship with up to 5 years warranty* on all products.',
              },
              {
                icon: '🤝',
                title: 'Dedicated Account Manager',
                description: 'Your personal contact for all orders, quotes, and project support.',
              },
            ].map(benefit => (
              <div key={benefit.title} className="rounded-sm bg-white p-8 text-center shadow-sm">
                <div className="mb-4 text-5xl">{benefit.icon}</div>
                <h3 className="mb-3 font-heading text-xl font-semibold text-neutral-800">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-12 text-center font-heading text-4xl font-bold text-neutral-800">
            Who Can Join?
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                icon: '🎨',
                title: 'Interior Designers',
                description:
                  'Specify premium window treatments for your residential and commercial projects.',
              },
              {
                icon: '🏗️',
                title: 'Builders & Developers',
                description:
                  'Reliable supply partner for new construction and renovation projects.',
              },
              {
                icon: '🏪',
                title: 'Retailers',
                description:
                  'Stock premium custom window furnishings with competitive wholesale pricing.',
              },
              {
                icon: '🏢',
                title: 'Commercial Projects',
                description:
                  'Tailored solutions for offices, hospitality, and large-scale developments.',
              },
            ].map(group => (
              <div key={group.title} className="flex items-start rounded-sm bg-neutral-50 p-6">
                <div className="mr-4 text-3xl">{group.icon}</div>
                <div>
                  <h3 className="mb-2 font-semibold text-neutral-800">{group.title}</h3>
                  <p className="text-neutral-600">{group.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trade-form" className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-3xl">
          <div className="mb-8 space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold text-neutral-800 md:text-4xl">
              Trade Registration Form
            </h2>
            <p className="text-lg text-neutral-600">
              Tell us about your business and we&apos;ll activate your trade access within 24 hours.
            </p>
          </div>

          <TradeForm />
        </div>
      </section>

      <section className="section-padding bg-neutral-800 text-center text-white">
        <div className="container-custom max-w-3xl">
          <h2 className="mb-6 font-heading text-4xl font-bold">Need help with a project?</h2>
          <p className="mb-8 text-xl text-neutral-300">
            Our trade team is ready to support you with samples, pricing and tailored window
            solutions.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/quote" className="btn-primary">
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="btn-secondary border-white bg-white text-neutral-800 hover:bg-neutral-100"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}
