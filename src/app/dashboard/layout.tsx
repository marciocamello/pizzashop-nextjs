export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav>Menu</nav>
      {children}
    </section>
  )
}
