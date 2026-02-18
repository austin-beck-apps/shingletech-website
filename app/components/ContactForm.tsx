'use client';

import { useState } from 'react';

function gtag_report_conversion(url?: string) {
  (window as any).gtag('event', 'conversion', {
    'send_to': 'AW-17928984102/cptECIiLivIbEKasmuVC',
    'event_callback': function () {
      if (typeof(url) != 'undefined') {
        window.location.href = url;
      }
    }
  });
  return false;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Roofing',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Submit directly to Web3Forms API (client-side)
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '480b35d3-0c47-4eb4-a72f-ab320f297e4d');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', `New Contact Form Submission - ${formData.service}`);
      formDataToSend.append('message', `Service Needed: ${formData.service}\n\n${formData.message}\n\n---\nContact Information:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}`);
      formDataToSend.append('from_name', 'ShingleTech Website');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'Roofing',
          message: ''
        });
        gtag_report_conversion();
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try calling us directly.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          Thank you! We&apos;ve received your message and will get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          {errorMessage}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-slate-900 disabled:bg-slate-100"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-slate-900 disabled:bg-slate-100"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 disabled:bg-slate-100"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-slate-900 disabled:bg-slate-100"
        >
          <optgroup label="Roofing Services">
            <option>Shingle Roofing</option>
            <option>Metal Roofing</option>
            <option>Commercial Flat Roofing</option>
            <option>Roof Coating</option>
            <option>Roof Repair</option>
          </optgroup>
          <optgroup label="Siding Services">
            <option>Vinyl Siding Installation</option>
            <option>Fiber Cement Siding</option>
            <option>Siding Repair</option>
          </optgroup>
          <optgroup label="Other">
            <option>Emergency Service</option>
            <option>General Inquiry</option>
            <option>Free Estimate</option>
          </optgroup>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
          rows={4}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 disabled:bg-slate-100"
          placeholder="Tell us about your roofing needs..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg disabled:bg-red-400 disabled:cursor-not-allowed shadow-lg"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
