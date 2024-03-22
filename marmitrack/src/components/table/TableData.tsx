import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from '@/components/ui/table'
import { TableType } from '@/types/TableType'
import PaginationData from './PaginationData'

export default function TableData({
  columns,
  response,
  searchParams,
}: TableType) {
  return (
    <Table className="">
      <TableHeader className="bg-gray-200 dark:bg-zinc-900 sticky top-0 border-b-2 border-primary">
        <TableRow className="">
          {columns.map((item) => {
            return (
              <TableHead
                key={item.key}
                className={`text-ring font-univiaProUltra break-words ${item.className}`}
              >
                <div className="flex flex-row gap-2 break-words">
                  {item.header}
                  {item.filter}
                </div>
              </TableHead>
            )
          })}
        </TableRow>
      </TableHeader>
      <TableBody className="bg-gray-50 dark:bg-zinc-800">
        {response.data ? (
          <>
            {response.data.items.map((row, index) => (
              <TableRow
                key={index}
                className="border-foreground break-words hover:bg-gray-200 hover:dark:bg-zinc-700"
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    className={`font-univiaProRegular ${column.className}`}
                  >
                    {column.cell ? column.cell({ row }) : row[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </>
        ) : (
          <TableRow>
            <TableCell className="text-center" colSpan={columns.length}>
              Sem items
            </TableCell>
          </TableRow>
        )}
      </TableBody>
      <TableFooter className="h-10 bg-gray-200 dark:bg-zinc-900 sticky bottom-0 border-t-2 border-primary">
        <TableRow className="h-10">
          {response.data ? (
            <TableCell colSpan={columns.length} className="h-10">
              <PaginationData
                links={response.data.links}
                page={response.data.page}
                searchParams={searchParams}
              />
            </TableCell>
          ) : (
            <TableCell colSpan={columns.length}>Sem Paginação</TableCell>
          )}
        </TableRow>
      </TableFooter>
    </Table>
  )
}
