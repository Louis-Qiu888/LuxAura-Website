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
  title: 'LuxAura - Premium Custom Blinds, Curtains & Window Treatments Australia',
  description:
    "Transform your space with LuxAura's custom-made blinds, curtains, and sheers. Free measure & quote. Australian quality craftsmanship with up to 5 years warranty*.",
  keywords:
    'custom blinds, curtains Australia, window treatments, roller blinds, roman blinds, custom curtains, sheers, motorised blinds, Australian made, window coverings, interior design, home decor',
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
