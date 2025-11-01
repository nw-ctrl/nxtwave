'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Visitor {
  id: string;
  ip: string;
  timezone: string;
  language: string;
  screenResolution: string;
  page: string;
  timestamp: string;
  userAgent: { os: string; browser: string; device: string };
}

interface Analytics {
  chats: any[];
  inquiries: any[];
  pageViews: any[];
  visitors: Visitor[];
}

export default function AnalyticsPage() {
  const router = useRouter();
  const [analytics, setAnalytics] = useState<Analytics>({
    chats: [],
    inquiries: [],
    pageViews: [],
    visitors: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/dashboard/login');
      return;
    }

    fetchAnalytics();
    const interval = setInterval(fetchAnalytics, 10000);

    return () => clearInterval(interval);
  }, [router]);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/analytics/track');
      const data = await response.json();
      setAnalytics(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>;
  }

  const totalVisitors = analytics.visitors.length;
  const totalChats = analytics.chats.length;
  const totalInquiries = analytics.inquiries.length;
  const totalPageViews = analytics.pageViews.length;

  // Get OS breakdown
  const osBreakdown = analytics.visitors.reduce((acc: any, v) => {
    const os = v.userAgent.os;
    acc[os] = (acc[os] || 0) + 1;
    return acc;
  }, {});

  // Get Browser breakdown
  const browserBreakdown = analytics.visitors.reduce((acc: any, v) => {
    const browser = v.userAgent.browser;
    acc[browser] = (acc[browser] || 0) + 1;
    return acc;
  }, {});

  // Get Device breakdown
  const deviceBreakdown = analytics.visitors.reduce((acc: any, v) => {
    const device = v.userAgent.device;
    acc[device] = (acc[device] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <Link href="/dashboard" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Back to Dashboard
        </Link>

        <h1 className="text-5xl font-bold text-white mb-12">📊 Analytics</h1>

        {/* Main Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white/60 text-sm font-medium mb-2">VISITORS</h3>
            <p className="text-4xl font-bold text-blue-400">{totalVisitors}</p>
            <p className="text-white/60 text-sm mt-2">Total site visitors</p>
          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white/60 text-sm font-medium mb-2">PAGE VIEWS</h3>
            <p className="text-4xl font-bold text-purple-400">{totalPageViews}</p>
            <p className="text-white/60 text-sm mt-2">Total page views</p>
          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white/60 text-sm font-medium mb-2">CHATS</h3>
            <p className="text-4xl font-bold text-green-400">{totalChats}</p>
            <p className="text-white/60 text-sm mt-2">Chat inquiries</p>
          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white/60 text-sm font-medium mb-2">CONTACT FORM</h3>
            <p className="text-4xl font-bold text-orange-400">{totalInquiries}</p>
            <p className="text-white/60 text-sm mt-2">Form inquiries</p>
          </div>
        </div>

        {/* OS Breakdown */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-6">Operating Systems</h2>
            <div className="space-y-3">
              {Object.entries(osBreakdown).map(([os, count]: [string, any]) => (
                <div key={os} className="flex justify-between items-center">
                  <span className="text-white/60">{os}</span>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500"
                        style={{ width: `${(count / totalVisitors) * 100}%` }}
                      />
                    </div>
                    <span className="text-white font-semibold w-8 text-right">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-6">Browsers</h2>
            <div className="space-y-3">
              {Object.entries(browserBreakdown).map(([browser, count]: [string, any]) => (
                <div key={browser} className="flex justify-between items-center">
                  <span className="text-white/60">{browser}</span>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500"
                        style={{ width: `${(count / totalVisitors) * 100}%` }}
                      />
                    </div>
                    <span className="text-white font-semibold w-8 text-right">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-6">Devices</h2>
            <div className="space-y-3">
              {Object.entries(deviceBreakdown).map(([device, count]: [string, any]) => (
                <div key={device} className="flex justify-between items-center">
                  <span className="text-white/60">{device}</span>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500"
                        style={{ width: `${(count / totalVisitors) * 100}%` }}
                      />
                    </div>
                    <span className="text-white font-semibold w-8 text-right">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Visitors Table */}
        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Visitors</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-white/60 font-medium">IP</th>
                  <th className="text-left py-4 px-4 text-white/60 font-medium">OS</th>
                  <th className="text-left py-4 px-4 text-white/60 font-medium">Browser</th>
                  <th className="text-left py-4 px-4 text-white/60 font-medium">Device</th>
                  <th className="text-left py-4 px-4 text-white/60 font-medium">Page</th>
                  <th className="text-left py-4 px-4 text-white/60 font-medium">Timezone</th>
                  <th className="text-left py-4 px-4 text-white/60 font-medium">Time</th>
                </tr>
              </thead>
              <tbody>
                {analytics.visitors.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 px-4 text-center text-white/60">
                      No visitors yet
                    </td>
                  </tr>
                ) : (
                  analytics.visitors.slice().reverse().slice(0, 20).map((visitor) => (
                    <tr key={visitor.id} className="border-b border-white/10 hover:bg-zinc-800/50">
                      <td className="py-4 px-4 text-white font-mono text-xs">{visitor.ip}</td>
                      <td className="py-4 px-4 text-white/60">{visitor.userAgent.os}</td>
                      <td className="py-4 px-4 text-white/60">{visitor.userAgent.browser}</td>
                      <td className="py-4 px-4 text-white/60">{visitor.userAgent.device}</td>
                      <td className="py-4 px-4 text-white/60">{visitor.page}</td>
                      <td className="py-4 px-4 text-white/60 text-xs">{visitor.timezone}</td>
                      <td className="py-4 px-4 text-white/60 text-xs">
                        {new Date(visitor.timestamp).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
