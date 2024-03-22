import { SearchParamsTypes } from './SearchParamsTypes'

export type PageType = {
  size: number
  totalElements: number
  totalPages: number
  number: number
}

export type LinksType = {
  first?: {
    href: string
  }
  prev?: {
    href: string
  }
  self: {
    href: string
  }
  next?: {
    href: string
  }
  last?: {
    href: string
  }
}

type ColumnsType = {
  key: string
  header: string
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cell?: (args: { row: any }) => JSX.Element
  filter?: JSX.Element
}

export type DataType = {
  data:
    | {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        items: { [key: string]: any }[]
        links: LinksType
        page: PageType
      }
    | false
  status: number
}

export type TableType = {
  columns: ColumnsType[]
  response: DataType
  searchParams: SearchParamsTypes
}
