import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = cookies()
  cookieStore.set('AccessToken', '', {
    path: '',
    expires: 0,
  })
  cookieStore.set('RefreshToken', '', {
    path: '',
    expires: 0,
  })

  const cookieString = `${cookieStore.get('AccessToken')}; ${cookieStore.get('RefreshToken')}`

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Set-Cookie': cookieString,
    },
  })
}
