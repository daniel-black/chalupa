import SearchForm from "./SearchForm";

export default function JobsLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col md:flex-row">
      <aside>
        <SearchForm />
      </aside>
      {children}
    </main>
  );
}