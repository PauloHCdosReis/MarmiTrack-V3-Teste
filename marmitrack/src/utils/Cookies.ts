import { cookies } from 'next/headers'

export function GetCookie(key: string) {
  const cookie = cookies().get(key)?.value
  return cookie
}

export function SetCookie(key: string, value: string) {
  cookies().set(key, value, { secure: true, sameSite: 'lax' })
}

export function DeleteCookie(key: string) {
  cookies().set(key, '', {
    expires: new Date(0),
    secure: true,
    sameSite: 'lax',
  })
}
