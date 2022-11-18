import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex px-10 py-3 bg-slate-100 justify-between">
      <Link href={'/'}>
        Job Board
      </Link>

      <Link href={'/jobs'}>
        Jobs
      </Link>
    </nav>
  );
}