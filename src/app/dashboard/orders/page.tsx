import type { Metadata } from 'next'

import { Orders } from '@/components/dashboard/orders/orders'

export const metadata: Metadata = {
  title: 'Orders',
  description: 'Orders page',
}

export default function Page() {
  return <Orders />
}
