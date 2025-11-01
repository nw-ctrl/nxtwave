import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 text-center tracking-tight">
            About NextWave
          </h1>
          
          <div className="bg-zinc-900 rounded-2xl p-10 mb-8 border border-white/10">
            <h2 className="text-3xl font-semibold text-white mb-4 text-center">Our Mission</h2>
            <p className="text-xl text-white/80 text-center leading-relaxed">
              To democratize AI technology and empower every Australian business to achieve enterprise level efficiency without enterprise level investment.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Why NextWave Exists</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                NextWave was founded to solve a critical problem: artificial intelligence was transforming business operations, but only companies with substantial IT budgets could access it.
              </p>
              <p>
                Small businesses across Australia were falling behind. They could not afford enterprise AI platforms. They lacked technical teams to build custom solutions. Meanwhile, their larger competitors were automating processes, generating content at scale, and making data driven decisions in real time.
              </p>
              <p>
                We believed this was fundamentally wrong. AI should level the playing field, not widen the gap.
              </p>
              <p>
                So we built NextWave: enterprise grade AI tools, accessible to businesses of any size, completely free while building their foundation.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="text-blue-400">●</span> Transparency
                </h3>
                <p className="text-white/60 text-sm">
                  No hidden costs, no fine print. We tell you exactly what you are getting and when you will pay.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="text-blue-400">●</span> Accessibility
                </h3>
                <p className="text-white/60 text-sm">
                  Powerful AI should not require a PhD. Our tools are built for business owners, not data scientists.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="text-blue-400">●</span> Growth Partnership
                </h3>
                <p className="text-white/60 text-sm">
                  We only succeed when you succeed. Your growth is our business model.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="text-blue-400">●</span> Innovation
                </h3>
                <p className="text-white/60 text-sm">
                  We constantly improve our AI models and add new capabilities based on your feedback.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-6">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-white font-semibold mb-2">Startups</h3>
                <p className="text-white/60 text-sm">
                  Building your MVP. Use AI to move faster without hiring a full team.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏪</div>
                <h3 className="text-white font-semibold mb-2">Small Business</h3>
                <p className="text-white/60 text-sm">
                  Automate repetitive tasks and focus on what you do best.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">👨‍💼</div>
                <h3 className="text-white font-semibold mb-2">Solopreneurs</h3>
                <p className="text-white/60 text-sm">
                  Get the productivity of a team with AI powered tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
