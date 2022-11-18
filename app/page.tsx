import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>This is the landing page.</h1>
      <Link className="bg-yellow-400 p-1 rounded" href={'/jobs'}>
        Jobs
      </Link>
    </div>
  );
}
