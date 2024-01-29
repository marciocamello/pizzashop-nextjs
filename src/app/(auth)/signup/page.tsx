import type { Metadata } from 'next'
import Link from 'next/link'

import SignUpForm from '@/components/signup/SignUpForm'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign up to Pizza Shop',
}

export default function Page() {
  return (
    <div className="p-8">
      <Button asChild variant={'ghost'} className="absolute right-8 top-8">
        <Link href="/signin" className="">
          Sign In
        </Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="gap2 flex flex-col text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create a Free Account
          </h1>
          <p className="text-sm text-muted-foreground">
            Be part of the Pizza Shop community
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}
