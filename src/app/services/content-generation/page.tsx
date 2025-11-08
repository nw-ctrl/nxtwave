import { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Content Generation Service | NextWave AI',
  description: 'Generate high-quality, SEO-optimized content in seconds, from blog posts to social media updates and email campaigns.',
};

export default function ContentGenerationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* --- Header --- */}
          <div className="text-left mb-12">
            <p className="text-blue-400 font-semibold mb-2">AI Service</p>
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
              AI Content Generation
            </h1>
            <p className="text-xl text-white/70 max-w-3xl">
              Eliminate writer's block and scale your content strategy effortlessly. Our AI understands your brand voice to produce relevant, engaging, and SEO-friendly content for any platform.
            </p>
          </div>

          {/* --- Key Features --- */}
          <div className="p-8 bg-zinc-900 border border-white/10 rounded-2xl mb-12">
            <h2 className="text-3xl font-semibold text-white mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <FeatureItem title="Blog & Article Writing" description="Generate full-length articles from a simple prompt. Includes outlines, introductions, and conclusions." />
              <FeatureItem title="Social Media Content" description="Create engaging posts tailored for LinkedIn, Twitter, Instagram, and Facebook, complete with hashtags." />
              <FeatureItem title="Email Marketing Campaigns" description="Draft compelling subject lines and body copy for newsletters, promotions, and automated sequences." />
              <FeatureItem title="SEO Optimization" description="Integrate target keywords naturally to improve search engine rankings and drive organic traffic." />
            </div>
          </div>

           {/* --- Who Is This For? --- */}
          <div className="mb-12">
             <h2 className="text-3xl font-semibold text-white mb-6 text-center">Perfect For...</h2>
             <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Marketing Teams</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Solopreneurs</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">SEO Specialists</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Small Business Owners</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Content Creators</span>
             </div>
          </div>


          {/* --- Call to Action --- */}
          <div className="text-center">
             <h2 className="text-3xl font-semibold text-white mb-4">Ready to Automate Your Content?</h2>
             <p className="text-white/70 mb-8">Choose a plan that fits your content needs and start creating today.</p>
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
