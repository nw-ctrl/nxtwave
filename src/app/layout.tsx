import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextWave',
  description: 'AI solutions for Australian businesses',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Foot />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-12 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-white">NextWave</Link>
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-white/70 text-xs">Home</Link>
          <Link href="/services" className="text-white/70 text-xs">Services</Link>
          <Link href="/tools" className="text-white/70 text-xs">Tools</Link>
          <Link href="/pricing" className="text-white/70 text-xs">Pricing</Link>
          <Link href="/about" className="text-white/70 text-xs">About</Link>
          <Link href="/contact" className="text-white/70 text-xs">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

function Foot() {
  return (
    <footer className="bg-zinc-900 border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center text-white/50 text-xs">
        © 2025 NextWave. All rights reserved.
      </div>
    </footer>
  );
}
