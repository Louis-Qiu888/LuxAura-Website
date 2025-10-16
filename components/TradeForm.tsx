'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';

const initialFormState = {
  companyName: '',
  abn: '',
  contactName: '',
  position: '',
  email: '',
  phone: '',
  businessType: '',
  message: '',
};

export default function TradeForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New Trade Application - LuxAura',
          company_name: formData.companyName,
          abn: formData.abn,
          contact_name: formData.contactName,
          position: formData.position,
          email: formData.email,
          phone: formData.phone,
          business_type: formData.businessType,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormData(initialFormState);
        alert("Thank you! We'll contact you within 24 hours to finalise your trade access.");
      } else {
        alert('Oops! Something went wrong. Please try again or call us at 0450 871 699.');
      }
    } catch (error) {
      alert('Error submitting request. Please try again or reach us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-sm bg-white p-8 shadow-sm">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="companyName" className="mb-2 block text-sm font-medium text-neutral-700">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            placeholder="required"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border border-neutral-300 px-4 py-3 placeholder-neutral-400 transition-colors focus:border-primary focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="abn" className="mb-2 block text-sm font-medium text-neutral-700">
            ABN
          </label>
          <input
            type="text"
            id="abn"
            name="abn"
            placeholder="optional"
            value={formData.abn}
            onChange={handleChange}
            className="w-full border border-neutral-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="contactName" className="mb-2 block text-sm font-medium text-neutral-700">
            Contact Name
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            required
            placeholder="required"
            value={formData.contactName}
            onChange={handleChange}
            className="w-full border border-neutral-300 px-4 py-3 placeholder-neutral-400 transition-colors focus:border-primary focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="position" className="mb-2 block text-sm font-medium text-neutral-700">
            Position/Title
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full border border-neutral-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="required"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-neutral-300 px-4 py-3 placeholder-neutral-400 transition-colors focus:border-primary focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-neutral-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="required"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-neutral-300 px-4 py-3 placeholder-neutral-400 transition-colors focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="businessType" className="mb-2 block text-sm font-medium text-neutral-700">
          Business Type
        </label>
        <select
          id="businessType"
          name="businessType"
          required
          value={formData.businessType}
          onChange={handleChange}
          className="w-full border border-neutral-300 bg-white px-4 py-3 text-neutral-700 transition-colors focus:border-primary focus:outline-none"
        >
          <option value="" className="text-neutral-400">
            required
          </option>
          <option value="interior-designer">Interior Designer</option>
          <option value="builder">Builder/Developer</option>
          <option value="retailer">Retailer</option>
          <option value="architect">Architect</option>
          <option value="commercial">Commercial Projects</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-700">
          Tell us about your business
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Briefly describe your business, typical project volume, and what you're looking for..."
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none border border-neutral-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
        ></textarea>
      </div>

      <div className="rounded-sm border-l-4 border-primary bg-neutral-50 p-6">
        <h3 className="mb-2 font-semibold text-neutral-800">What happens next?</h3>
        <ul className="space-y-1 text-sm text-neutral-600">
          <li>We&apos;ll review your application within 24 hours</li>
          <li>Our trade team will contact you to discuss your requirements</li>
          <li>Receive your exclusive trade pricing and account setup</li>
          <li>Start ordering with wholesale rates immediately</li>
        </ul>
      </div>

      <button
        type="submit"
        className="btn-primary w-full text-lg disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isSubmitting}
      >
        Submit Trade Application
      </button>
    </form>
  );
}
