// src/app/services/automation/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Business Automation | NextWave AI',
  description: 'Streamline operations, reduce manual tasks, and increase efficiency with our intelligent workflow automation solutions.',
};

export default function AutomationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* --- Header --- */}
          <div className="text-left mb-12">
            <p className="text-blue-400 font-semibold mb-2">AI Service</p>
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
              Business Automation
            </h1>
            <p className="text-xl text-white/70 max-w-3xl">
              Free your team to focus on what matters most. Our AI solutions automate repetitive tasks, optimize workflows, and integrate your existing software to create a seamless operational flow.
            </p>
          </div>

          {/* --- Key Features --- */}
          <div className="p-8 bg-zinc-900 border border-white/10 rounded-2xl mb-12">
            <h2 className="text-3xl font-semibold text-white mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <FeatureItem title="Intelligent Document Processing" description="Automate data extraction from invoices, receipts, and forms, eliminating manual data entry." />
              <FeatureItem title="Automated Email Handling" description="Sort, prioritize, and draft responses for customer inquiries, support tickets, and internal communications." />
              <FeatureItem title="Workflow Optimization" description="Visually map your business processes and let our AI identify bottlenecks and suggest improvements." />
              <FeatureItem title="Cross-App Integration" description="Connect your favorite tools (like Slack, Google Workspace, and your CRM) into a single, automated system." />
            </div>
          </div>

           {/* --- Who Is This For? --- */}
          <div className="mb-12">
             <h2 className="text-3xl font-semibold text-white mb-6 text-center">Perfect For...</h2>
             <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Operations Managers</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">HR Departments</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Finance Teams</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Growing Businesses</span>
             </div>
          </div>

          {/* --- Call to Action --- */}
          <div className="text-center">
             <h2 className="text-3xl font-semibold text-white mb-4">Ready to Boost Efficiency?</h2>
             <p className="text-white/70 mb-8">Let's build a custom automation plan for your business.</p>
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
