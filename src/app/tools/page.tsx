// src/app/tools/page.tsx

import Link from 'next/link';
import { BookText, MessageSquare, FileText, Receipt, Calculator, Shield, ArrowRight, Sparkles } from 'lucide-react';

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-5 text-center tracking-tight">Free AI Tools</h1>
          <p className="text-xl text-white/60 mb-20 text-center max-w-3xl mx-auto font-normal">
            Try our AI powered tools instantly. No signup required.
          </p>
          
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            <ToolCard 
              icon={<FileText />}
              title="Text Generator"
              description="Generate high quality content for any purpose."
              href="/tools/text-generator"
              available
            />
            <ToolCard 
              icon={<BookText />}
              title="Document Summarizer"
              description="Summarize long documents in seconds."
              href="/tools/summarizer"
              available
            />
            <ToolCard 
              icon={<MessageSquare />}
              title="AI Chatbot"
              description="Chat with our intelligent AI assistant."
              href="/tools/chatbot"
              available
            />
            <ToolCard 
              icon={<Receipt />}
              title="Invoice Generator"
              description="Create ATO compliant tax invoices with GST."
              href="/tools/invoice-generator"
              available
            />
            <ToolCard 
              icon={<Calculator />}
              title="ROI Calculator"
              description="Calculate automation ROI and payback period."
              href="/tools/roi-calculator"
              available
            />
            <ToolCard 
              icon={<Shield />}
              title="Compliance Checker"
              description="Generate Australian compliance checklists."
              href="/tools/compliance-checker"
              available
            />
          </div>

          {/* Enterprise CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center border border-blue-500/30">
            <div className="flex justify-center mb-4">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Need Custom Tools for Your Organization?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We build enterprise-grade AI automation solutions tailored to your business workflows. From custom dashboards to full-stack integrations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
            >
              Contact Our Team <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-blue-200 text-sm mt-4">
              Join Australian enterprises already using NextWave.au
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolCard({ icon, title, description, href, available, comingSoon }: { icon: React.ReactNode, title: string; description: string; href?: string; available?: boolean; comingSoon?: boolean }) {
  const content = (
    <>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-white/60 mb-4 font-normal text-sm">{description}</p>
      <div className="mt-auto">
        {available && (
          <span className="inline-block bg-white text-black px-3 py-1 rounded-full text-xs font-normal">
            Try Now →
          </span>
        )}
        {comingSoon && (
          <span className="inline-block bg-white/10 text-white/60 px-3 py-1 rounded-full text-xs font-normal">
            Coming Soon
          </span>
        )}
      </div>
    </>
  );
  
  if (available && href) {
    return (
      <Link href={href} className="bg-zinc-900 rounded-2xl p-7 hover:bg-zinc-800 transition-all duration-300 flex flex-col">
        {content}
      </Link>
    );
  }
  
  return (
    <div className="bg-zinc-900 rounded-2xl p-7 flex flex-col opacity-60">
      {content}
    </div>
  );
}
