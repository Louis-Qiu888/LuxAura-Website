'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          product_interest: formData.productType,
          message: formData.message,
          subject: 'New Contact Form Submission - LuxAura',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          productType: '',
          message: '',
        });
        alert(
          "Thank you! Your message has been sent successfully. We'll contact you within 24 hours."
        );
      } else {
        alert('Oops! Something went wrong. Please try again or call us directly.');
      }
    } catch (error) {
      alert('Error sending message. Please try again or contact us by phone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-3 font-heading text-3xl font-bold text-neutral-800 sm:mb-4 sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-base text-neutral-600 sm:text-lg">
            Ready to transform your space? Contact us for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-700">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-neutral-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-neutral-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-neutral-700">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-neutral-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="productType"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  Product Interest
                </label>
                <select
                  id="productType"
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                  className="w-full border border-neutral-300 bg-white px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                >
                  <option value="">Select a product</option>
                  <option value="blinds">Blinds</option>
                  <option value="curtains">Curtains & Sheers</option>
                  <option value="motorisation">Motorisation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none border border-neutral-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="mb-4 font-heading text-xl font-semibold text-neutral-800 sm:mb-6 sm:text-2xl">
                Contact Information
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="mr-3 text-xl text-primary sm:mr-4 sm:text-2xl">📍</div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-neutral-800 sm:text-base">
                      Address
                    </h4>
                    <p className="text-sm text-neutral-600 sm:text-base">
                      Servicing Sydney
                      <br />
                      New South Wales, Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 text-xl text-primary sm:mr-4 sm:text-2xl">📞</div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-neutral-800 sm:text-base">
                      Phone
                    </h4>
                    <p className="text-sm text-neutral-600 sm:text-base">
                      <a href="tel:+610450871699" className="transition-colors hover:text-primary">
                        +61 045 087 1699
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 text-xl text-primary sm:mr-4 sm:text-2xl">📧</div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-neutral-800 sm:text-base">
                      Email
                    </h4>
                    <p className="text-sm text-neutral-600 sm:text-base">
                      <a
                        href="mailto:service@luxaura.com.au"
                        className="break-all transition-colors hover:text-primary"
                      >
                        service@luxaura.com.au
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 text-xl text-primary sm:mr-4 sm:text-2xl">⏰</div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-neutral-800 sm:text-base">
                      Business Hours
                    </h4>
                    <p className="text-sm text-neutral-600 sm:text-base">
                      Monday - Sunday: 24/7
                      <br />
                      Always available for enquiries
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-primary bg-neutral-50 p-4 sm:p-6">
              <h4 className="mb-2 font-heading text-base font-semibold text-neutral-800 sm:text-lg">
                Free Measure & Quote
              </h4>
              <p className="text-sm text-neutral-600 sm:text-base">
                Book your free in-home consultation today. Our experts will help you choose the
                perfect window treatments for your space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
