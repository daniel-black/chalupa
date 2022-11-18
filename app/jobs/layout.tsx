export default function JobsLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <main>
      <aside className="border">
        This is where the search form lives
      </aside>
      {children}
    </main>
  );
}