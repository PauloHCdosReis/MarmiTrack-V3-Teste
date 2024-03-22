import { redirect } from 'next/navigation'
import { GetCookie } from './Cookies'

type tokenType = {
  sub: string
  roles: Array<'COMMON_USER' | 'MANAGER' | 'ADMIN'>
  iss: string
  exp: string
  iat: string
}

export async function Session() {
  const AccessToken = await GetCookie('AccessToken')
  if (AccessToken) {
    const Token: tokenType = JSON.parse(
      Buffer.from(AccessToken.split('.')[1], 'base64').toString('utf-8'),
    )
    return Token
  }
  return false
}

export async function GetAccessToken() {
  const AccessToken = await GetCookie('AccessToken')
  if (AccessToken) {
    return AccessToken
  }
  return false
}

export async function GetRefreshToken() {
  const RefreshToken = await GetCookie('RefreshToken')
  if (RefreshToken) {
    return RefreshToken
  }
  return false
}

export async function GroupAdm() {
  const session = await Session()
  if (session) {
    const isAdm = session.roles.includes('ADMIN')
    if (isAdm === false) {
      redirect('/')
    }
  } else {
    redirect('/login')
  }
}
