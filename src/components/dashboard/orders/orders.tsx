import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { OrderTableFilters } from './order-table-filters'
import { OrderTableRow } from './order-table-row'

export function Orders() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
      </div>
      <div className="space-y-2.5">
        <OrderTableFilters />

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identifier</TableHead>
                <TableHead className="w-[180px]">Accomplished At</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead className="w-[140px]">Amount</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, index) => {
                return <OrderTableRow key={String(index)} />
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
