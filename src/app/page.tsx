import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, Code, Shield, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'NextWave | AI Content & Automation for Australian Businesses',
  description: 'AI-powered content creation and marketing automation services. Grow your business with intelligent tools. Start free.',
  keywords: 'AI services Australia, business automation, AI content marketing, content generation, data analysis',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* --- HERO SECTION (UPDATED) --- */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white/80 text-sm font-normal">AI Content & Marketing Automation</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 leading-tight tracking-tight">
            NextWave
            <br />
            <span className="text-white/60">AI For Business</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-normal">
            Generate high-quality content in seconds and automate your marketing. Our AI solutions help Australian businesses save time and accelerate growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-white text-black px-7 py-3 rounded-full font-semibold text-base hover:bg-white/90 transition flex items-center justify-center gap-2"
            >
              View Plans & Pricing <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tools"
              className="bg-transparent border border-white/30 text-white px-7 py-3 rounded-full font-semibold text-base hover:bg-white/10 transition"
            >
              Try Free Tools
            </Link>
          </div>
        </div>
      </section>

      {/* --- OUR SERVICES SECTION (UPDATED) --- */}
      <section className="py-24 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-white text-center mb-3 tracking-tight">Our Services</h2>
          <p className="text-xl text-white/60 text-center mb-20 font-normal">
            Complete solutions for modern business challenges.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            <ServiceCard
              icon={<Zap className="w-6 h-6" />}
              title="AI Content & Marketing"
              description="Create SEO-optimized articles, social media posts, and emails with AI, then schedule and automate your campaigns to run on autopilot."
              href="/services"
            />
            <ServiceCard
              icon={<Code className="w-6 h-6" />}
              title="Business Automation"
              description="Streamline operations with intelligent workflow automation. Reduce manual tasks, eliminate errors, and scale your business efficiently."
              href="/services"
            />
            <ServiceCard
              icon={<Shield className="w-6 h-6" />}
              title="Data Analysis & Insights"
              description="Transform business data into actionable insights. Advanced analytics that reveal trends, patterns, and growth opportunities."
              href="/services"
            />
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION (RESTORED) --- */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-white text-center mb-24 tracking-tight">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <StepCard number="1" title="Sign Up" description="Create your account and get 100 free credits immediately. No credit card required to start." />
            <StepCard number="2" title="Configure" description="Set up your services and customize settings to match your business requirements perfectly." />
            <StepCard number="3" title="Deploy" description="Launch your AI solutions and start seeing results. Track performance with built in analytics." />
          </div>
        </div>
      </section>

      {/* --- READY TO TRANSFORM SECTION (RESTORED) --- */}
      <section className="py-32 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight">Ready to Transform?</h2>
          <p className="text-xl text-white/60 mb-10 font-normal">
            Join businesses across Australia using NextWave to scale operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black px-7 py-3 rounded-full font-semibold text-base hover:bg-white/90 transition"
          >
            Get Started Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

// --- HELPER COMPONENTS (RESTORED) ---
function ServiceCard({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) {
  return (
    <Link href={href} className="bg-zinc-800 hover:bg-zinc-700 transition rounded-2xl p-8 border border-white/10 hover:border-white/20 group">
      <div className="flex items-center justify-center w-12 h-12 bg-white/10 group-hover:bg-white/20 rounded-lg mb-6 transition">
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      <div className="flex items-center gap-2 mt-6 text-white group-hover:translate-x-1 transition">
        <span className="text-sm font-medium">Learn more</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 border border-white/20 rounded-full mb-6">
        <span className="text-2xl font-semibold text-white">{number}</span>
      </div>
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-white/70 text-base leading-relaxed">{description}</p>
    </div>
  );
}
