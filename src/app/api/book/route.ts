import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, service, serviceLabel, ...rest } = body

    // Build notes from all quiz answers
    const notes = Object.entries(rest)
      .map(([key, value]) => {
        const label = key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
        const val = Array.isArray(value) ? value.join(', ') : value
        return `${label}: ${val}`
      })
      .join('\n')

    const fullNotes = `Service: ${serviceLabel || service}\n${notes}`

    // Create GHL contact
    const ghlApiKey = process.env.GHL_API_KEY
    if (ghlApiKey) {
      try {
        const ghlRes = await fetch('https://services.leadconnectorhq.com/contacts/', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${ghlApiKey}`,
            'Content-Type': 'application/json',
            Version: '2021-07-28',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            source: 'wirig.ai quiz',
            tags: [`quiz-${service}`],
            customFields: [],
            notes: fullNotes,
          }),
        })

        if (!ghlRes.ok) {
          console.error('GHL contact creation failed:', await ghlRes.text())
        }
      } catch (ghlErr) {
        console.error('GHL API error:', ghlErr)
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Book API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
