'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (!accessKey) {
        alert('Form service is not configured. Please try again later.');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'Newsletter Subscription - LuxAura',
          email,
          form_source: 'footer-newsletter',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setEmail('');
        alert('Thank you for subscribing! Please check your inbox for confirmation.');
      } else {
        alert('Subscription failed. Please try again later.');
      }
    } catch (error) {
      alert('Error submitting request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom section-padding">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:mb-12 sm:gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center sm:mb-4">
              <Image
                src="/logo.svg"
                alt="LuxAura"
                width={180}
                height={180}
                className="sm:h-18 h-16 w-auto -translate-y-1 brightness-0 invert lg:h-20"
              />
            </div>
            <p className="mb-3 text-sm text-neutral-400 sm:mb-4 sm:text-base">
              Premium custom window treatments crafted with Australian excellence.
            </p>
            <div className="flex space-x-4">
              {/* Facebook - 閺囧瓨宕查幋鎰稑閻?Facebook 娑撳銆夐柧鐐复 */}
              <a
                href="https://www.facebook.com/LuxAuraLiving/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors hover:text-primary"
                aria-label="Facebook"
                title="LuxAura Living on Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram - 閺囧瓨宕查幋鎰稑閻?Instagram 鐠愶箑褰块柧鐐复 */}
              <a
                href="https://www.instagram.com/qiu.louis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors hover:text-primary"
                aria-label="Instagram"
                title="Follow us on Instagram @qiu.louis"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-3 font-heading text-base font-semibold sm:mb-4 sm:text-lg">
              Products
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link
                  href="/blinds"
                  className="text-neutral-400 transition-colors hover:text-primary"
                >
                  Blinds
                </Link>
              </li>
              <li>
                <Link
                  href="/curtains-sheers"
                  className="text-neutral-400 transition-colors hover:text-primary"
                >
                  Curtains & Sheers
                </Link>
              </li>
              <li>
                <Link
                  href="/motorisation"
                  className="text-neutral-400 transition-colors hover:text-primary"
                >
                  Motorisation
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-neutral-400 transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-3 font-heading text-base font-semibold sm:mb-4 sm:text-lg">
              Company
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-400 transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/trade"
                  className="text-neutral-400 transition-colors hover:text-primary"
                >
                  Trade Registration
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-400 transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-neutral-400 transition-colors hover:text-primary"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-3 font-heading text-base font-semibold sm:mb-4 sm:text-lg">
              Stay Updated
            </h4>
            <p className="mb-3 text-sm text-neutral-400 sm:mb-4 sm:text-base">
              Subscribe to our newsletter for design tips and exclusive offers.
            </p>
            <form className="flex" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
                className="flex-1 border border-neutral-700 bg-neutral-800 px-4 py-3 text-base text-white focus:border-primary focus:outline-none sm:px-4 sm:py-3"
              />
              <button
                type="submit"
                className="flex min-h-[48px] min-w-[48px] items-center justify-center bg-primary px-4 py-3 text-base font-medium text-white transition-colors hover:bg-primary-dark active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:px-5"
                aria-label="Subscribe"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending…' : 'Join'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-6 sm:pt-8">
          <div className="flex flex-col items-center justify-between text-xs text-neutral-400 sm:text-sm md:flex-row">
            <p className="mb-4 md:mb-0">婕?{currentYear} LuxAura. All rights reserved.</p>
            <div className="flex space-x-4 sm:space-x-6">
              <Link href="/privacy" className="transition-colors hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
