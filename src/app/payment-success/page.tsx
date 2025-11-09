'use client';

import Link from 'next/link';

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-xl">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-4xl font-bold mb-4">Payment Received!</h1>
        <p className="text-xl text-gray-400 mb-6">
          Thank you for booking the AI Strategy Session.
        </p>
        <p className="text-gray-400 mb-8">
          Check your email for session details and next steps.
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
