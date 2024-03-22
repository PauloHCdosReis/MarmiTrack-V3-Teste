'use client'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { SearchParamsTypes } from '@/types/SearchParamsTypes'
import { LinksType, PageType } from '@/types/TableType'
import { usePathname } from 'next/navigation'

interface PaginationLayoutProps {
  page: PageType
  links: LinksType
  searchParams: SearchParamsTypes
}

export default function PaginationData({
  page,
  links,
  searchParams,
}: PaginationLayoutProps) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col md:flex-row justify-center text-center">
      {/* <Button size={'sm'} className="font-univiaProUltra">
        {' '}
        <Link
          href={`${pathname}?page=0&size=${page.size}&direction=${searchParams.direction === 'asc' ? 'desc' : 'asc'}`}
        >
          Direção: {searchParams.direction === 'asc' ? 'ASC' : 'DESC'}
        </Link>
      </Button> */}
      <Pagination className="w-auto">
        <PaginationContent className="grid grid-cols-2 md:flex md:flex-row gap-1 md:gap-3">
          {links.first && (
            <PaginationItem>
              <PaginationLink
                href={`${pathname}?page=0&size=${page.size}&direction=${searchParams.direction}`}
                size={'sm'}
                className="cursor-pointer w-24 font-univiaProUltra border-2 border-primary"
              >
                Inicio
              </PaginationLink>
            </PaginationItem>
          )}
          {links.prev && (
            <PaginationItem>
              <PaginationPrevious
                href={`${pathname}?page=${page.number - 1}&size=${page.size}&direction=${searchParams.direction}`}
                size={'sm'}
                className="cursor-pointer w-24 font-univiaProUltra border-2 border-primary"
              />
            </PaginationItem>
          )}
          {links.next && (
            <PaginationItem>
              <PaginationNext
                href={`${pathname}?page=${page.number + 1}&size=${page.size}&direction=${searchParams.direction}`}
                size={'sm'}
                className="cursor-pointer w-24 font-univiaProUltra border-2 border-primary"
              />
            </PaginationItem>
          )}
          {links.last && (
            <PaginationItem>
              <PaginationLink
                href={`${pathname}?page=${page.totalPages - 1}&size=${page.size}&direction=${searchParams.direction}`}
                size={'sm'}
                className="cursor-pointer w-24 font-univiaProUltra border-2 border-primary"
              >
                Final
              </PaginationLink>
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  )
}
