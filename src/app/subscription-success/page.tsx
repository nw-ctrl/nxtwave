'use client';

import Link from 'next/link';

export default function SubscriptionSuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-xl">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-4xl font-bold mb-4">Subscription Confirmed!</h1>
        <p className="text-xl text-gray-400 mb-6">
          Thank you for subscribing to NextWave. Your access is now active.
        </p>
        <p className="text-gray-400 mb-8">
          A confirmation email has been sent to your inbox with billing details.
        </p>

        <Link href="/dashboard">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </main>
  );
}
