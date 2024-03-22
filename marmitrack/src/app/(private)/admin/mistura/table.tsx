'use client'

import TableData from '@/components/table/TableData'
import { DataType } from '@/types/TableType'
import { useAuthProvider } from '@/hooks/useAuthProvider'
import { ArrowDownUp, ArrowUpDown, Pencil, Ruler, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { SearchParamsTypes } from '@/types/SearchParamsTypes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { usePathname, useRouter } from 'next/navigation'

export default function Table({
  response,
  searchParams,
}: {
  response: DataType
  searchParams: SearchParamsTypes
}) {
  const { RefreshToken } = useAuthProvider()
  const pathname = usePathname()
  const router = useRouter()
  if (response.data === false && response.status === 401) {
    RefreshToken()
    return null
  }
  return (
    <>
      <TableData
        searchParams={searchParams}
        columns={[
          {
            key: 'Description',
            header: 'Misturas',
            className:
              'w-[90%] max-w-[90%] md:w-[85%] md:max-w-[85%] break-words',
            filter: (
              <div className="flex flex-row gap-1 md:gap-4">
                <Link
                  className="hover:text-foreground"
                  href={`${pathname}?page=0&size=${searchParams.size}&direction=${searchParams.direction === 'asc' ? 'desc' : 'asc'}`}
                >
                  {searchParams.direction === 'asc' ? (
                    <ArrowDownUp />
                  ) : (
                    <ArrowUpDown />
                  )}
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="hover:text-foreground">
                    <Ruler />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="min-w-12 w-auto">
                    <DropdownMenuLabel>Items</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => {
                        router.push(
                          `${pathname}?page=0&size=5&direction=${searchParams.direction}`,
                        )
                      }}
                    >
                      5
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        router.push(
                          `${pathname}?page=0&size=10&direction=${searchParams.direction}`,
                        )
                      }}
                    >
                      10
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        router.push(
                          `${pathname}?page=0&size=15&direction=${searchParams.direction}`,
                        )
                      }}
                    >
                      15
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        router.push(
                          `${pathname}?page=0&size=20&direction=${searchParams.direction}`,
                        )
                      }}
                    >
                      20
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        router.push(
                          `${pathname}?page=0&size=25&direction=${searchParams.direction}`,
                        )
                      }}
                    >
                      25
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ),
          },
          {
            key: 'Active',
            header: 'Ativo',
            className:
              'w-[5%] max-w-[5%] md:w-[7%] md:max-w-[7%] text-center justify-center items-center',
            cell: ({ row }) => {
              const formatted = row.Active ? 'Sim' : 'Não'
              return <>{formatted}</>
            },
          },
          {
            key: 'Ações',
            header: 'Ações',
            className:
              'w-[5%] max-w-[5%] md:w-[8%] md:max-w-[8%] text-center justify-center items-center',
            cell: ({ row }) => {
              return (
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-3 w-auto">
                  <Trash2 className="h-5 md:h-full cursor-pointer text-red-400 hover:text-red-600 dark:text-red-600 hover:dark:text-red-400" />
                  <Link href={`/admin/mistura/${row.ID}`}>
                    <Pencil className="h-5 md:h-full cursor-pointer text-blue-600 hover:text-blue-900 dark:text-blue-600 hover:dark:text-blue-400" />
                  </Link>
                </div>
              )
            },
          },
        ]}
        response={response}
      />
    </>
  )
}
