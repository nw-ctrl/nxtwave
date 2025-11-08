import { Check } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* --- Main Header --- */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
              Pricing For Every Level
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-3xl mx-auto">
              From individual creators to large-scale enterprises, find the perfect plan to power your growth with AI.
            </p>
          </div>

          {/* ====================================================================== */}
          {/* =================== NON-ENTERPRISE / SELF-SERVICE ================== */}
          {/* ====================================================================== */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-white text-center mb-10">
              Self-Service Plans
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Free Tier */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 flex flex-col">
                <div className="text-center mb-6 flex-grow">
                  <h3 className="text-2xl font-semibold text-white mb-2">Free</h3>
                  <div className="text-4xl font-bold text-white mb-2">$0</div>
                  <ul className="space-y-3 mt-6 text-left">
                    <li className="flex items-start gap-2 text-white/80 text-sm"><Check className="w-5 h-5 text-green-400 mt-0.5" /><span>5 chatbot conversations/month</span></li>
                    <li className="flex items-start gap-2 text-white/80 text-sm"><Check className="w-5 h-5 text-green-400 mt-0.5" /><span>3 document summaries/month</span></li>
                    <li className="flex items-start gap-2 text-white/80 text-sm"><Check className="w-5 h-5 text-green-400 mt-0.5" /><span>Access to core AI tools</span></li>
                  </ul>
                </div>
                <button className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-white/90 transition mt-8">Start for Free</button>
              </div>

              {/* Solopreneur Tier */}
              <div className="bg-zinc-900 rounded-2xl p-8 border-2 border-blue-500/50 relative flex flex-col">
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-semibold">Most Popular</div>
                <div className="text-center mb-6 flex-grow">
                  <h3 className="text-2xl font-semibold text-white mb-2">Solopreneur</h3>
                  <div className="text-4xl font-bold text-white mb-2">$49<span className="text-lg font-normal text-white/60">/mo</span></div>
                  <ul className="space-y-3 mt-6 text-left">
                    <li className="flex items-start gap-2 text-white/80 text-sm"><Check className="w-5 h-5 text-green-400 mt-0.5" /><span><strong>10,000</strong> AI words/month</span></li>
                    <li className="flex items-start gap-2 text-white/80 text-sm"><Check className="w-5 h-5 text-green-400 mt-0.5" /><span>Basic SEO Content Templates</span></li>
                    <li className="flex items-start gap-2 text-white/80 text-sm"><Check className="w-5 h-5 text-green-400 mt-0.5" /><span>Increased free tool limits</span></li>
                    <li className="flex items-start gap-2 text-white/80 text-sm"><Check className="w-5 h-5 text-green-400 mt-0.5" /><span>Standard email support</span></li>
                  </ul>
                </div>
                <button className="w-full bg-blue-500 text-white py-3 rounded-full font-medium hover:bg-blue-600 transition mt-8">Choose Plan</button>
              </div>

              {/* Small Business Tier */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 flex flex-col">
                <div className="text-center mb-6 flex-grow">
                  <h3 className="text-2xl font-semibold text-white mb-2">Small Business</h3>
                  <div className="text-4xl font-bold text-white mb-2">$99<span className="text-lg font-normal text-white/60">/mo</span></div>
                   <ul className="space-y-3 mt-6 text-left">
                    <li className="flex items-start gap-2 text-white/80 text-sm"><Check className="w-5 h-5 text-green-400 mt-0.5" /><span><strong>50,000</strong> AI words/month</span></li>
                    <li className="flex items-start gap-2 text-white/80 text-sm"><Check className="w-5 h-5 text-green-400 mt-0.5" /><span><strong>AI Marketing Automation</strong></span></li>
                    <li className="flex items-start gap-2 text-white/80 text-sm"><Check className="w-5 h-5 text-green-400 mt-0.5" /><span>Basic Analytics Dashboard</span></li>
                    <li className="flex items-start gap-2 text-white/80 text-sm"><Check className="w-5 h-5 text-green-400 mt-0.5" /><span>Priority email support</span></li>
                    <li className="flex items-start gap-2 text-white/80 text-sm"><Check className="w-5 h-5 text-green-400 mt-0.5" /><span>API Access</span></li>
                  </ul>
                </div>
                <button className="w-full bg-white/10 text-white py-3 rounded-full font-medium border border-white/20 hover:bg-white/20 transition mt-8">Choose Plan</button>
              </div>
            </div>
          </div>

          {/* ====================================================================== */}
          {/* ================= ENTERPRISE & PROFESSIONAL SERVICES ================= */}
          {/* ====================================================================== */}
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold text-white mb-4">Enterprise & Professional Services</h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                For businesses requiring custom solutions, dedicated support, and expert-led implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Custom Plan (Enterprise Self-Serve) */}
              <div className="bg-zinc-900 h-full rounded-2xl p-8 border border-white/10 flex flex-col">
                 <h3 className="text-2xl font-semibold text-white mb-2">Enterprise Plan</h3>
                 <p className="text-white/60 mb-6">A scalable platform for your entire organization.</p>
                 <div className="text-3xl font-bold text-white mb-2">Custom Pricing</div>
                 <ul className="space-y-3 mt-6 text-left flex-grow">
                    <li className="flex items-start gap-2 text-white/80"><Check className="w-5 h-5 text-purple-400 mt-0.5" /><span>Custom AI model fine-tuning</span></li>
                    <li className="flex items-start gap-2 text-white/80"><Check className="w-5 h-5 text-purple-400 mt-0.5" /><span>Unlimited user seats</span></li>
                    <li className="flex items-start gap-2 text-white/80"><Check className="w-5 h-5 text-purple-400 mt-0.5" /><span>Dedicated Account Manager</span></li>
                    <li className="flex items-start gap-2 text-white/80"><Check className="w-5 h-5 text-purple-400 mt-0.5" /><span>Advanced security & compliance</span></li>
                    <li className="flex items-start gap-2 text-white/80"><Check className="w-5 h-5 text-purple-400 mt-0.5" /><span>On-premise deployment option</span></li>
                    <li className="flex items-start gap-2 text-white/80"><Check className="w-5 h-5 text-purple-400 mt-0.5" /><span>SLA with uptime guarantee</span></li>
                 </ul>
                 <button className="w-full bg-purple-500 text-white py-3 rounded-full font-medium hover:bg-purple-600 transition mt-8">Schedule a Demo</button>
              </div>

              {/* Done-For-You Services */}
              <div className="space-y-6">
                <div className="bg-zinc-900 rounded-2xl p-6 border border-white/10">
                   <h3 className="text-xl font-semibold text-white">Full AI Transformation</h3>
                   <p className="text-white/60 text-sm mb-4">End-to-end strategy and implementation.</p>
                   <div className="flex justify-between items-center">
                      <span className="text-white/70">Starting at <strong className="text-white">$5,000</strong></span>
                      <button className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20">Contact Us</button>
                   </div>
                </div>
                 <div className="bg-zinc-900 rounded-2xl p-6 border border-white/10">
                   <h3 className="text-xl font-semibold text-white">Managed Content Service</h3>
                   <p className="text-white/60 text-sm mb-4">Our experts create and publish content for you.</p>
                   <div className="flex justify-between items-center">
                      <span className="text-white/70">Starting at <strong className="text-white">$499/mo</strong></span>
                      <button className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20">Learn More</button>
                   </div>
                </div>
                <div className="bg-zinc-900 rounded-2xl p-6 border border-white/10">
                   <h3 className="text-xl font-semibold text-white">AI Strategy Session</h3>
                   <p className="text-white/60 text-sm mb-4">90-minute consultation with an AI expert.</p>
                   <div className="flex justify-between items-center">
                      <span className="text-white/70"><strong className="text-white">$199</strong> one-time</span>
                      <button className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20">Book Now</button>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ section can be placed here if desired */}

        </div>
      </div>
    </div>
  );
}
