export default function Loading() {
  return (
    <div className="pt-28 lg:pt-32">
      {/* Hero Skeleton */}
      <section className="relative flex min-h-[50vh] animate-pulse items-center justify-center overflow-hidden bg-neutral-100">
        <div className="relative z-10 px-4 py-20 text-center">
          <div className="container-custom">
            <div className="mx-auto mb-6 h-16 w-96 rounded bg-neutral-300"></div>
            <div className="mx-auto h-6 w-3/4 rounded bg-neutral-300"></div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="animate-pulse text-center">
                <div className="mb-4 h-64 bg-neutral-200"></div>
                <div className="mx-auto h-6 w-3/4 rounded bg-neutral-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
