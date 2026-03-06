import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // TODO: Wire to n8n webhook later
  console.log('Audit submission:', data);

  return NextResponse.json({ success: true });
}
