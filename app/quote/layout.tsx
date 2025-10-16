import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Get Free Quote - Custom Blinds & Curtains | LuxAura',
  description:
    'Request a free quote for custom blinds, curtains & window treatments. Free in-home consultation & measure. Expert advice. Fast 24-hour response. No obligation.',
  keywords:
    'free quote blinds, free quote curtains, window treatment quote, blinds estimate, curtain consultation, free measure, custom blinds price, window treatment cost, Australian blinds quote',
  alternates: {
    canonical: `${SITE_CONFIG.url}/quote`,
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
