'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Eye, Users, TrendingUp, Globe } from 'lucide-react';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalVisitors: 0,
    totalPageViews: 0,
    averageSessionDuration: 0,
    topPages: [] as { page: string; views: number }[],
    topCountries: [] as { country: string; visitors: number }[],
    lastUpdated: new Date().toLocaleString(),
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch analytics data
    fetchAnalytics();
    // Refresh every 5 minutes
    const interval = setInterval(fetchAnalytics, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/analytics');
      const data = await response.json();
      setStats(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="mb-8">
            <h1 className="text-5xl font-semibold text-white mb-3 tracking-tight">Analytics Dashboard</h1>
            <p className="text-white/60">Real-time visitor statistics and insights</p>
            <p className="text-white/40 text-xs mt-2">Last updated: {stats.lastUpdated}</p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-white/60">Loading analytics...</p>
            </div>
          ) : (
            <>
              {/* Main Stats */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <StatCard
                  icon={<Eye className="w-6 h-6" />}
                  label="Total Visitors"
                  value={stats.totalVisitors.toLocaleString()}
                  color="blue"
                />
                <StatCard
                  icon={<TrendingUp className="w-6 h-6" />}
                  label="Page Views"
                  value={stats.totalPageViews.toLocaleString()}
                  color="green"
                />
                <StatCard
                  icon={<Users className="w-6 h-6" />}
                  label="Avg Session Duration"
                  value={`${Math.round(stats.averageSessionDuration)}s`}
                  color="purple"
                />
                <StatCard
                  icon={<Globe className="w-6 h-6" />}
                  label="Countries"
                  value={(stats.topCountries?.length || 0).toString()}
                  color="orange"
                />
              </div>

              {/* Top Pages */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl font-semibold text-white mb-6 tracking-tight">Top Pages</h2>
                  {stats.topPages && stats.topPages.length > 0 ? (
                    <div className="space-y-4">
                      {stats.topPages.slice(0, 5).map((page, index) => (
                        <div key={index} className="flex items-center justify-between pb-4 border-b border-white/10 last:border-b-0">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-semibold text-white">
                              {index + 1}
                            </div>
                            <span className="text-white/80 text-sm">{page.page || '/'}</span>
                          </div>
                          <span className="text-white font-semibold">{page.views.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-white/60 text-sm">No data available yet</p>
                  )}
                </div>

                {/* Top Countries */}
                <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl font-semibold text-white mb-6 tracking-tight">Top Locations</h2>
                  {stats.topCountries && stats.topCountries.length > 0 ? (
                    <div className="space-y-4">
                      {stats.topCountries.slice(0, 5).map((country, index) => (
                        <div key={index} className="flex items-center justify-between pb-4 border-b border-white/10 last:border-b-0">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-semibold text-white">
                              {index + 1}
                            </div>
                            <span className="text-white/80 text-sm">{country.country || 'Unknown'}</span>
                          </div>
                          <span className="text-white font-semibold">{country.visitors.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-white/60 text-sm">No data available yet</p>
                  )}
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">About Your Analytics</h3>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>• Data is collected via Vercel Analytics (privacy-friendly, no third-party cookies)</li>
                  <li>• Statistics update automatically every 5 minutes</li>
                  <li>• All data is anonymized and compliant with GDPR</li>
                  <li>• Powered by Vercel's native analytics infrastructure</li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: string }) {
  const colorClasses = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    green: 'bg-green-500/10 text-green-400 border-green-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  };

  return (
    <div className={`rounded-2xl p-6 border ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-white/80">{label}</h3>
        <div className="opacity-60">{icon}</div>
      </div>
      <p className="text-3xl font-bold text-white">{value}</p>
    </div>
  );
}
