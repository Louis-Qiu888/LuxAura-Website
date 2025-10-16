export default function Loading() {
  return (
    <div className="pt-28 lg:pt-32">
      {/* Hero Skeleton */}
      <section className="relative flex min-h-[50vh] animate-pulse items-center justify-center overflow-hidden bg-neutral-100">
        <div className="relative z-10 px-4 py-20 text-center">
          <div className="container-custom">
            <div className="mx-auto mb-6 h-16 w-96 rounded bg-neutral-300"></div>
            <div className="mx-auto h-6 w-2/3 rounded bg-neutral-300"></div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl animate-pulse">
          <div className="mb-8 h-10 w-48 rounded bg-neutral-300"></div>
          <div className="space-y-4">
            <div className="h-4 w-full rounded bg-neutral-200"></div>
            <div className="h-4 w-full rounded bg-neutral-200"></div>
            <div className="h-4 w-3/4 rounded bg-neutral-200"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
