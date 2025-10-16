import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service | LuxAura',
  description:
    'LuxAura Terms of Service. Review the conditions that apply to using our website, requesting quotes, and purchasing custom window treatments.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/terms`,
  },
};

export default function TermsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Terms of Service', url: '/terms' }]);

  return (
    <div className="pt-28 lg:pt-32">
      {/* Breadcrumb Navigation */}
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Terms of Service', href: '/terms' }]} />
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="container-custom text-center">
          <h1 className="mb-4 font-heading text-5xl font-bold text-neutral-800 md:text-6xl">
            Terms of Service
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            These Terms outline how LuxAura provides services, handles enquiries, and manages custom
            orders. Please review them carefully before submitting a quote request or placing an
            order.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl space-y-10">
          <section>
            <h2 className="mb-3 font-heading text-3xl font-bold text-neutral-800">
              1. Services & Engagement
            </h2>
            <p className="text-neutral-600">
              LuxAura provides in-home consultations, custom fabrication, and installation services
              for window treatments. A request for quotation does not create a binding contract. A
              contract is formed once a written order is accepted, including confirmation of scope,
              pricing, and installation dates.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-3xl font-bold text-neutral-800">
              2. Quotes, Deposits & Payments
            </h2>
            <ul className="ml-5 list-disc space-y-2 text-neutral-600">
              <li>Quotes remain valid for 30 days unless otherwise stated.</li>
              <li>
                A 50% deposit is typically required to commence production, with the balance due on
                or before installation.
              </li>
              <li>
                Changes requested after materials are ordered may incur additional costs or revised
                delivery timelines.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-3xl font-bold text-neutral-800">
              3. Site Access & Responsibilities
            </h2>
            <p className="text-neutral-600">
              Clients are responsible for providing safe access to the installation site and
              notifying us of any hazards. If a scheduled installation cannot proceed due to site
              conditions, a return visit fee may apply.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-3xl font-bold text-neutral-800">
              4. Warranty & Aftercare
            </h2>
            <p className="text-neutral-600">
              All LuxAura products carry up to 5 years workmanship warranty*. Warranty claims
              require proof of purchase and assessment by our service team. Damage caused by misuse,
              incorrect maintenance, or unauthorised modifications is excluded.
            </p>
            <p className="mt-4 text-sm italic text-neutral-500">
              *Warranty period varies by product type and installation conditions. Standard products
              are covered for up to 5 years from the date of installation. Premium and motorised
              products may have different warranty terms. Full warranty details are provided at the
              time of purchase.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-3xl font-bold text-neutral-800">
              5. Limitation of Liability
            </h2>
            <p className="text-neutral-600">
              To the extent permitted by Australian Consumer Law, LuxAura is not liable for indirect
              or consequential loss. Our total liability is limited to repairing, replacing, or
              refunding the affected product or service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-3xl font-bold text-neutral-800">
              6. Images & Product Representation
            </h2>
            <div className="space-y-4 text-neutral-600">
              <p>
                <strong>Product Images:</strong> All product images displayed on this website are
                for illustrative purposes only and may not represent the actual appearance of the
                final product. Images may be stock photography, artist renderings, or examples from
                similar projects.
              </p>
              <p>
                <strong>Colour Accuracy:</strong> We make every effort to display colours
                accurately, however actual product colours may vary from what appears on your screen
                due to monitor settings, lighting conditions, and manufacturing variations. Screen
                representations are approximate and should be used as a guide only.
              </p>
              <p>
                <strong>Product Samples:</strong> We strongly recommend reviewing physical fabric
                and material samples before placing your final order. Samples can be arranged
                through your free consultation.
              </p>
              <p>
                <strong>Final Specification:</strong> The final appearance, colour, and texture of
                your custom window treatments will be confirmed through physical samples and your
                signed approval prior to manufacturing.
              </p>
              <p className="text-sm italic">
                By placing an order, you acknowledge that you have had the opportunity to review
                physical samples and that the final product may differ from website imagery.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 font-heading text-3xl font-bold text-neutral-800">7. Contact Us</h2>
            <p className="text-neutral-600">
              If you have questions about these Terms, please{' '}
              <Link href="/contact" className="text-primary underline-offset-2 hover:underline">
                contact us
              </Link>{' '}
              before placing an order.
            </p>
          </section>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-800 text-center text-white">
        <div className="container-custom max-w-3xl">
          <h2 className="mb-4 font-heading text-3xl font-bold">Ready to Start Your Project?</h2>
          <p className="mb-8 text-lg text-neutral-300">
            Book a free consultation and we&apos;ll guide you through fabric choices, installation
            timelines, and pricing.
          </p>
          <Link href="/quote" className="btn-primary">
            Request a Quote
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
