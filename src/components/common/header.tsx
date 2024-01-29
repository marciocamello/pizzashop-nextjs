'use client'

import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { AccountMenu } from '../dashboard/account-menu'
import { ThemeToggle } from '../theme/theme-toggle'
import { Separator } from '../ui/separator'
import { NavLink } from './nav-link'

const navLinks = [
  {
    label: 'Home',
    href: '/dashboard',
    icon: Home,
  },
  {
    label: 'Orders',
    href: '/dashboard/orders',
    icon: UtensilsCrossed,
  },
]

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-4">
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <NavLink href={link.href} key={link.href}>
                <Icon className="h-4 w-4" /> {link.label}
              </NavLink>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
