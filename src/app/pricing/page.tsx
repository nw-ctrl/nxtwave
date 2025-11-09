'use client';

import { useState } from 'react';
import Link from 'next/link';

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  priceId: string;
  type: 'subscription' | 'payment' | 'free' | 'custom';
  highlighted?: boolean;
  cta?: string;
}

// IMPORTANT: Replace these with your actual Stripe Price IDs from your text file
const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Get started with core AI tools',
    features: [
      '5 chatbot conversations/month',
      '3 document summaries/month',
      'Access to core AI tools',
    ],
    priceId: '',
    type: 'free',
    cta: 'Get Started',
  },
  {
    name: 'Solopreneur',
    price: '$49',
    period: '/month',
    description: 'Perfect for individual creators',
    features: [
      '10,000 AI words/month',
      'Basic SEO Content Templates',
      'Increased free tool limits',
      'Standard email support',
    ],
    priceId: 'price_1SRTqX6lwMXBZUylRW44ZrCM', // REPLACE WITH YOUR ACTUAL PRICE ID
    type: 'subscription',
    highlighted: true,
    cta: 'Subscribe Now',
  },
  {
    name: 'Small Business',
    price: '$99',
    period: '/month',
    description: 'For growing teams',
    features: [
      '50,000 AI words/month',
      'AI Marketing Automation',
      'Basic Analytics Dashboard',
      'Priority email support',
      'API Access',
    ],
    priceId: 'price_1SRTtZ6lwMXBZUyl7pz2dtF1', // REPLACE WITH YOUR ACTUAL PRICE ID
    type: 'subscription',
    cta: 'Subscribe Now',
  },
  {
    name: 'AI Strategy Session',
    price: '$199',
    period: 'one-time',
    description: '90-minute consultation',
    features: [
      '90-minute expert consultation',
      'Personalized AI strategy',
      'Implementation roadmap',
      'Follow-up email support',
    ],
    priceId: 'price_1SRTz96lwMXBZUylVzQBRyad', // REPLACE WITH YOUR ACTUAL PRICE ID
    type: 'payment',
    cta: 'Book Session',
  },
  {
    name: 'Managed Content Service',
    price: '$499',
    period: '/month',
    description: 'Expert content creation',
    features: [
      'Expert content creation',
      'Content publishing',
      'Performance analytics',
      'Dedicated account manager',
      'Priority support',
    ],
    priceId: 'price_1SRU1K6lwMXBZUyl5nugo2qM', // REPLACE WITH YOUR ACTUAL PRICE ID
    type: 'subscription',
    cta: 'Subscribe Now',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Custom solutions for organizations',
    features: [
      'Custom AI model fine-tuning',
      'Unlimited user seats',
      'Dedicated Account Manager',
      'Advanced security & compliance',
      'On-premise deployment option',
      'SLA with uptime guarantee',
    ],
    priceId: '',
    type: 'custom',
    cta: 'Contact Sales',
  },
];

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (tier: PricingTier) => {
    // Handle free tier
    if (tier.type === 'free') {
      window.location.href = '/tools';
      return;
    }

    // Handle custom/enterprise - REDIRECT TO CONTACT PAGE
    if (tier.type === 'custom') {
      window.location.href = '/contact'; // ← CHANGED: Now goes to contact page
      return;
    }

    // Handle subscription/payment
    if (!tier.priceId) {
      setError('Price ID not configured');
      return;
    }

    setLoading(tier.name);
    setError(null);

    try {
      const endpoint = tier.type === 'subscription' 
        ? '/api/create-checkout-session'
        : '/api/create-payment-session';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: tier.priceId,
          email: '',
          userId: '',
          tier: tier.name,
        }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Failed to create checkout session');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(null);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Pricing For Every Level</h1>
          <p className="text-xl text-gray-400">
            From individual creators to large-scale enterprises, find the perfect plan to power your growth with AI.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-900/20 border border-red-500 text-red-400 px-4 py-3 rounded mb-8 text-center">
            {error}
          </div>
        )}

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg border transition-all ${
                tier.highlighted
                  ? 'border-purple-500 bg-purple-900/10 ring-2 ring-purple-500/50'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{tier.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-gray-400 text-sm ml-2">{tier.period}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-300">
                      <span className="text-purple-400 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handleSubscribe(tier)}
                  disabled={loading === tier.name}
                  className={`w-full font-semibold py-3 rounded-lg transition ${
                    tier.highlighted
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  } ${loading === tier.name ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading === tier.name ? 'Loading...' : tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Common Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Can I change plans anytime?</h3>
              <p className="text-gray-400">
                Yes! You can upgrade, downgrade, or cancel your subscription anytime from your dashboard.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Is there a free trial?</h3>
              <p className="text-gray-400">
                Our Free tier lets you test NextWave with 5 chatbot conversations and 3 document summaries per month.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-400">
                We accept all major credit cards (Visa, Mastercard, American Express) via Stripe.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Do you offer discounts for annual billing?</h3>
              <p className="text-gray-400">
                Contact our sales team via the Enterprise plan option for custom annual billing and enterprise discounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
