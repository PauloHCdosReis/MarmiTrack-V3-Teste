export type TokenDataType = {
  sub: string
  roles: Array<'COMMON_USER' | 'MANAGER' | 'ADMIN'>
  iss: string
  exp: string
  iat: string
}

export function DystographToken(token: string) {
  const AccessToken: TokenDataType = JSON.parse(
    Buffer.from(token.split('.')[1], 'base64').toString('utf-8'),
  )
  return AccessToken
}
