import ContentHeader from "@/components/ContentHeader"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="p-6">
      <ContentHeader/>
      {children}
    </section>
  )
}