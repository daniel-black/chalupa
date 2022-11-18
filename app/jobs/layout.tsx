import SearchForm from "./SearchForm";

export default function JobsLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col md:flex-row">
      <aside className="border p-3">
        This is where the search form lives
        <SearchForm />
      </aside>
      {children}
    </main>
  );
}