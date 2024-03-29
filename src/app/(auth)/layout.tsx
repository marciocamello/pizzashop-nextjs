import { RighSideBar } from '@/components/common/right-sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <RighSideBar />

      <div className="relative flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}
