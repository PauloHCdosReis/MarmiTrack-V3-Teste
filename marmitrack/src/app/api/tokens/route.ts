import { NextResponse } from 'next/server'

export async function GET() {
  const response = NextResponse.next()
  const AccessToken = response.cookies.get('AccessToken')?.value
  const RefreshToken = response.cookies.get('RefreshToken')?.value

  return NextResponse.json(
    { data: { AccessToken, RefreshToken } },
    { status: 200 },
  )
}
