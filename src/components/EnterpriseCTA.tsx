// src/app/components/EnterpriseCTA.tsx
import Link from 'next/link';
import { ArrowRight, Building2 } from 'lucide-react';

export default function EnterpriseCTA() {
  return (
    <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 md:p-10 text-center mt-12">
      <div className="flex justify-center mb-4">
        <div className="bg-blue-600/20 p-3 rounded-full">
          <Building2 className="w-8 h-8 text-blue-400" />
        </div>
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
        Need This for Your Enterprise?
      </h3>
      <p className="text-lg text-white/70 mb-6 max-w-xl mx-auto">
        We can build custom versions of this tool integrated with your systems, branded for your organization, and scaled for your team.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
      >
        Contact Our Team <ArrowRight className="w-4 h-4" />
      </Link>
      <p className="text-white/50 text-sm mt-4">
        Used by Australian enterprises • 100% Locally Owned & Operated
      </p>
    </div>
  );
}
