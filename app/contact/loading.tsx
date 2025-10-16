export default function Loading() {
  return (
    <div className="pt-28 lg:pt-32">
      {/* Hero Skeleton */}
      <section className="relative flex min-h-[50vh] animate-pulse items-center justify-center overflow-hidden bg-neutral-100">
        <div className="relative z-10 px-4 py-20 text-center">
          <div className="container-custom">
            <div className="mx-auto mb-6 h-16 w-64 rounded bg-neutral-300"></div>
            <div className="mx-auto h-6 w-96 rounded bg-neutral-300"></div>
          </div>
        </div>
      </section>

      {/* Form Skeleton */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl animate-pulse">
          <div className="space-y-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-12 rounded bg-neutral-200"></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
