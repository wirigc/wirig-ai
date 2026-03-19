import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, phone, company } = await request.json();

    const GHL_API_KEY = process.env.GHL_API_KEY;
    const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || 'L0ZQnsTfJz0DZTJV53zY';

    if (!GHL_API_KEY) {
      return NextResponse.json({ error: 'GHL not configured' }, { status: 500 });
    }

    // Split name into first/last
    const nameParts = (name || '').trim().split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Create or update contact in GHL
    const res = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        firstName,
        lastName,
        email,
        phone,
        companyName: company || undefined,
        source: 'wirig.ai website',
        tags: ['website-booking'],
      }),
    });

    const data = await res.json();

    return NextResponse.json({ success: true, contactId: data?.contact?.id });
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json({ error: 'Failed to create contact' }, { status: 500 });
  }
}
