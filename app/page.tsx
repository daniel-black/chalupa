import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="my-16 sm:my-32 space-y-8 sm:space-y-16 text-2xl sm:text-4xl flex flex-col items-center">
      <h1 className="text-4xl text-center sm:text-6xl font-bold">
        Do meaningful work
      </h1>

      <h2 className="text-center leading-snug font-semibold">
        Find a job you love <br /> working for the US Government
      </h2>

      <Link 
        href={'/jobs'}
        className='block px-10 py-4 rounded-lg border-4 border-neutral-900 bg-yellow-300 max-w-fit '
      >
        Start
      </Link>
    </div>
  );
}
