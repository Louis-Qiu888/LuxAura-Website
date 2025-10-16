import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LoadingFavicon from '@/components/LoadingFavicon';
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: 'LuxAura - Premium Window Treatments | Custom Blinds, Curtains & Sheers',
    template: '%s | LuxAura',
  },
  description:
    "Transform your space with LuxAura's custom-made blinds, curtains, and sheers. Free measure & quote. Australian quality craftsmanship.",
  authors: [{ name: 'LuxAura' }],
  icons: {
    icon: '/logo.svg',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'LuxAura - Premium Window Treatments',
    description:
      'Custom-made blinds, curtains & window treatments. Australian craftsmanship with free consultation.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'LuxAura',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LuxAura - Premium Window Treatments',
    description: 'Custom-made blinds, curtains & window treatments.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 结构化数据 (JSON-LD) 用于SEO
  const phoneDigits = CONTACT_INFO.phone.replace(/\D/g, '');
  const localPhone = phoneDigits.startsWith('0') ? phoneDigits.slice(1) : phoneDigits;
  const internationalPhone = localPhone.startsWith('61') ? `+${localPhone}` : `+61${localPhone}`;
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.svg`,
    '@id': `${SITE_CONFIG.url}/#organization`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AU',
      addressRegion: CONTACT_INFO.address.region,
      addressLocality: CONTACT_INFO.address.city,
    },
    areaServed: {
      '@type': 'Country',
      name: CONTACT_INFO.address.country,
    },
    priceRange: '$$',
    openingHours: 'Mo-Su 00:00-23:59',
    telephone: internationalPhone,
    email: CONTACT_INFO.email,
    sameAs: [],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="LuxAura delivers premium, custom-made blinds, curtains, and motorised window treatments throughout Australia with free measure and quote services."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <LoadingFavicon />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
