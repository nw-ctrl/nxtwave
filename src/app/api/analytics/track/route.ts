import { promises as fs } from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), '.data');
const analyticsFile = path.join(dataDir, 'analytics.json');

async function ensureDataDir() {
  try {
    await fs.mkdir(dataDir, { recursive: true });
  } catch (error) {
    console.error('Error creating data directory:', error);
  }
}

async function readAnalytics() {
  await ensureDataDir();
  try {
    const data = await fs.readFile(analyticsFile, 'utf-8');
    return JSON.parse(data);
  } catch {
    return {
      chats: [],
      inquiries: [],
      visitors: [],
      pageViews: [],
    };
  }
}

async function writeAnalytics(data: any) {
  await ensureDataDir();
  await fs.writeFile(analyticsFile, JSON.stringify(data, null, 2));
}

function parseUserAgent(userAgent: string) {
  let os = 'Unknown';
  let browser = 'Unknown';
  let device = 'Desktop';

  // Detect OS
  if (userAgent.includes('Windows')) os = 'Windows';
  else if (userAgent.includes('Mac')) os = 'macOS';
  else if (userAgent.includes('Linux')) os = 'Linux';
  else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) os = 'iOS';
  else if (userAgent.includes('Android')) os = 'Android';

  // Detect Browser
  if (userAgent.includes('Chrome')) browser = 'Chrome';
  else if (userAgent.includes('Safari')) browser = 'Safari';
  else if (userAgent.includes('Firefox')) browser = 'Firefox';
  else if (userAgent.includes('Edge')) browser = 'Edge';
  else if (userAgent.includes('Opera')) browser = 'Opera';

  // Detect Device
  if (userAgent.includes('Mobile') || userAgent.includes('iPhone') || userAgent.includes('Android')) {
    device = 'Mobile';
  } else if (userAgent.includes('iPad') || userAgent.includes('Tablet')) {
    device = 'Tablet';
  }

  return { os, browser, device };
}

export async function POST(request: Request) {
  try {
    const { event, data } = await request.json();
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const { os, browser, device } = parseUserAgent(userAgent);

    const analytics = await readAnalytics();
    const timestamp = new Date().toISOString();

    if (event === 'chat_started') {
      analytics.chats.push({
        ...data,
        timestamp,
        id: 'chat_' + Date.now(),
        userAgent: { os, browser, device },
      });
    } else if (event === 'inquiry_submitted') {
      analytics.inquiries.push({
        ...data,
        timestamp,
        id: 'inquiry_' + Date.now(),
        userAgent: { os, browser, device },
      });
    } else if (event === 'page_view') {
      analytics.pageViews.push({
        page: data.page,
        timestamp,
        userAgent: { os, browser, device },
        referrer: data.referrer || 'Direct',
      });
    } else if (event === 'visitor') {
      analytics.visitors.push({
        ...data,
        timestamp,
        id: 'visitor_' + Date.now(),
        userAgent: { os, browser, device },
      });
    }

    await writeAnalytics(analytics);

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error tracking analytics:', error);
    return Response.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const analytics = await readAnalytics();
    return Response.json(analytics);
  } catch (error) {
    console.error('Error reading analytics:', error);
    return Response.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}
