import { GetRefreshToken, Session } from '@/utils/Auth'
import axios from 'axios'
import { cookies } from 'next/headers'

export async function GET() {
  console.log('refreshtoken')
  const ApiUrl = process.env.NEXT_PUBLIC_APIURL
  const sessionResult = await Session()
  const refreshToken = await GetRefreshToken()

  if (sessionResult === false) {
    return new Response('sessionResult')
  }

  await axios({
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
    method: 'PUT',
    url: `${ApiUrl}auth/refresh/${sessionResult.sub}`,
  })
    .then((res) => {
      console.log(res.data)
      const data: number = res.status
      if (res.status === 200) {
        cookies().set({
          name: 'AccessToken',
          value: res.data.AccessToken,
          path: '/',
          sameSite: 'lax',
        })
        cookies().set({
          name: 'RefreshToken',
          value: res.data.RefreshToken,
          path: '/',
          sameSite: 'lax',
        })

        return new Response('data-100')
      }
      return new Response(`${data}`)
    })
    .catch((error) => {
      console.log(error)
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
      if (error.response) {
        if (error.response.status === 401) {
          return new Response('error-203')
        }
        return new Response(`error-${error.response.status}`)
      }
      return new Response(`error-503`)
    })
  return new Response('data')
}
