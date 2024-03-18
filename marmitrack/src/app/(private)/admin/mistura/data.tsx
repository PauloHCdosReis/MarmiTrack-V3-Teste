'use client'

import { GetAccessToken } from '@/utils/Auth'
import { MainsDishesType } from './type'
import axios from 'axios'

type dataType = {
  data?: MainsDishesType
  message?: string
  status: number
}

export default async function DataMistura() {
  const ApiUrl = process.env.NEXT_PUBLIC_APIURL
  const token = await GetAccessToken()

  if (!token) {
    return false
  }

  return await axios({
    params: {
      page: 0,
      size: 12,
      direction: 'asc',
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
    url: `${ApiUrl}ws/main_dish`,
  })
    .then((res) => {
      console.log('MainsDishes data')
      const data: dataType = {
        data: res.data,
        status: res.status,
      }
      return data
    })
    .catch(async (error) => {
      console.log('MainsDishes error')
      let erro: dataType
      if (error.response) {
        /* if (error.response.status === 401) {
          erro = {
            message: 'MainsDishes',
            status: 401,
          }
          return erro
        } */
        erro = {
          message: 'MainsDishes',
          status: error.response.status,
        }
        return erro
      }
      erro = {
        message: 'Erro ao listar as misturas!',
        status: 503,
      }
      return erro
    })
}
