import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import { Button } from '../ui/button'

interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}

export function Pagination({
  pageIndex,
  totalCount,
  perPage,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total of {totalCount} items(s)
      </span>
      <PaginationRoot>
        <PaginationContent>
          <div className="flex items-center space-x-6 lg:gap-8">
            <div className="flex w-[100px] items-center justify-center text-sm font-medium">
              Page {pageIndex + 1} of {pages}
            </div>
            <div className="flex items-center gap-2">
              <PaginationLink className="h-8 w-8 p-0 lg:flex">
                <ChevronsLeft className="h-4 w-4" />
                <span className="sr-only">First page</span>
              </PaginationLink>
              <PaginationItem>
                <PaginationPrevious size="xs">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous page</span>
                </PaginationPrevious>
              </PaginationItem>
              <PaginationNext size="xs">
                <span className="sr-only">Next page</span>
                <ChevronRight className="h-4 w-4" />
              </PaginationNext>
              <PaginationLink className="h-8 w-8 p-0">
                <ChevronsRight className="h-4 w-4" />
                <span className="sr-only">Last page</span>
              </PaginationLink>
            </div>
          </div>
        </PaginationContent>
      </PaginationRoot>
    </div>
  )
}
