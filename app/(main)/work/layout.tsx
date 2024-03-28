export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="py-5 sm:py-20">
        {children}
      </section>
    )
  }