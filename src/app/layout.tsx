import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextWave - AI-Powered Digital Solutions',
  description: 'Transform your business with cutting-edge AI services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-12">
              <Link href="/" className="text-xl font-semibold text-white">NextWave</Link>
              <div className="hidden md:flex items-center gap-8">
                <Link href="/services" className="text-white/70 text-xs">Services</Link>
                <Link href="/tools" className="text-white/70 text-xs">Tools</Link>
                <Link href="/about" className="text-white/70 text-xs">About</Link>
                <Link href="/dashboard" className="text-white/70 text-xs">Analytics</Link>
                <Link href="/contact" className="text-white/70 text-xs">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-zinc-900 border-t border-white/10 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center text-white/50 text-xs">
            © 2025 NextWave.au. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
