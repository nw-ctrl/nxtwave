import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextWave",
  description: "AI solutions",
};

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
  'use client';
  return (
    <div className="fixed left-4 bottom-4 w-14 h-14 bg-black rounded-full flex items-center justify-center text-white font-bold text-2xl hover:bg-gray-800 transition shadow-lg z-40 cursor-pointer">
      N
    </div>
  );
}
