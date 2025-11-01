import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextWave | AI Solutions for Australian Businesses',
  description: 'Enterprise-grade AI services for content creation, business automation, and data analysis. Start free with 100 credits monthly.',
  keywords: 'AI services Australia, business automation, AI tools, content generation, data analysis',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
      </head>
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-12">
          <Link href="/" className="text-xl font-semibold text-white tracking-tight">
            NextWave
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white/70 hover:text-white transition text-xs font-normal">Home</Link>
            <Link href="/services" className="text-white/70 hover:text-white transition text-xs font-normal">Services</Link>
            <Link href="/tools" className="text-white/70 hover:text-white transition text-xs font-normal">Tools</Link>
            <Link href="/pricing" className="text-white/70 hover:text-white transition text-xs font-normal">Pricing</Link>
            <Link href="/about" className="text-white/70 hover:text-white transition text-xs font-normal">About</Link>
            <Link href="/contact" className="text-white/70 hover:text-white transition text-xs font-normal">Contact</Link>
          </div>

          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu() {
  return (
    <div className="md:hidden">
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <label htmlFor="menu-toggle" className="cursor-pointer text-white hover:text-white/70 transition">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>

      <div className="hidden peer-checked:block absolute top-12 left-0 right-0 bg-black/95 border-b border-white/10">
        <div className="flex flex-col p-4 gap-4">
          <Link href="/" className="text-white/70 hover:text-white transition text-sm font-normal">Home</Link>
          <Link href="/services" className="text-white/70 hover:text-white transition text-sm font-normal">Services</Link>
          <Link href="/tools" className="text-white/70 hover:text-white transition text-sm font-normal">Tools</Link>
          <Link href="/pricing" className="text-white/70 hover:text-white transition text-sm font-normal">Pricing</Link>
          <Link href="/about" className="text-white/70 hover:text-white transition text-sm font-normal">About</Link>
          <Link href="/contact" className="text-white/70 hover:text-white transition text-sm font-normal">Contact</Link>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-base font-semibold text-white mb-3 tracking-tight">NextWave</h3>
            <p className="text-white/60 text-xs font-normal">Enterprise AI solutions for business.</p>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-white/60 text-xs font-normal">
              <li><Link href="/services" className="hover:text-white transition">Content Generation</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Business Automation</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Data Analysis</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold mb-3">Tools</h4>
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
        <div className="pt-5 border-t border-white/10 text-white/50 text-xs font-normal">© 2025 NextWave. All rights reserved.</div>
      </div>
    </footer>
  );
}
