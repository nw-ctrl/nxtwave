export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 text-center tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-white/60 mb-12 text-center max-w-3xl mx-auto">
            Start free with generous limits. Upgrade only when you need more.
          </p>

          <div className="bg-zinc-900 rounded-2xl p-8 mb-8 border-2 border-blue-500/30">
            <h2 className="text-3xl font-semibold text-white mb-4 text-center">
              Free Tier That Actually Works
            </h2>
            <p className="text-white/80 text-center text-lg mb-4">
              Get <span className="text-blue-400 font-bold">100 AI credits per month</span> completely free—forever.
            </p>
            <p className="text-white/60 text-center text-sm">
              Perfect for trying out our AI tools. No credit card required to start.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Starter</h3>
                <div className="text-4xl font-bold text-white mb-2">$0</div>
                <p className="text-white/60 text-sm">Forever free</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>100 AI credits/month</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>~1 blog post or 2 social posts</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>2 automation workflows</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Basic analytics (1GB data)</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Email support (48h response)</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>All core AI tools</span>
                </li>
              </ul>
              <button className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-white/90 transition">
                Start Free
              </button>
              <p className="text-white/40 text-xs text-center mt-3">No credit card needed</p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border-2 border-blue-500/50 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Professional</h3>
                <div className="text-4xl font-bold text-white mb-2">$99</div>
                <p className="text-white/60 text-sm">per month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>100,000 AI credits/month</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>~400 blog posts or 2,000 social posts</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Unlimited automation workflows</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Advanced analytics (50GB data)</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Priority support (4h response)</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>API access</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Remove NextWave branding</span>
                </li>
              </ul>
              <button className="w-full bg-blue-500 text-white py-3 rounded-full font-medium hover:bg-blue-600 transition">
                Upgrade to Pro
              </button>
              <p className="text-white/40 text-xs text-center mt-3">Billed monthly or $950/year (save $238)</p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-white mb-2">Custom</div>
                <p className="text-white/60 text-sm">Tailored to your needs</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Unlimited AI credits</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Unlimited everything</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Custom AI model fine-tuning</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>24/7 phone + chat support</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>On-premise deployment option</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>SLA with uptime guarantee</span>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Custom contract terms</span>
                </li>
              </ul>
              <button className="w-full bg-white/10 text-white py-3 rounded-full font-medium border border-white/20 hover:bg-white/20 transition">
                Contact Sales
              </button>
              <p className="text-white/40 text-xs text-center mt-3">Minimum $999/month</p>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-8">
            <h3 className="text-white font-semibold mb-3 text-center">What is an AI Credit?</h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">1 credit</div>
                <p className="text-white/60 text-xs">= ~100 words generated</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">250 credits</div>
                <p className="text-white/60 text-xs">= 1 blog post (600 words)</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">50 credits</div>
                <p className="text-white/60 text-xs">= 1 social media post</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">10 credits</div>
                <p className="text-white/60 text-xs">= 1 automation run</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">Need More? Buy Credits On-Demand</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-zinc-800 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">$29</div>
                <p className="text-white/80 mb-2">+25,000 credits</p>
                <p className="text-white/40 text-xs">One-time purchase</p>
              </div>
              <div className="bg-zinc-800 rounded-xl p-6 text-center border-2 border-blue-500/50">
                <div className="text-3xl font-bold text-white mb-2">$99</div>
                <p className="text-white/80 mb-2">+100,000 credits</p>
                <p className="text-blue-400 text-xs font-semibold">Best value - Save 20%</p>
              </div>
              <div className="bg-zinc-800 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">$199</div>
                <p className="text-white/80 mb-2">+250,000 credits</p>
                <p className="text-white/40 text-xs">One-time purchase</p>
              </div>
            </div>
            <p className="text-white/60 text-sm text-center mt-4">
              Credits never expire. Use them whenever you need them.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-white mb-3">Professional Services & Consulting</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Need hands-on help? Our experts can build, implement, and optimize AI solutions for your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-zinc-900 rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">AI Strategy Session</h3>
                    <p className="text-white/60 text-sm">One-on-one consultation</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">$199</div>
                    <p className="text-white/40 text-xs">per session</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>90-minute video call with AI expert</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Identify AI opportunities in your business</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Custom automation recommendations</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Written action plan delivered within 48h</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-500 text-white py-2 rounded-full text-sm font-medium hover:bg-purple-600 transition">
                  Book Session
                </button>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Custom Automation Setup</h3>
                    <p className="text-white/60 text-sm">We build it for you</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">$999</div>
                    <p className="text-white/40 text-xs">one-time</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Up to 5 custom automation workflows</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Integration with your existing tools</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Full setup, testing, and documentation</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>30 days of free support and adjustments</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-500 text-white py-2 rounded-full text-sm font-medium hover:bg-purple-600 transition">
                  Get Started
                </button>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Managed Content Service</h3>
                    <p className="text-white/60 text-sm">We create & publish for you</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">$499</div>
                    <p className="text-white/40 text-xs">per month</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>8 blog posts per month (800-1,200 words each)</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>20 social media posts (LinkedIn, Twitter, Instagram)</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>SEO optimization and keyword research</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Direct publishing to your platforms (optional)</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Monthly performance report</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-500 text-white py-2 rounded-full text-sm font-medium hover:bg-purple-600 transition">
                  Start Creating
                </button>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Data Analysis Service</h3>
                    <p className="text-white/60 text-sm">Turn data into decisions</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">$799</div>
                    <p className="text-white/40 text-xs">per project</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Comprehensive data audit and cleanup</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Custom dashboard with key metrics</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>AI-powered insights and recommendations</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Executive summary presentation</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>2 weeks of support for questions</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-500 text-white py-2 rounded-full text-sm font-medium hover:bg-purple-600 transition">
                  Request Analysis
                </button>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8 border-2 border-purple-500/50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">Full AI Transformation Package</h3>
                  <p className="text-white/70 mb-4">
                    Complete end-to-end AI implementation for your entire business. We handle everything from strategy to deployment.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                    <li className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="text-purple-400">✓</span>
                      <span>Full business process audit</span>
                    </li>
                    <li className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="text-purple-400">✓</span>
                      <span>Custom AI strategy roadmap</span>
                    </li>
                    <li className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="text-purple-400">✓</span>
                      <span>All automation workflows built</span>
                    </li>
                    <li className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="text-purple-400">✓</span>
                      <span>Content calendar & execution</span>
                    </li>
                    <li className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="text-purple-400">✓</span>
                      <span>Data infrastructure setup</span>
                    </li>
                    <li className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="text-purple-400">✓</span>
                      <span>Staff training included</span>
                    </li>
                    <li className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="text-purple-400">✓</span>
                      <span>3 months hands-on support</span>
                    </li>
                    <li className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="text-purple-400">✓</span>
                      <span>Dedicated account manager</span>
                    </li>
                  </ul>
                </div>
                <div className="md:text-right flex-shrink-0">
                  <div className="text-white/60 text-sm mb-1">Starting at</div>
                  <div className="text-4xl font-bold text-white mb-2">$5,000</div>
                  <p className="text-white/40 text-xs mb-4">Timeline: 4-8 weeks</p>
                  <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-blue-600 transition">
                    Schedule Discovery Call
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">When to Choose Professional Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="text-blue-400">🤖</span> Self-Service Platform (DIY)
                </h3>
                <p className="text-white/60 text-sm mb-3">Best if you:</p>
                <ul className="space-y-2">
                  <li className="text-white/70 text-sm">• Have time to learn and experiment</li>
                  <li className="text-white/70 text-sm">• Want full control over your tools</li>
                  <li className="text-white/70 text-sm">• Prefer to iterate at your own pace</li>
                  <li className="text-white/70 text-sm">• Need flexibility to change often</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="text-purple-400">👨‍💼</span> Professional Services (Done-For-You)
                </h3>
                <p className="text-white/60 text-sm mb-3">Best if you:</p>
                <ul className="space-y-2">
                  <li className="text-white/70 text-sm">• Need results immediately</li>
                  <li className="text-white/70 text-sm">• Don't have time to DIY</li>
                  <li className="text-white/70 text-sm">• Want expert strategy and execution</li>
                  <li className="text-white/70 text-sm">• Require custom, complex solutions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Is the free tier really free forever?</h3>
                <p className="text-white/60 text-sm">
                  Yes. 100 credits per month, every month, forever. No credit card required to sign up.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">What happens if I exceed my credit limit?</h3>
                <p className="text-white/60 text-sm">
                  Your services pause until next month credits refresh, or you can buy additional credits on-demand. We will always notify you before you hit your limit.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Can I combine the platform with professional services?</h3>
                <p className="text-white/60 text-sm">
                  Absolutely! Many customers start with our consulting to set things up, then use the platform independently. Or continue with managed services for ongoing support.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Do I need technical skills for professional services?</h3>
                <p className="text-white/60 text-sm">
                  Not at all. Our professional services are designed for business owners with no technical background. We handle all the technical complexity.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Can I switch plans anytime?</h3>
                <p className="text-white/60 text-sm">
                  Yes for platform subscriptions. Professional services are project-based or monthly retainers with 30-day notice for changes.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Do unused credits roll over?</h3>
                <p className="text-white/60 text-sm">
                  Monthly subscription credits reset each month. But credits you purchase on-demand never expire.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-white/60 text-sm">
                  Credit card, debit card, PayPal, and bank transfer (for annual plans and large projects). All processed securely through Stripe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
