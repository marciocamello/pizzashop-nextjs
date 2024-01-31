import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="text-accent-foreground">
        Return to{' '}
        <Link className="text-sky-500 dark:text-sky-400" href="/dashboard">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
