import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | LuxAura',
  description:
    'LuxAura Privacy Policy. Learn how we collect, use, and protect your personal information in accordance with Australian Privacy Principles.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy`,
  },
};

export default function PrivacyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Privacy Policy', url: '/privacy' }]);

  return (
    <div className="pt-28 lg:pt-32">
      {/* Breadcrumb Navigation */}
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Privacy Policy', href: '/privacy' }]} />
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="container-custom text-center">
          <h1 className="mb-4 font-heading text-5xl font-bold text-neutral-800 md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            Effective Date: Last modified on 12 October 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <div className="prose prose-neutral max-w-none">
            {/* Privacy */}
            <h2 className="mb-4 font-heading text-3xl font-bold text-neutral-800">Privacy</h2>
            <p className="mb-6 text-neutral-600">
              This Privacy Policy explains in general terms how LuxAura protects the privacy of your
              personal information. It also sets out the matters which we are required to disclose
              to individuals under the Australian Privacy Principles set out in the Privacy Act 1988
              (Cth). We encourage you to read this policy carefully so that you understand our
              information handling practices.
            </p>

            {/* Collecting Personal Information */}
            <h2 className="mb-4 mt-8 font-heading text-3xl font-bold text-neutral-800">
              Collecting Personal Information About You
            </h2>
            <p className="mb-4 text-neutral-600">
              In order to provide our customers with our products and services, we may collect and
              use personal information about you. If we are not provided with all the personal
              information we request, we may not be able to supply you our products or provide you
              with our services.
            </p>
            <p className="mb-6 text-neutral-600">
              Generally, the type of personal information we collect about you includes your name,
              mailing address, telephone number and email address. We may also collect information
              about your window treatment requirements, property details, and preferences.
            </p>

            {/* How We Collect */}
            <h2 className="mb-4 mt-8 font-heading text-3xl font-bold text-neutral-800">
              How We Collect Personal Information
            </h2>
            <p className="mb-4 text-neutral-600">
              We generally collect your personal information directly from you. For example, we
              collect personal information about you when you:
            </p>
            <ul className="mb-6 ml-6 list-disc space-y-2 text-neutral-600">
              <li>Contact us by phone, email, or through our website</li>
              <li>Request a quote or consultation</li>
              <li>Submit an enquiry form</li>
              <li>Visit our showroom or attend a home consultation</li>
              <li>Subscribe to our newsletter or communications</li>
            </ul>

            {/* Purpose */}
            <h2 className="mb-4 mt-8 font-heading text-3xl font-bold text-neutral-800">
              Purpose for Collection, Use, and Disclosure
            </h2>
            <p className="mb-4 text-neutral-600">
              We collect, hold, use and disclose personal information so we can:
            </p>
            <ul className="mb-6 ml-6 list-disc space-y-2 text-neutral-600">
              <li>Provide our products and services to you</li>
              <li>Respond to your enquiries and requests</li>
              <li>Process quotes and orders</li>
              <li>Arrange consultations and installations</li>
              <li>Communicate with you about your orders</li>
              <li>Improve our products and services</li>
              <li>Send you information about our products and services (with your consent)</li>
              <li>Meet our legal obligations</li>
            </ul>

            {/* Disclosure */}
            <h2 className="mb-4 mt-8 font-heading text-3xl font-bold text-neutral-800">
              Disclosure
            </h2>
            <p className="mb-6 text-neutral-600">
              We may disclose your personal information to our service providers and contractors who
              help us supply our products and services, such as installation teams, measurement
              technicians, and payment processors. We will not use or disclose personal information
              unless you have consented, or the disclosure is required or permitted by law.
            </p>

            {/* Storage and Security */}
            <h2 className="mb-4 mt-8 font-heading text-3xl font-bold text-neutral-800">
              Storage and Security
            </h2>
            <p className="mb-6 text-neutral-600">
              We take all reasonable steps to protect personal information held from misuse, loss,
              and unauthorized access, modification or disclosure. We use physical security
              procedures and restrict access to electronic records. Access to personal information
              is limited to those of our personnel who specifically need it to carry out their
              business responsibilities.
            </p>

            {/* Marketing */}
            <h2 className="mb-4 mt-8 font-heading text-3xl font-bold text-neutral-800">
              Marketing
            </h2>
            <p className="mb-4 text-neutral-600">
              We may use personal information to advise you of new products and marketing
              initiatives that we think may be of interest to you. This may include product
              offerings, promotions, and general information about LuxAura.
            </p>
            <p className="mb-6 text-neutral-600">
              If you prefer not to receive marketing information, you can unsubscribe at any time by
              using the unsubscribe link in our emails or by contacting us directly.
            </p>

            {/* Access and Correction */}
            <h2 className="mb-4 mt-8 font-heading text-3xl font-bold text-neutral-800">
              Access and Correction
            </h2>
            <p className="mb-4 text-neutral-600">
              If you want to know what personal information we hold about you, you are welcome to
              request access by contacting us using the details below.
            </p>
            <p className="mb-6 text-neutral-600">
              If you believe the personal information we hold about you is incorrect, incomplete or
              inaccurate, please let us know and we will take reasonable steps to correct it.
            </p>

            {/* Cookies */}
            <h2 className="mb-4 mt-8 font-heading text-3xl font-bold text-neutral-800">
              Cookies and Online Data Collection
            </h2>
            <p className="mb-4 text-neutral-600">
              Our website may use cookies to improve your browsing experience. Cookies are small
              amounts of information sent from our web server to your computer. These cookies help
              us remember your preferences and understand how you use our website.
            </p>
            <p className="mb-6 text-neutral-600">
              You can refuse cookies through your browser settings. However, this may affect your
              experience on our website.
            </p>

            {/* Changes */}
            <h2 className="mb-4 mt-8 font-heading text-3xl font-bold text-neutral-800">
              Changes to Our Privacy Policy
            </h2>
            <p className="mb-6 text-neutral-600">
              We may review and update this Privacy Policy from time to time. Any changes will be
              posted on this page. We encourage you to check this page regularly to stay informed
              about how we protect your information.
            </p>

            {/* No Overseas Disclosure */}
            <h2 className="mb-4 mt-8 font-heading text-3xl font-bold text-neutral-800">
              No Disclosure to Overseas Recipients
            </h2>
            <p className="mb-6 text-neutral-600">
              We do not disclose personal information to overseas recipients. All your information
              is stored and processed within Australia.
            </p>

            {/* Contact */}
            <h2 className="mb-4 mt-8 font-heading text-3xl font-bold text-neutral-800">
              How to Contact Us
            </h2>
            <p className="mb-4 text-neutral-600">
              If you have any questions about our privacy practices or wish to access or correct
              your personal information, please contact us:
            </p>

            <div className="mb-8 rounded-sm bg-neutral-50 p-6">
              <p className="mb-2 font-semibold text-neutral-800">LuxAura</p>
              <p className="mb-1 text-neutral-600">Servicing Sydney</p>
              <p className="mb-1 text-neutral-600">New South Wales, Australia</p>
              <p className="mb-1 text-neutral-600">
                Phone:{' '}
                <a href="tel:+610450871699" className="text-primary hover:underline">
                  0450 871 699
                </a>
              </p>
              <p className="text-neutral-600">
                Email:{' '}
                <a href="mailto:service@luxaura.com.au" className="text-primary hover:underline">
                  service@luxaura.com.au
                </a>
              </p>
            </div>

            <p className="text-neutral-600">
              We will endeavour to respond to your concerns as quickly as possible, typically within
              5 business days.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-800 text-center text-white">
        <div className="container-custom max-w-3xl">
          <h2 className="mb-4 font-heading text-3xl font-bold">Questions About Privacy?</h2>
          <p className="mb-8 text-lg text-neutral-300">
            We&apos;re here to help. Contact us if you have any concerns about how we handle your
            information.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
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
