'use server'

import axios from 'axios'
import { SetCookie } from '../Cookies'

export type SingInType = {
  S_USERNAME: string
  S_SENHA: string
}

export default async function LoginAction({ S_USERNAME, S_SENHA }: SingInType) {
  const ApiUrl = process.env.NEXT_PUBLIC_APIURL
  try {
    const response = await axios({
      method: 'POST',
      url: `${ApiUrl}auth/signin`,
      data: {
        UserName: S_USERNAME,
        Password: S_SENHA,
      },
    })
    if (response.status === 200) {
      SetCookie('AccessToken', response.data.AccessToken)
      SetCookie('RefreshToken', response.data.RefreshToken)
    }
    if (response.data.details) {
      return {
        status: response.status,
        message: response.data.details,
      }
    }
    return {
      status: response.status,
      message: 'Logado com sucesso!',
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response) {
      return {
        status: error.response.status,
        message: error.response.data.details,
      }
    }
    return {
      status: 503,
      message: 'Erro ao fazer login',
    }
  }
}
