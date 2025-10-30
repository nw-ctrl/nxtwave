import Link from 'next/link';

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-5 text-center tracking-tight">Free AI Tools</h1>
          <p className="text-xl text-white/60 mb-20 text-center max-w-3xl mx-auto font-normal">
            Try our AI-powered tools instantly. No signup required.
          </p>
          
          <div className="grid md:grid-cols-3 gap-5">
            <ToolCard 
              title="Text Generator"
              description="Generate high-quality content for any purpose."
              href="/tools/text-generator"
              available
            />
            <ToolCard 
              title="Document Summarizer"
              description="Summarize long documents in seconds."
              comingSoon
            />
            <ToolCard 
              title="AI Chatbot"
              description="Chat with our intelligent AI assistant."
              comingSoon
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolCard({ title, description, href, available, comingSoon }: { title: string; description: string; href?: string; available?: boolean; comingSoon?: boolean }) {
  const content = (
    <>
      <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-white/60 mb-4 font-normal text-sm">{description}</p>
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
    </>
  );
  
  if (available && href) {
    return (
      <Link href={href} className="bg-zinc-900 rounded-2xl p-7 hover:bg-zinc-800 transition-all duration-300 block">
        {content}
      </Link>
    );
  }
  
  return (
    <div className="bg-zinc-900 rounded-2xl p-7">
      {content}
    </div>
  );
}
