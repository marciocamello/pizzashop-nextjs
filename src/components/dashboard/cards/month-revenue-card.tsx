import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card'

export function MonthRevenueCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Total Sales (Mounth)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">€ 1.000,00</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+20%</span>{' '}
          from last month
        </p>
      </CardContent>
    </Card>
  )
}
