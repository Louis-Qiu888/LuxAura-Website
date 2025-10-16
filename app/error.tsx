'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 px-4">
      <div className="max-w-md text-center">
        <h1 className="mb-4 font-heading text-6xl font-bold text-neutral-800">Oops!</h1>
        <h2 className="mb-4 font-heading text-2xl font-semibold text-neutral-700">
          Something went wrong
        </h2>
        <p className="mb-8 text-lg text-neutral-600">
          We&apos;re sorry, but something unexpected happened. Please try again.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button onClick={() => reset()} className="btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
