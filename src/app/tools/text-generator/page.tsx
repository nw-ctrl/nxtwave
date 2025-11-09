// src/app/tools/text-generator/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';
import EnterpriseCTA from '../../../components/EnterpriseCTA';

export default function TextGeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const generateText = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/generate-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      
      const data = await response.json();
      setOutput(data.text);
    } catch (error) {
      setOutput('Error generating content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/tools" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Tools
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-white" />
            <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">AI Text Generator</h1>
          </div>
          
          <p className="text-xl text-white/60 mb-12 font-normal">
            Generate high quality content for blogs, social media, emails, and more.
          </p>
          
          <div className="bg-zinc-900 rounded-2xl p-8 space-y-6 mb-8">
            <div>
              <label className="block text-white font-normal mb-3 text-sm">What would you like to create?</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Example: Write a professional LinkedIn post about AI in business..."
                rows={4}
                className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition resize-none"
              />
            </div>
            
            <button
              onClick={generateText}
              disabled={loading || !prompt.trim()}
              className="w-full bg-white text-black px-7 py-3 rounded-full font-normal hover:bg-white/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Generating...' : 'Generate Content'}
            </button>
            
            {output && (
              <div>
                <label className="block text-white font-normal mb-3 text-sm">Generated Content:</label>
                <div className="bg-zinc-800 border border-white/10 rounded-xl p-4 text-white/80 whitespace-pre-wrap">
                  {output}
                </div>
              </div>
            )}
          </div>
          
          {/* Enterprise CTA */}
          <EnterpriseCTA />
        </div>
      </div>
    </div>
  );
}
