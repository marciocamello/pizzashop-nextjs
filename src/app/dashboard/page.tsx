import type { Metadata } from 'next'

import { DayOrdersAmountCard } from '@/components/dashboard/cards/day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from '@/components/dashboard/cards/month-canceled-orders-amount-card'
import { MonthOrdersAmountCard } from '@/components/dashboard/cards/month-orders-amount-card'
import { MonthRevenueCard } from '@/components/dashboard/cards/month-revenue-card'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard page.',
}

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="space-y-2.5"></div>

      <div className="grid grid-cols-4 gap-4">
        <MonthRevenueCard />
        <MonthOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthCanceledOrdersAmountCard />
      </div>
    </div>
  )
}
