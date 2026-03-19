import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, phone, company } = await request.json();

    const GHL_API_KEY = process.env.GHL_API_KEY;
    const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || 'L0ZQnsTfJz0DZTJV53zY';
    const PIPELINE_ID = 'DuR4MZ8qQa8goE0qWMgn';
    const NEW_LEAD_STAGE = 'ded04bf8-1e9d-4bcc-a71a-b9cad12e905d';

    if (!GHL_API_KEY) {
      return NextResponse.json({ error: 'GHL not configured' }, { status: 500 });
    }

    const nameParts = (name || '').trim().split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // 1. Create or update contact in GHL
    const contactRes = await fetch('https://services.leadconnectorhq.com/contacts/', {
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

    const contactData = await contactRes.json();
    const contactId = contactData?.contact?.id;

    // 2. Create opportunity in pipeline (even if they don't book)
    if (contactId) {
      try {
        await fetch('https://services.leadconnectorhq.com/opportunities/', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${GHL_API_KEY}`,
            'Content-Type': 'application/json',
            'Version': '2021-07-28',
          },
          body: JSON.stringify({
            locationId: GHL_LOCATION_ID,
            pipelineId: PIPELINE_ID,
            pipelineStageId: NEW_LEAD_STAGE,
            contactId,
            name: `${firstName} ${lastName}`.trim() + (company ? ` - ${company}` : ''),
            status: 'open',
            source: 'wirig.ai website',
          }),
        });
      } catch {
        // Pipeline creation is best-effort
      }
    }

    return NextResponse.json({ success: true, contactId });
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json({ error: 'Failed to create contact' }, { status: 500 });
  }
}
