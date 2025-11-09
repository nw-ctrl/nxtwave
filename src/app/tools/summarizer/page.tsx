// src/app/tools/summarizer/page.tsx
'use client';

import { useState, useRef } from 'react';
import { BookText, Sparkles, Upload, X, Clipboard, Check } from 'lucide-react';
import Image from 'next/image';
import EnterpriseCTA from '../../../components/EnterpriseCTA';

const loadingMessages = [
  "The magic is in progress...", "Distilling the key points...", "Analyzing your text...", "Crafting the perfect summary...",
];

export default function SummarizerPage() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentLoadingMessage, setCurrentLoadingMessage] = useState(loadingMessages[0]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [hasCopied, setHasCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setInputText('');
    setUploadedFile(file);
    setError('');
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary('');
    setError('');
    setHasCopied(false);
    setCurrentLoadingMessage(loadingMessages[Math.floor(Math.random() * loadingMessages.length)]);

    try {
      let response;
      if (uploadedFile) {
        const formData = new FormData();
        formData.append('file', uploadedFile);
        response = await fetch('/api/summarize', { method: 'POST', body: formData });
      } else {
        response = await fetch('/api/summarize', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: inputText }),
        });
      }

      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const errData = await response.json();
            throw new Error(errData.error || `Server responded with status ${response.status}`);
        } else {
            throw new Error(`The server had a problem and responded with status ${response.status}.`);
        }
      }

      const data = await response.json();
      setSummary(data.summary);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-semibold text-white mb-4 tracking-tight">Document Summarizer</h1>
            <p className="text-lg text-white/60">Paste text, or upload a .txt, .md, or .pdf file.</p>
          </div>

          <div className="space-y-8">
            <div>
              <label className="text-lg font-semibold mb-3 block">Your Content</label>
              <textarea
                value={inputText}
                onChange={(e) => { setInputText(e.target.value); setUploadedFile(null); }}
                placeholder="Paste your article, report, or any long text here..."
                className="w-full h-64 bg-zinc-900 border border-white/10 rounded-lg p-4 text-white/80 focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-y"
              />
              <div className="flex items-center justify-center my-4"><span className="text-white/40">OR</span></div>
              
              <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".txt,.md,.pdf" className="hidden" />
              {!uploadedFile ? (
                  <button onClick={() => fileInputRef.current?.click()} className="w-full bg-zinc-800 border border-dashed border-white/20 rounded-lg py-4 flex items-center justify-center gap-2 hover:bg-zinc-700 transition">
                    <Upload className="w-5 h-5" />
                    Upload a file (.pdf, .txt, .md)
                  </button>
              ) : (
                <div className="w-full bg-zinc-800 border border-white/20 rounded-lg p-3 flex items-center justify-between">
                    <p className="truncate text-white/80">{uploadedFile.name}</p>
                    <button onClick={() => setUploadedFile(null)} className="p-1 hover:bg-zinc-700 rounded-full"><X className="w-4 h-4" /></button>
                </div>
              )}
            </div>
            
            <div className="text-center">
              <button onClick={handleSummarize} disabled={(!inputText && !uploadedFile) || isLoading} className="bg-blue-600 text-white font-semibold px-10 py-3 rounded-full hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition">
                {isLoading ? 'Please wait...' : 'Summarize'}
              </button>
            </div>

            {(summary || isLoading || error) && (
              <div className="relative">
                <label className="text-lg font-semibold mb-3 block">Summary</label>
                
                {summary && !isLoading && (
                  <button onClick={handleCopy} className="absolute top-0 right-0 mt-2 mr-2 p-2 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition">
                    {hasCopied ? <Check className="w-5 h-5 text-green-400" /> : <Clipboard className="w-5 h-5" />}
                  </button>
                )}
                
                <div className="w-full min-h-[16rem] bg-zinc-900 border border-white/10 rounded-lg p-4 text-white/80 overflow-y-auto">
                  {isLoading ? (
                    <div className="flex items-center justify-center h-full"><Sparkles className="w-6 h-6 animate-spin" /><p className="ml-3">{currentLoadingMessage}</p></div>
                  ) : error ? (
                     <p className="text-red-400">{error}</p>
                  ) : (
                    <p className="whitespace-pre-wrap">{summary}</p>
                  )}
                </div>
              </div>
            )}
            
            <div className="flex items-center gap-4 bg-zinc-900/50 border border-white/10 rounded-lg p-4">
                <div className="flex-shrink-0">
                    <Image 
                      src="/trust-seal.png"
                      alt="100% Secure Trust Seal"
                      width={60}
                      height={60}
                    />
                </div>
                <div>
                    <h4 className="font-semibold text-white">Your Privacy is 100% Guaranteed</h4>
                    <p className="text-sm text-white/60">We do not store, save, or train on your data. All processing is done in-memory and your content is discarded the moment you leave the page.</p>
                </div>
            </div>
          </div>

          {/* Enterprise CTA */}
          <EnterpriseCTA />
        </div>
      </div>
    </div>
  );
}
