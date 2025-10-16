export default function ServiceProcess() {
  const steps = [
    {
      number: '01',
      title: 'Measure',
      subtitle: 'Free In-Home Consultation',
      description:
        'Our experts visit your home to take precise measurements and understand your vision.',
      icon: '📏',
    },
    {
      number: '02',
      title: 'Quote',
      subtitle: 'Detailed Pricing',
      description:
        'Receive a comprehensive quote with no hidden costs. Choose from premium fabrics and finishes.',
      icon: '💰',
    },
    {
      number: '03',
      title: 'Install',
      subtitle: 'Professional Installation',
      description:
        'Expert installation with ongoing support and care. Your satisfaction is guaranteed.',
      icon: '🛠️',
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-3 font-heading text-3xl font-bold text-neutral-800 sm:mb-4 sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-base text-neutral-600 sm:text-lg">
            From consultation to installation, we make the process seamless
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3 md:gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connection Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 z-0 hidden h-0.5 w-full bg-primary/20 md:block"></div>
              )}

              {/* Step Card */}
              <div className="relative z-10 text-center">
                {/* Icon Circle */}
                <div className="border-3 mb-4 inline-flex h-24 w-24 items-center justify-center rounded-full border-primary bg-white shadow-lg sm:mb-6 sm:h-28 sm:w-28 sm:border-4 md:h-32 md:w-32">
                  <span className="text-4xl sm:text-5xl">{step.icon}</span>
                </div>

                {/* Step Number */}
                <div className="mb-2 text-xs font-bold tracking-widest text-primary sm:text-sm">
                  STEP {step.number}
                </div>

                {/* Title */}
                <h3 className="mb-2 font-heading text-xl font-bold text-neutral-800 sm:text-2xl">
                  {step.title}
                </h3>

                {/* Subtitle */}
                <p className="mb-3 text-sm font-medium text-primary sm:mb-4 sm:text-base">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-600 sm:text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
