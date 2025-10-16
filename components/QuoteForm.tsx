'use client';

import { useState } from 'react';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  productType: '',
  roomType: '',
  windows: '',
  budget: '',
  timeline: '',
  message: '',
};

export default function QuoteForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          product_type: formData.productType,
          room_type: formData.roomType,
          number_of_windows: formData.windows,
          budget_range: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          subject: 'New Quote Request - LuxAura',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormData(initialFormState);
        alert(
          "Thank you! Your quote request has been received. We'll contact you within 24 hours with a detailed quote."
        );
      } else {
        alert('Oops! Something went wrong. Please try again or call us at 0450 871 699.');
      }
    } catch (error) {
      alert('Error submitting request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-700">
            Full Name *
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
            Email Address *
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
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
          <label htmlFor="address" className="mb-2 block text-sm font-medium text-neutral-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-neutral-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="productType" className="mb-2 block text-sm font-medium text-neutral-700">
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
          <label htmlFor="roomType" className="mb-2 block text-sm font-medium text-neutral-700">
            Room Type
          </label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full border border-neutral-300 bg-white px-4 py-3 transition-colors focus:border-primary focus:outline-none"
          >
            <option value="">Select room type</option>
            <option value="living-room">Living Room</option>
            <option value="bedroom">Bedroom</option>
            <option value="kitchen">Kitchen</option>
            <option value="bathroom">Bathroom</option>
            <option value="office">Office</option>
            <option value="multiple">Multiple Rooms</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="windows" className="mb-2 block text-sm font-medium text-neutral-700">
            Number of Windows/Areas
          </label>
          <input
            type="number"
            id="windows"
            name="windows"
            min="1"
            value={formData.windows}
            onChange={handleChange}
            className="w-full border border-neutral-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium text-neutral-700">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full border border-neutral-300 bg-white px-4 py-3 transition-colors focus:border-primary focus:outline-none"
          >
            <option value="">Select budget range</option>
            <option value="under-1000">Under $1,000</option>
            <option value="1000-3000">$1,000 - $3,000</option>
            <option value="3000-5000">$3,000 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="over-10000">Over $10,000</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-neutral-700">
          Project Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full border border-neutral-300 bg-white px-4 py-3 transition-colors focus:border-primary focus:outline-none"
        >
          <option value="">When do you need this?</option>
          <option value="urgent">Urgent (1-2 weeks)</option>
          <option value="soon">Soon (2-4 weeks)</option>
          <option value="flexible">Flexible (1-2 months)</option>
          <option value="planning">Just planning</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-700">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project, preferences, or any specific requirements..."
          className="w-full resize-none border border-neutral-300 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
        ></textarea>
      </div>

      <div className="border-l-4 border-primary bg-neutral-50 p-6">
        <h3 className="mb-2 font-semibold text-neutral-800">What happens next?</h3>
        <ul className="space-y-1 text-sm text-neutral-600">
          <li>We&apos;ll review your request and contact you within 24 hours</li>
          <li>Schedule a free in-home consultation at your convenience</li>
          <li>Receive a detailed quote with no obligation</li>
        </ul>
      </div>

      <button
        type="submit"
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting…' : 'Submit Quote Request'}
      </button>
    </form>
  );
}
