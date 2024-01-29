'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

interface NavLinkProps extends LinkProps {
  children: React.ReactNode
}

export function NavLink({ children, ...props }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === props.href
  return (
    <Link
      data-active={isActive}
      className={cn(
        'flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground',
        isActive && 'text-foreground',
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
