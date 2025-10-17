import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import ServiceProcess from '@/components/ServiceProcess';
import TrustIndicators from '@/components/TrustIndicators';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import dynamic from 'next/dynamic';

const ProductCarousel = dynamic(() => import('@/components/ProductCarousel'), {
  loading: () => (
    <section className="py-16 text-center text-sm text-neutral-500 sm:text-base">
      Loading gallery…
    </section>
  ),
});

const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => (
    <section className="section-padding text-center text-sm text-neutral-500 sm:text-base">
      Preparing contact form…
    </section>
  ),
});

export const metadata: Metadata = {
  title: 'Australia Blinds & Curtains | Premium Custom Window Treatments | LuxAura',
  description:
    "Australia's leading blinds and curtains specialist. Custom-made roller blinds, Roman blinds, venetian blinds & sheers. Free measure & quote. Australian quality craftsmanship with up to 5 years warranty*.",
  keywords:
    'Australia blinds, blinds Australia, custom blinds Australia, curtains Australia, window treatments Australia, roller blinds, roman blinds, venetian blinds, custom curtains, sheers, motorised blinds Australia, Australian made blinds, window coverings Australia, blinds Melbourne, blinds Sydney',
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <ProductCarousel />
      <ServiceProcess />
      <TrustIndicators />
      <ContactSection />
    </>
  );
}
