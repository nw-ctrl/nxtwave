import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Code, Shield, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'NextWave | AI Enterprise Solutions & Automation for Australian Businesses',
  description: 'AI powered content creation and marketing automation services. Grow your business with intelligent tools. Start free.',
  keywords: 'AI services Australia, business automation, AI content marketing, content generation, data analysis',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* --- REFINED TAGLINE --- */}
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white/80 text-sm font-normal">Enhance Your Business With Enterprise Grade AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 leading-tight tracking-tight">
            NextWave
            <br />
            <span className="text-white/60">AI For Business</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-normal">
            Generate high quality content in seconds and automate your marketing. Our AI solutions help Australian businesses save time and accelerate growth.
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

      {/* --- OUR SERVICES SECTION --- */}
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
              description="Create SEO optimized articles, social media posts, and emails with AI, then schedule and automate your campaigns to run on autopilot."
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

      {/* --- TRUSTED BY ENTERPRISE SECTION --- */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">Built for Australian Enterprise</h2>
          <p className="text-xl text-white/60 mb-16 font-normal">
            Providing scalable and secure AI solutions for high demand business environments.
          </p>
          <div className="flex gap-8 flex-wrap items-center justify-center bg-zinc-900/50 p-8 rounded-2xl border border-white/10">
              <Image src="/retail.svg" alt="Retail Client" width={56} height={56} className="opacity-70 hover:opacity-100 transition" title="Retail & e-Commerce"/>
              <Image src="/bank.svg" alt="Finance Client" width={56} height={56} className="opacity-70 hover:opacity-100 transition" title="Finance & Banking"/>
              <Image src="/shopping.svg" alt="E-commerce Client" width={56} height={56} className="opacity-70 hover:opacity-100 transition" title="Shopping & Marketplace"/>
              <Image src="/business.svg" alt="Corporate Client" width={56} height={56} className="opacity-70 hover:opacity-100 transition" title="Corporate & B2B"/>
          </div>
          <p className="text-center text-sm text-white/70 mt-6">
            Interested in having your business featured? Please&nbsp;
            <Link href="/contact" className="text-blue-400 underline hover:text-blue-300">contact us</Link>
            &nbsp;to have your registration verified and your brand showcased.
          </p>
        </div>
      </section>

      {/* --- AUTHENTICITY & SECURITY SECTION --- */}
      <section className="py-24 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-black border border-white/10 rounded-2xl p-8">
              {/* --- REFINED TRUST SEAL BACKGROUND --- */}
              <div className="flex-shrink-0 bg-black rounded-full p-1 w-24 h-24 flex items-center justify-center">
                  <Image src="/trust-seal.png" alt="100% Secure Trust Seal" width={80} height={80} />
              </div>
              <div>
                  <div className="flex items-center gap-3">
                      {/* --- REFINED SILVER TEXT --- */}
                      <span className="text-xl font-bold text-gray-400">Proudly Registered Australian Business</span>
                      <span role="img" aria-label="Australia" className="text-2xl">🇦🇺</span>
                  </div>
                  <p className="text-white/70 text-base mt-2 mb-3">
                      Officially registered and locally operated under Australian law. We provide authentic data privacy, security compliance, and local support. No offshoring, no surprises.
                  </p>
                  <span className="inline-block bg-green-900/60 text-green-400 font-semibold rounded px-3 py-1 mt-1">
                      100% Locally Owned & Operated
                  </span>
              </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
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

      {/* --- READY TO TRANSFORM SECTION --- */}
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

// --- HELPER COMPONENTS (No hyphens) ---
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
