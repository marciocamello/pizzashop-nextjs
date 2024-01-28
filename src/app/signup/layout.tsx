import { SignSideBar } from '@/components/common/SignSideBar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <SignSideBar />

      <div className="relative flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}
