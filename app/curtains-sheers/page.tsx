import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { HERO_BLUR_DATA_URL } from '@/lib/blur-data';

export const metadata: Metadata = {
  title: 'Custom Curtains & Sheers - S-Fold, Pinch Pleat, Eyelet | LuxAura',
  description:
    'Premium custom curtains & sheers made to measure. S-Fold, Pinch Pleat, Eyelet styles. Luxury fabrics including linen, velvet, silk. Free consultation & installation.',
  keywords:
    'custom curtains, made to measure curtains, s-fold curtains, pinch pleat curtains, eyelet curtains, sheer curtains, blockout curtains, luxury curtains, linen curtains, velvet curtains, curtain installation, Australian curtains',
  alternates: {
    canonical: `${SITE_CONFIG.url}/curtains-sheers`,
  },
};

export default function CurtainsSheersPage() {
  const ourCurtains = [
    {
      name: 'Sheers Curtains',
      description: 'Soft, translucent elegance',
      imageId: 'IMG-O2',
    },
    {
      name: 'Light Filtering Curtains',
      description: 'Perfect balance of privacy and natural light',
      imageId: 'IMG-O3',
    },
    {
      name: 'Blockout Curtains',
      description: 'Complete darkness and privacy',
      imageId: 'IMG-O4',
    },
  ];

  const curtainTypes = [
    {
      name: 'S-Fold Curtains',
      description: 'Contemporary wave-like folds for a modern, streamlined look',
      imageId: 'IMG-E',
    },
    {
      name: 'Pinch Pleat Curtains',
      description: 'Traditional elegance with tailored pleats',
      imageId: 'IMG-F',
    },
    {
      name: 'Eyelet Curtains',
      description: 'Casual and easy-to-use with metal rings',
      imageId: 'IMG-G',
    },
    {
      name: 'Double Curtains',
      description: 'Soft, light-filtering elegance',
      imageId: 'IMG-H',
    },
  ];

  const fabrics = [
    { name: 'Premium Linen', icon: '🌾' },
    { name: 'Luxurious Velvet', icon: '💎' },
    { name: 'Elegant Silk', icon: '🦋' },
    { name: 'Practical Polyester', icon: '⚡' },
    { name: 'Natural Cotton', icon: '🌿' },
    { name: 'Blockout Fabrics', icon: '🌙' },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Curtains & Sheers', url: '/curtains-sheers' },
  ]);

  return (
    <div className="pt-28 lg:pt-32">
      {/* Breadcrumb Navigation */}
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Curtains & Sheers', href: '/curtains-sheers' }]} />
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/curtains-hero.webp"
            alt="LuxAura curtains and sheers hero background"
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
              Curtains & Sheers
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-neutral-200 drop-shadow-md">
              Elevate your interiors with our custom-made curtains and sheers. Choose from premium
              fabrics and elegant styles to create the perfect ambiance.
            </p>
            <Link href="/quote" className="btn-primary">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Our Curtains */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="mb-12 text-center font-heading text-4xl font-bold text-neutral-800">
            Our Curtains
          </h2>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {ourCurtains.map((curtain, idx) => (
              <div key={curtain.name} className="text-center">
                <div className="relative mb-4 flex h-64 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-200 to-neutral-300">
                  <Image
                    src={`/images/${curtain.imageId}.webp`}
                    alt={curtain.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 384px"
                    quality={85}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold text-neutral-800">
                  {curtain.name}
                </h3>
                <p className="text-neutral-600">{curtain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curtain Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="mb-12 text-center font-heading text-4xl font-bold text-neutral-800">
            Curtain Styles
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {curtainTypes.map((type, _index) => (
              <div key={type.name} className="text-center">
                <div className="relative mb-4 flex h-64 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-200 to-neutral-300">
                  {type.imageId === 'IMG-E' ||
                  type.imageId === 'IMG-F' ||
                  type.imageId === 'IMG-G' ||
                  type.imageId === 'IMG-H' ? (
                    <Image
                      src={`/images/${type.imageId}.webp`}
                      alt={type.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 384px"
                      quality={75}
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <span className="font-heading text-6xl text-neutral-400">{type.name[0]}</span>
                      <span className="mt-2 font-mono text-sm text-neutral-500">
                        {type.imageId}
                      </span>
                    </>
                  )}
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold text-neutral-800">
                  {type.name}
                </h3>
                <p className="text-neutral-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrics Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center font-heading text-4xl font-bold text-neutral-800">
              Premium Fabrics
            </h2>
            <p className="mb-12 text-center text-lg text-neutral-600">
              Made with globally sourced premium fabrics
            </p>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {fabrics.map(fabric => (
                <div
                  key={fabric.name}
                  className="rounded-sm bg-white p-6 text-center transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 text-4xl">{fabric.icon}</div>
                  <p className="font-medium text-neutral-800">{fabric.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-5xl">📏</div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-neutral-800">
                Made to Measure
              </h3>
              <p className="text-neutral-600">
                Precision measurements ensure a perfect fit for your windows, from floor-to-ceiling
                elegance to practical bay windows.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-5xl">🎨</div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-neutral-800">
                Design Consultation
              </h3>
              <p className="text-neutral-600">
                Our experts help you choose the perfect fabric, color, and style to complement your
                interior design vision.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-5xl">⚙️</div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-neutral-800">
                Expert Installation
              </h3>
              <p className="text-neutral-600">
                Professional installation included with every order. We handle tracks, rods, and
                perfect hanging for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="section-padding bg-neutral-800 text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-12 text-center font-heading text-4xl font-bold">
            Customization Options
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-primary">Heading Styles</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>S-Fold / Wave Fold</li>
                <li>Pinch Pleat (Double or Triple)</li>
                <li>Pencil Pleat</li>
                <li>Eyelet / Grommet</li>
                <li>Tab Top</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold text-primary">Lining Options</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>Blockout Lining</li>
                <li>Thermal Lining</li>
                <li>Light Filtering</li>
                <li>Standard Lining</li>
                <li>Unlined</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="mb-6 font-heading text-4xl font-bold text-neutral-800">
            Create Your Dream Curtains
          </h2>
          <p className="mb-8 text-xl text-neutral-600">
            Let&apos;s bring your vision to life with custom curtains made just for you.
          </p>
          <Link href="/quote" className="btn-primary">
            Request Free Consultation
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
