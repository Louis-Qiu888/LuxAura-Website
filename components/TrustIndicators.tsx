export default function TrustIndicators() {
  const indicators = [
    {
      icon: '🦘',
      title: 'Australian',
      description:
        'Proudly Australian owned and operated, supporting local craftsmanship and communities.',
    },
    {
      icon: '⏱️',
      title: '10+ Years Experience',
      description: 'Trusted by thousands of homes',
    },
    {
      icon: '🛡️',
      title: 'Up to 5 Years Warranty*',
      description: 'Quality guaranteed',
    },
    {
      icon: '🏢',
      title: 'Trade & Wholesale',
      description: 'Services available',
    },
  ];

  return (
    <section className="section-padding bg-neutral-800 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {indicators.map(indicator => (
            <div key={indicator.title} className="text-center">
              <div className="mb-3 text-4xl sm:mb-4 sm:text-5xl">{indicator.icon}</div>
              <h3 className="mb-2 font-heading text-lg font-semibold sm:text-xl">
                {indicator.title}
              </h3>
              <p className="text-sm text-neutral-300 sm:text-base">{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
