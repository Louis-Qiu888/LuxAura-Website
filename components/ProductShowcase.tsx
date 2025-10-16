import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    title: 'Blinds',
    description: 'Roller, Roman, Venetian & More',
    features: ['Light Control', 'Privacy', 'Energy Efficient'],
    href: '/blinds',
    imageId: 'IMG-A',
  },
  {
    title: 'Curtains',
    description: 'Custom Made to Measure',
    features: ['Luxury Fabrics', 'Perfect Fit', 'Style Variety'],
    href: '/curtains-sheers',
    imageId: 'IMG-B',
  },
  {
    title: 'Sheers',
    description: 'Elegant & Light Filtering',
    features: ['Soft Light', 'Privacy', 'Modern Design'],
    href: '/curtains-sheers',
    imageId: 'IMG-C',
  },
  {
    title: 'Cushions',
    description: 'Designer Soft Furnishings',
    features: ['Custom Sizes', 'Premium Fabrics', 'Handcrafted'],
    href: '/cushions',
    imageId: 'IMG-D',
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-3 font-heading text-3xl font-bold text-neutral-800 sm:mb-4 sm:text-4xl md:text-5xl">
            Our Product Range
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-base text-neutral-600 sm:text-lg">
            Discover our comprehensive collection of custom-made window treatments and soft
            furnishings
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group relative overflow-hidden rounded-sm bg-neutral-50 transition-all duration-300 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="relative flex h-48 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-200 to-neutral-300 sm:h-56 md:h-64">
                {product.imageId === 'IMG-A' ||
                product.imageId === 'IMG-B' ||
                product.imageId === 'IMG-C' ||
                product.imageId === 'IMG-D' ? (
                  <>
                    <Image
                      src={`/images/${product.imageId}.webp`}
                      alt={product.title}
                      fill
                      priority={index === 0}
                      className="object-contain"
                      sizes="(max-width: 640px) 80vw, (max-width: 768px) 45vw, (max-width: 1280px) 30vw, 260px"
                      quality={75}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-primary/0 transition-all duration-300 group-hover:bg-primary/10"></div>
                  </>
                ) : (
                  <>
                    <div className="font-heading text-5xl text-neutral-400 sm:text-6xl">
                      {product.title[0]}
                    </div>
                    <div className="mt-2 font-mono text-sm text-neutral-500">{product.imageId}</div>
                    <div className="absolute inset-0 bg-primary/0 transition-all duration-300 group-hover:bg-primary/10"></div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="mb-2 font-heading text-xl font-semibold text-neutral-800 sm:text-2xl">
                  {product.title}
                </h3>
                <p className="mb-4 text-sm text-neutral-600 sm:text-base">{product.description}</p>

                <ul className="mb-6 space-y-2">
                  {product.features.map(feature => (
                    <li key={feature} className="flex items-center text-sm text-neutral-600">
                      <svg
                        className="mr-2 h-4 w-4 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={product.href}
                  className="group flex items-center font-medium text-primary hover:text-primary-dark"
                  aria-label={`Discover ${product.title}`}
                >
                  Learn more about {product.title}
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
