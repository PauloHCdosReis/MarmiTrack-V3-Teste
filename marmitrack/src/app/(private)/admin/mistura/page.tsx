import { GetAccessToken } from '@/utils/Auth'
import Table from './table'
import { redirect } from 'next/navigation'
import axios from 'axios'
import { DataType } from '@/types/TableType'
import { SearchParamsTypes } from '@/types/SearchParamsTypes'

export default async function Mistura({
  searchParams,
}: {
  searchParams: SearchParamsTypes
}) {
  const ApiUrl = process.env.NEXT_PUBLIC_APIURL
  const AccessToken = await GetAccessToken()
  const SearchParams: SearchParamsTypes = {
    direction: 'asc',
    page: 0,
    size: 12,
  }
  if (
    searchParams.page &&
    !isNaN(Number(searchParams.page)) &&
    typeof Number(searchParams.page) === 'number'
  ) {
    SearchParams.page = Number(searchParams.page)
  }
  if (
    searchParams.size &&
    !isNaN(Number(searchParams.size)) &&
    typeof Number(searchParams.size) === 'number'
  ) {
    SearchParams.size = Number(searchParams.size)
  }
  if (
    searchParams.direction &&
    ['asc', 'desc'].includes(searchParams.direction)
  ) {
    SearchParams.direction = searchParams.direction
  }

  if (AccessToken === false) {
    redirect('/login')
  }
  const response = await axios({
    params: {
      page: SearchParams.page,
      size: SearchParams.size,
      direction: SearchParams.direction,
    },
    headers: {
      Authorization: `Bearer ${AccessToken}`,
    },
    method: 'GET',
    url: `${ApiUrl}ws/main_dish`,
  })
    .then((res) => {
      const data: DataType = {
        data: {
          items: res.data._embedded.MainsDishes,
          links: res.data._links,
          page: res.data.page,
        },
        status: res.status,
      }
      return data
    })
    .catch(async (error) => {
      let erro: DataType
      if (error.response) {
        if (error.response.status === 401) {
          erro = {
            data: false,
            status: 401,
          }
          return erro
        }
        erro = {
          data: false,
          status: error.response.status,
        }
        return erro
      }
      erro = {
        data: false,
        status: 503,
      }
      return erro
    })
  return (
    <div className="flex flex-col p-2 rounded-md h-full max-h-full w-full max-w-full overflow-y-auto">
      <Table searchParams={SearchParams} response={response} />
    </div>
  )
}
