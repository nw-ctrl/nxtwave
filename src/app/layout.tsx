'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 h-12 flex justify-between items-center">
            <Link href="/" className="text-white text-xl font-semibold">
              NextWave
            </Link>
            <div className="hidden md:flex gap-8">
              <Link href="/" className="text-white/70 text-xs">
                Home
              </Link>
              <Link href="/services" className="text-white/70 text-xs">
                Services
              </Link>
              <Link href="/tools" className="text-white/70 text-xs">
                Tools
              </Link>
              <Link href="/pricing" className="text-white/70 text-xs">
                Pricing
              </Link>
              <Link href="/about" className="text-white/70 text-xs">
                About
              </Link>
              <Link href="/contact" className="text-white/70 text-xs">
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
  const [phone, setPhone] = useState("");
  const [messages, setMessages] = useState<Array<{ id: number; text: string; sender: string }>>([]);
  const [input, setInput] = useState("");
  const [agreedToDisclaimer, setAgreedToDisclaimer] = useState(false);

  const handleStartChat = () => {
    if (!name.trim() || !email.trim() || !phone.trim() || !agreedToDisclaimer) {
      alert("Please fill all fields and agree to the disclaimer");
      return;
    }

    setStage("chat");
    const greeting = `Hi ${name}! Welcome to NextWave. How can we help you today?`;
    setMessages([{ id: 1, text: greeting, sender: "bot" }]);

    saveChat({
      name,
      email,
      phone,
      timestamp: new Date().toISOString(),
      startedChat: true,
    });
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
        phone,
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

  return (
    <>
      {isOpen && (
        <div className="fixed left-4 bottom-24 w-96 bg-white rounded-2xl shadow-2xl flex flex-col h-screen md:h-96 z-40">
          {stage === "form" ? (
            <div className="flex flex-col h-full p-6 space-y-4">
              <h3 className="text-xl font-semibold text-black">Start a Conversation</h3>

              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+61 123 456 789"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex-1 bg-gray-50 rounded-lg p-4 overflow-y-auto text-xs text-gray-700 space-y-2">
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
                className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-50"
              >
                Start Chat
              </button>
            </div>
          ) : (
            <>
              <div className="bg-black text-white px-6 py-4 rounded-t-2xl flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">NextWave Support</h3>
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

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.sender === "user" ? "bg-black text-white" : "bg-gray-100 text-black"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 p-4 flex gap-2">
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
