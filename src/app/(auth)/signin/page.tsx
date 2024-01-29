import type { Metadata } from 'next'
import Link from 'next/link'

import SignInForm from '@/components/signin/SignInForm'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your account.',
}

export default function Page() {
  return (
    <div className="p-8">
      <Button asChild variant={'ghost'} className="absolute right-8 top-8">
        <Link href="/signup" className="">
          New establisment?
        </Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="gap2 flex flex-col text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Panel Access
          </h1>
          <p className="text-sm text-muted-foreground">
            Follow your orders and manage your account.
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  )
}
