import { cookies } from 'next/headers'

export async function GET() {
  cookies().set({
    name: 'AccessToken',
    value: '',
    path: '/',
    sameSite: 'lax',
    expires: 0,
  })

  cookies().set({
    name: 'RefreshToken',
    value: '',
    path: '/',
    sameSite: 'lax',
    expires: 0,
  })

  return new Response('data')
}
