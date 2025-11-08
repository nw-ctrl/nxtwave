// src/app/services/customer-support/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Customer Support | NextWave AI',
  description: 'Provide instant, 24/7 support and improve customer satisfaction with intelligent, multilingual AI chatbots and automated FAQs.',
};

export default function CustomerSupportPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* --- Header --- */}
          <div className="text-left mb-12">
            <p className="text-blue-400 font-semibold mb-2">AI Service</p>
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
              Customer Support AI
            </h1>
            <p className="text-xl text-white/70 max-w-3xl">
              Deliver exceptional customer service around the clock. Our AI chatbots provide instant answers, resolve common issues, and escalate complex queries to human agents seamlessly.
            </p>
          </div>

          {/* --- Key Features --- */}
          <div className="p-8 bg-zinc-900 border border-white/10 rounded-2xl mb-12">
            <h2 className="text-3xl font-semibold text-white mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <FeatureItem title="24/7 Automated Support" description="Answer customer questions instantly, any time of day, without human intervention." />
              <FeatureItem title="FAQ Automation" description="Automatically build a knowledge base from your documents and website to answer frequently asked questions." />
              <FeatureItem title="Sentiment Analysis" description="Analyze customer conversations to gauge satisfaction and identify areas for improvement in real-time." />
              <FeatureItem title="Seamless Human Handover" description="Intelligently route conversations to the right human agent when a personal touch is needed." />
            </div>
          </div>

           {/* --- Who Is This For? --- */}
          <div className="mb-12">
             <h2 className="text-3xl font-semibold text-white mb-6 text-center">Perfect For...</h2>
             <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Support Teams</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">SaaS Companies</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">E-commerce Brands</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Businesses Scaling Up</span>
             </div>
          </div>

          {/* --- Call to Action --- */}
          <div className="text-center">
             <h2 className="text-3xl font-semibold text-white mb-4">Ready to Revolutionize Your Support?</h2>
             <p className="text-white/70 mb-8">Reduce support tickets and increase customer satisfaction.</p>
            <Link
              href="/pricing"
              className="inline-block bg-blue-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-600 transition"
            >
              View Pricing & Plans
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

function FeatureItem({ title, description }: { title: string, description: string }) {
    return (
        <div className="bg-zinc-800 p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-white/60">{description}</p>
        </div>
    )
}
