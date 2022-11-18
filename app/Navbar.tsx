import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex px-10 py-3 justify-between bg-neutral-900 text-yellow-50">
      <Link className="font-semibold nav-link" href={'/'}>
        Job Board
      </Link>

      <Link className="nav-link" href={'/jobs'}>
        Jobs
      </Link>
    </nav>
  );
}