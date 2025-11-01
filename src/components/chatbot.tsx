'use client';

import { useState } from 'react';
import { X, Send } from 'lucide-react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi there! How can NextWave help you today?',
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { id: messages.length + 1, text: input, sender: 'user' }]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: 'Thanks for your message! Our team will get back to you shortly.',
          sender: 'bot',
        },
      ]);
    }, 500);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed left-4 bottom-24 w-80 bg-white rounded-2xl shadow-2xl flex flex-col h-96 z-40">
          <div className="bg-black text-white px-6 py-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="font-semibold">NextWave Support</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-black'
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
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              onClick={handleSend}
              className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
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
