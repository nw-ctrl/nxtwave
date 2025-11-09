// src/app/tools/chatbot/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User } from 'lucide-react';
import EnterpriseCTA from '../../../components/EnterpriseCTA';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="pt-32 pb-8 px-4 flex-grow">
        <div className="max-w-3xl mx-auto h-full flex flex-col">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-semibold text-white mb-4 tracking-tight">AI Chatbot</h1>
            <p className="text-lg text-white/60">Chat with an intelligent AI assistant. Ask anything!</p>
          </div>

          {/* Chat Messages */}
          <div className="flex-grow overflow-y-auto mb-6 space-y-6 pr-4">
            {messages.length > 0
              ? messages.map(m => (
                  <div key={m.id} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                      {m.role === 'user' ? <User className="w-5 h-5" /> : <Sparkles className="w-5 h-5 text-blue-400" />}
                    </div>
                    <div className="flex-grow pt-1">
                      <p className="font-semibold">{m.role === 'user' ? 'You' : 'AI Assistant'}</p>
                      <p className="text-white/80 whitespace-pre-wrap">{m.content}</p>
                    </div>
                  </div>
                ))
              : (
                <div className="text-center text-white/50 pt-16">
                  <p>No messages yet. Start the conversation!</p>
                </div>
              )}
            {isLoading && (
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
                </div>
                <div className="flex-grow pt-1">
                  <p className="font-semibold">AI Assistant</p>
                  <p className="text-white/80">Thinking...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="relative mb-8">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about anything..."
              disabled={isLoading}
              className="w-full bg-zinc-900 border border-white/10 rounded-lg p-4 pr-14 text-white/80 focus:ring-2 focus:ring-blue-500 focus:outline-none transition disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 p-2 bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </form>

          {/* Enterprise CTA */}
          <EnterpriseCTA />
        </div>
      </div>
    </div>
  );
}
