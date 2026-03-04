import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const API_KEY = process.env.BEEHIIV_API_KEY
  const PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID

  if (!API_KEY || !PUBLICATION_ID) {
    return NextResponse.json(
      { error: 'Beehiiv configuration is missing' },
      { status: 500 }
    )
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: 'website',
          utm_medium: 'organic',
          utm_campaign: 'newsletter_signup',
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      // Handle specific Beehiiv error messages if available
      const errorMessage = data.errors?.[0]?.message || 'Failed to subscribe'
      return NextResponse.json({ error: errorMessage }, { status: response.status })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Beehiiv subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
