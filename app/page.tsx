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
  title: 'Sydney Blinds & Curtains | Custom Window Treatments | LuxAura',
  description:
    "Sydney's premier blinds & curtains specialist. Custom Roman blinds, luxury curtains & motorised solutions. Free measure & quote. Australian craftsmanship with 5 years warranty*.",
  keywords:
    'Sydney blinds, curtains Sydney, custom blinds Sydney, Roman blinds Sydney, motorised blinds Sydney, luxury curtains Sydney, window treatments Sydney, Sydney Eastern Suburbs blinds, North Shore curtains, Australian made blinds, custom window coverings Sydney',
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
