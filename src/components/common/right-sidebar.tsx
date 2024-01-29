'use client'

import { Pizza } from 'lucide-react'
import Link from 'next/link'

export function RighSideBar() {
  return (
    <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
      <div className="flex items-center gap-3 text-lg  text-foreground">
        <Link href="/" className="flex items-center gap-1">
          <Pizza className="h-5 w-5" />
          <span className="font-medium">Pizza Shop</span>
        </Link>
      </div>
      <footer className="text-sm">
        Panel of partner &copy; Pizza Shop - {new Date().getFullYear()}
      </footer>
    </div>
  )
}
