import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Trade & Wholesale Program - Exclusive Partnership | LuxAura',
  description:
    'Exclusive trade pricing for interior designers, builders, retailers. Sydney-based warehouse, fast delivery, premium custom window furnishings at wholesale rates.',
  keywords:
    'trade pricing, wholesale blinds, interior designer program, builder pricing, retail partnership, commercial projects, wholesale curtains, trade discount, Sydney warehouse',
  alternates: {
    canonical: `${SITE_CONFIG.url}/trade`,
  },
};

export default function TradeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
