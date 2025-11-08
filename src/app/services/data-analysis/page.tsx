// src/app/services/data-analysis/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Data Analysis | NextWave AI',
  description: 'Unlock actionable insights from your business data with predictive analytics, trend analysis, and interactive visualizations.',
};

export default function DataAnalysisPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* --- Header --- */}
          <div className="text-left mb-12">
            <p className="text-blue-400 font-semibold mb-2">AI Service</p>
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
              Data Analysis
            </h1>
            <p className="text-xl text-white/70 max-w-3xl">
              Transform your raw data into a strategic advantage. Our AI platform processes vast datasets to uncover trends, forecast future performance, and provide clear insights for data-driven decision-making.
            </p>
          </div>

          {/* --- Key Features --- */}
          <div className="p-8 bg-zinc-900 border border-white/10 rounded-2xl mb-12">
            <h2 className="text-3xl font-semibold text-white mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <FeatureItem title="Predictive Analytics" description="Forecast sales, customer churn, and inventory needs with high accuracy using machine learning models." />
              <FeatureItem title="Market Trend Analysis" description="Analyze market data and social media trends to identify new opportunities and stay ahead of the competition." />
              <FeatureItem title="Customer Segmentation" description="Group customers based on behavior and demographics to personalize marketing and improve retention." />
              <FeatureItem title="Interactive Dashboards" description="Access your key metrics through beautiful, easy-to-understand visualizations that update in real-time." />
            </div>
          </div>

           {/* --- Who Is This For? --- */}
          <div className="mb-12">
             <h2 className="text-3xl font-semibold text-white mb-6 text-center">Perfect For...</h2>
             <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Business Leaders</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Marketing Analysts</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Sales Teams</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">E-commerce Stores</span>
             </div>
          </div>

          {/* --- Call to Action --- */}
          <div className="text-center">
             <h2 className="text-3xl font-semibold text-white mb-4">Ready to Unlock Your Data's Potential?</h2>
             <p className="text-white/70 mb-8">Discover the insights hidden in your data.</p>
            <Link
              href="/pricing#professional-services"
              className="inline-block bg-blue-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-600 transition"
            >
              View Data Service Options
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
