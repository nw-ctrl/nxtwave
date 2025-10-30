import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-5 text-center tracking-tight">AI Services</h1>
          <p className="text-xl text-white/60 mb-20 text-center max-w-3xl mx-auto font-normal">
            Comprehensive AI-powered solutions tailored to your business.
          </p>
          
          <div className="grid md:grid-cols-2 gap-5">
            <ServiceDetailCard 
              title="Content Generation"
              description="Transform your content strategy with AI-powered writing assistants. Generate blogs, social media posts, product descriptions, and marketing copy in seconds."
              features={['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'Product Descriptions']}
              href="/services/content-generation"
            />
            
            <ServiceDetailCard 
              title="Business Automation"
              description="Streamline operations and eliminate repetitive tasks. Our AI automation tools handle everything from document processing to workflow management."
              features={['Document Processing', 'Email Automation', 'Task Management', 'Workflow Optimization']}
              href="/services/automation"
            />
            
            <ServiceDetailCard 
              title="Data Analysis"
              description="Turn raw data into actionable insights. Our AI analytics platform helps you understand trends, predict outcomes, and make data-driven decisions."
              features={['Trend Analysis', 'Predictive Analytics', 'Data Visualization', 'Business Intelligence']}
              href="/services/data-analysis"
            />
            
            <ServiceDetailCard 
              title="Customer Support AI"
              description="Provide 24/7 customer support with intelligent chatbots. Automate responses, handle FAQs, and improve customer satisfaction."
              features={['AI Chatbots', 'FAQ Automation', 'Sentiment Analysis', 'Multi-language Support']}
              href="/services/customer-support"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceDetailCard({ title, description, features, href }: { title: string; description: string; features: string[]; href: string }) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-all duration-300">
      <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">{title}</h2>
      <p className="text-white/60 mb-6 font-normal leading-relaxed">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-white/70 flex items-center gap-2 text-sm font-normal">
            <span className="text-white">•</span> {feature}
          </li>
        ))}
      </ul>
      
      <Link 
        href={href}
        className="inline-flex items-center gap-2 text-white font-normal hover:text-white/70 transition text-sm"
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
