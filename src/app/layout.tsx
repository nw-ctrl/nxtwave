import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextWave - AI-Powered Digital Solutions',
  description: 'Transform your business with cutting-edge AI services for content generation, automation, and data analysis',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-12">
          <Link href="/" className="text-xl font-semibold text-white tracking-tight">NextWave</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-white/70 hover:text-white transition text-xs font-normal">Services</Link>
            <Link href="/tools" className="text-white/70 hover:text-white transition text-xs font-normal">AI Tools</Link>
            <Link href="/about" className="text-white/70 hover:text-white transition text-xs font-normal">About</Link>
            <Link href="/dashboard" className="text-white/70 hover:text-white transition text-xs font-normal">Analytics</Link>
            <Link href="/contact" className="text-white/70 hover:text-white transition text-xs font-normal">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-base font-semibold text-white mb-3 tracking-tight">NextWave</h3>
            <p className="text-white/60 text-xs font-normal">AI-powered solutions.</p>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-white/60 text-xs font-normal">
              <li><Link href="/services/content-generation" className="hover:text-white transition">Content Generation</Link></li>
              <li><Link href="/services/automation" className="hover:text-white transition">Business Automation</Link></li>
              <li><Link href="/services/data-analysis" className="hover:text-white transition">Data Analysis</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold mb-3">AI Tools</h4>
            <ul className="space-y-2 text-white/60 text-xs font-normal">
              <li><Link href="/tools" className="hover:text-white transition">Text Generator</Link></li>
              <li><Link href="/tools" className="hover:text-white transition">Summarizer</Link></li>
              <li><Link href="/tools" className="hover:text-white transition">Chatbot</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-white/60 text-xs font-normal">
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-white/60 text-xs font-normal">
              <li><Link href="/privacy" className="hover:text-white transition">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-5 border-t border-white/10 text-white/50 text-xs font-normal">© 2025 NextWave.au. All rights reserved.</div>
      </div>
    </footer>
  );
}