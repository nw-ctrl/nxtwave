'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'automation',
    message: '',
    budget: 'under-5k',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/submit-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: '', email: '', phone: '', service: 'automation', message: '', budget: 'under-5k' });
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-white mb-4">Get in Touch</h1>
          <p className="text-lg text-white/60">Tell us about your AI automation needs</p>
        </div>

        {submitted && (
          <div className="mb-8 bg-green-900/20 border border-green-500 rounded-lg p-4 text-green-400 text-center">
            ✓ Thanks! We'll get back to you within 24 hours at {formData.email}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-zinc-900 rounded-2xl p-8 border border-white/10 space-y-6">
          <div>
            <label className="block text-white font-medium mb-2">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+61 123 456 789"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">What service are you interested in?</label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="automation">Business Automation</option>
              <option value="content">Content Generation at Scale</option>
              <option value="analysis">Data Analysis & Reporting</option>
              <option value="custom">Custom AI Solution</option>
              <option value="consulting">AI Consulting</option>
            </select>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">What's your budget?</label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="under-5k">Under $5,000 AUD</option>
              <option value="5k-15k">$5,000 - $15,000 AUD</option>
              <option value="15k-50k">$15,000 - $50,000 AUD</option>
              <option value="50k-plus">$50,000+ AUD</option>
            </select>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Tell us about your project</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe what you need..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition"
          >
            {loading ? 'Sending...' : 'Send Inquiry'}
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-white/60">
            Or email us directly at{' '}
            <a href="mailto:ns@nextwave.au" className="text-white font-semibold hover:text-blue-400">
              ns@nextwave.au
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
