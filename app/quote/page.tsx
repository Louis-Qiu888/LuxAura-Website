import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { SITE_CONFIG } from '@/lib/constants';
import dynamic from 'next/dynamic';

const QuoteForm = dynamic(() => import('@/components/QuoteForm'), {
  loading: () => (
    <section className="rounded-sm bg-neutral-50 p-6 text-center text-sm text-neutral-500 sm:text-base">
      Loading quote form…
    </section>
  ),
});

export const metadata: Metadata = {
  title: 'Request a Quote | LuxAura',
  description:
    'Request a personalised quote for custom blinds, curtains, and motorisation solutions. Tell us about your project and our LuxAura team will be in touch within 24 hours.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/quote`,
  },
};

export default function QuotePage() {
  return (
    <div className="pt-28 lg:pt-32">
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Get a Quote', href: '/quote' }]} />
      </div>

      <section className="section-padding bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="container-custom text-center">
          <h1 className="mb-6 font-heading text-4xl font-bold text-neutral-800 sm:text-5xl md:text-6xl">
            Get Your Free Quote
          </h1>
          <p className="mx-auto max-w-3xl text-base text-neutral-600 sm:text-lg">
            Fill out the form below and we&apos;ll provide you with a detailed quote within 24
            hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
