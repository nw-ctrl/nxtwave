'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Track visitor on page load
    trackVisitor();
  }, []);

  const trackVisitor = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const { ip } = await response.json();

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const language = navigator.language;
      const screenResolution = `${window.innerWidth}x${window.innerHeight}`;

      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'visitor',
          data: {
            ip,
            timezone,
            language,
            screenResolution,
            page: window.location.pathname,
            referrer: document.referrer || 'Direct',
          },
        }),
      });
    } catch (error) {
      console.error('Error tracking visitor:', error);
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 h-12 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-0 group">
              <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center font-bold text-lg relative overflow-hidden">
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
                  <defs>
                    <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="50%" stopColor="#d4d4d8" />
                      <stop offset="100%" stopColor="#71717a" />
                    </linearGradient>
                  </defs>
                  <rect width="100" height="100" fill="#18181b" rx="16" />
                  <path d="M 25 20 L 25 80 M 75 20 L 75 80 M 25 20 L 75 80" stroke="url(#navGradient)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              <span className="text-white font-bold hidden sm:inline ml-1">EXT</span>

              <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center font-bold text-lg relative overflow-hidden ml-1">
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
                  <defs>
                    <linearGradient id="wGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="50%" stopColor="#d4d4d8" />
                      <stop offset="100%" stopColor="#71717a" />
                    </linearGradient>
                  </defs>
                  <rect width="100" height="100" fill="#18181b" rx="16" />
                  <path d="M 15 20 L 25 80 L 35 40 L 50 80 L 65 40 L 75 80 L 85 20" stroke="url(#wGradient)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              <span className="text-white font-bold hidden sm:inline ml-1">AVE</span>
            </Link>
            <div className="hidden md:flex gap-8">
              <Link href="/" className="text-white/70 text-xs hover:text-white transition">
                Home
              </Link>
              <Link href="/services" className="text-white/70 text-xs hover:text-white transition">
                Services
              </Link>
              <Link href="/tools" className="text-white/70 text-xs hover:text-white transition">
                Tools
              </Link>
              <Link href="/pricing" className="text-white/70 text-xs hover:text-white transition">
                Pricing
              </Link>
              <Link href="/about" className="text-white/70 text-xs hover:text-white transition">
                About
              </Link>
              <Link href="/contact" className="text-white/70 text-xs hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-zinc-900 border-t border-white/10 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center text-white/50 text-xs">
            © 2025 NextWave. All rights reserved.
          </div>
        </footer>
        <ChatbotWidget />
      </body>
    </html>
  );
}

function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState<Array<{ id: number; text: string; sender: string }>>([]);
  const [input, setInput] = useState("");
  const [agreedToDisclaimer, setAgreedToDisclaimer] = useState(false);

  const handleStartChat = () => {
    if (!name.trim() || !email.trim() || !agreedToDisclaimer) {
      alert("Please fill all fields and agree to the disclaimer");
      return;
    }

    setStage("chat");
    const greeting = `Hi ${name}! Welcome to NextWave. How can we help you today?`;
    setMessages([{ id: 1, text: greeting, sender: "bot" }]);

    saveChat({
      name,
      email,
      timestamp: new Date().toISOString(),
      startedChat: true,
    });

    trackAnalytics('chat_started', { name, email });
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { id: messages.length + 1, text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botMsg = {
        id: messages.length + 2,
        text: "Thanks for your message! Our team will get back to you shortly.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMsg]);

      saveChatMessage({
        name,
        email,
        userMessage: input,
        timestamp: new Date().toISOString(),
      });
    }, 500);
  };

  const saveChat = async (data: any) => {
    try {
      await fetch("/api/save-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Error saving chat:", error);
    }
  };

  const saveChatMessage = async (data: any) => {
    try {
      await fetch("/api/save-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Error saving message:", error);
    }
  };

  const trackAnalytics = async (event: string, data: any) => {
    try {
      await fetch("/api/analytics/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event, data }),
      });
    } catch (error) {
      console.error("Error tracking:", error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:left-4 md:bottom-24 w-full md:w-96 h-full md:h-96 bg-white rounded-none md:rounded-2xl shadow-2xl flex flex-col z-40 md:rounded-2xl">
          {stage === "form" ? (
            <div className="flex flex-col h-full p-4 md:p-6 space-y-3 md:space-y-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg md:text-xl font-semibold text-black">Start a Conversation</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="md:hidden text-gray-600 text-2xl hover:text-black"
                >
                  ✕
                </button>
              </div>

              <div>
                <label className="text-xs md:text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-xs md:text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex-1 bg-gray-50 rounded-lg p-3 overflow-y-auto text-xs text-gray-700 space-y-2">
                <p className="font-semibold">Privacy Notice</p>
                <p>
                  Your information is collected to improve customer experience and service quality. We may use chat conversations for training and analytics purposes to enhance our support systems. Your data is treated with strict confidentiality.
                </p>
              </div>

              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToDisclaimer}
                  onChange={(e) => setAgreedToDisclaimer(e.target.checked)}
                  className="mt-1"
                />
                <span className="text-xs text-gray-700">
                  I agree that my information may be recorded for customer experience improvement
                </span>
              </label>

              <button
                onClick={handleStartChat}
                disabled={!agreedToDisclaimer}
                className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-50 text-sm"
              >
                Start Chat
              </button>
            </div>
          ) : (
            <>
              <div className="bg-black text-white px-4 md:px-6 py-3 md:py-4 rounded-t-none md:rounded-t-2xl flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-sm md:text-base">NextWave Support</h3>
                  <p className="text-xs text-gray-300">{name}</p>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setStage("form");
                  }}
                  className="hover:bg-white/20 p-1 rounded transition"
                >
                  ✕
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm ${
                        msg.sender === "user" ? "bg-black text-white" : "bg-gray-100 text-black"
                      }`}
                    >
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 p-3 md:p-4 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  onClick={handleSend}
                  className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition"
                >
                  →
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 bottom-4 w-14 h-14 bg-black rounded-full flex items-center justify-center text-white font-bold text-2xl hover:bg-gray-800 transition shadow-lg z-40"
      >
        N
      </button>
    </>
  );
}
