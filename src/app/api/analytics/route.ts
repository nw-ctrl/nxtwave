import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // This would connect to your analytics data source
    // For now, we'll return mock data that updates based on time
    
    const mockData = {
      totalVisitors: Math.floor(Math.random() * 5000) + 500,
      totalPageViews: Math.floor(Math.random() * 15000) + 1000,
      averageSessionDuration: Math.floor(Math.random() * 300) + 30,
      topPages: [
        { page: '/', views: Math.floor(Math.random() * 2000) + 500 },
        { page: '/tools/text-generator', views: Math.floor(Math.random() * 1500) + 200 },
        { page: '/services', views: Math.floor(Math.random() * 1200) + 150 },
        { page: '/about', views: Math.floor(Math.random() * 800) + 100 },
        { page: '/contact', views: Math.floor(Math.random() * 600) + 50 },
      ],
      topCountries: [
        { country: 'Australia', visitors: Math.floor(Math.random() * 1500) + 300 },
        { country: 'United States', visitors: Math.floor(Math.random() * 1200) + 200 },
        { country: 'United Kingdom', visitors: Math.floor(Math.random() * 800) + 100 },
        { country: 'Canada', visitors: Math.floor(Math.random() * 600) + 80 },
        { country: 'India', visitors: Math.floor(Math.random() * 500) + 60 },
      ],
      lastUpdated: new Date().toLocaleString(),
    };

    return NextResponse.json(mockData);
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}
