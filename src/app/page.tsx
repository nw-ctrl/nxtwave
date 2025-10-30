import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Shield, Code } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white/80 text-sm font-normal">AI-Powered Digital Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 leading-tight tracking-tight">
            NextWave AI.
            <br />
            <span className="text-white/60">Forged for business.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-normal">
            Transform your operations with cutting-edge AI services. Automate, optimize, and scale—completely free while you grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="bg-white text-black px-7 py-3 rounded-full font-normal text-base hover:bg-white/90 transition flex items-center justify-center gap-2"
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/tools" 
              className="bg-transparent border border-white/30 text-white px-7 py-3 rounded-full font-normal text-base hover:bg-white/10 transition"
            >
              Try Free Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-white text-center mb-3 tracking-tight">AI Services</h2>
          <p className="text-xl text-white/60 text-center mb-20 font-normal">
            Designed to accelerate your digital transformation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-5">
            <ServiceCard 
              icon={<Zap className="w-6 h-6" />}
              title="Content Generation"
              description="AI-powered content creation for blogs, social media, and marketing."
              href="/services/content-generation"
            />
            <ServiceCard 
              icon={<Code className="w-6 h-6" />}
              title="Business Automation"
              description="Streamline workflows and boost productivity with intelligent AI."
              href="/services/automation"
            />
            <ServiceCard 
              icon={<Shield className="w-6 h-6" />}
              title="Data Analysis"
              description="Transform raw data into actionable insights instantly."
              href="/services/data-analysis"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-white text-center mb-24 tracking-tight">How it works</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <StepCard number="1" title="Choose" description="Browse our AI-powered services and select what fits your needs." />
            <StepCard number="2" title="Customize" description="Tell us your requirements and we'll tailor the solution." />
            <StepCard number="3" title="Deploy" description="Receive your AI-generated results and start growing." />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight">Ready to get started?</h2>
          <p className="text-xl text-white/60 mb-10 font-normal">
            Transform your business with free AI tools.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-black px-7 py-3 rounded-full font-normal text-base hover:bg-white/90 transition"
          >
            Contact us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) {
  return (
    <Link href={href} className="group bg-zinc-800 rounded-2xl p-7 hover:bg-zinc-700 transition-all duration-300">
      <div className="text-white mb-5 group-hover:scale-105 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-white/60 font-normal text-base leading-relaxed">{description}</p>
    </Link>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="text-6xl font-semibold text-white/20 mb-4">
        {number}
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-white/60 font-normal leading-relaxed">{description}</p>
    </div>
  );
}
