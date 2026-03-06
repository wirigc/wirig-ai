import { NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || '';
const GHL_API_KEY = process.env.GHL_API_KEY || '';
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || '';

export async function POST(request: Request) {
  const data = await request.json();

  // 1. Create contact in GHL directly
  if (GHL_API_KEY && GHL_LOCATION_ID) {
    try {
      const nameParts = (data.name || '').trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      await fetch('https://services.leadconnectorhq.com/contacts/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GHL_API_KEY}`,
          'Version': '2021-07-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          locationId: GHL_LOCATION_ID,
          firstName,
          lastName,
          email: data.email,
          phone: data.phone,
          source: 'wirig.ai AI Audit Quiz',
          tags: ['ai-audit', `biz-${(data.businessType || 'unknown').toLowerCase().replace(/[^a-z]/g, '-')}`, 'website-lead'],
          customFields: [
            // These will work once custom fields are set up in GHL
          ],
        }),
      });
    } catch (err) {
      console.error('GHL contact creation error:', err);
    }
  }

  // 2. Forward to n8n for pipeline + nurture automation
  if (N8N_WEBHOOK_URL) {
    try {
      await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source: 'wirig.ai AI Audit Quiz',
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error('n8n webhook error:', err);
    }
  }

  return NextResponse.json({ success: true });
}
