import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 px-4">
      <div className="max-w-md text-center">
        <h1 className="mb-4 font-heading text-8xl font-bold text-neutral-800">404</h1>
        <h2 className="mb-4 font-heading text-3xl font-semibold text-neutral-700">
          Page Not Found
        </h2>
        <p className="mb-8 text-lg text-neutral-600">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
