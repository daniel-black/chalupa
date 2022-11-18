import Link from "next/link";
import { Job } from "../../../types";

interface ListingProps {
  job: Job;
}

export default function Listing({ job }: ListingProps) {
  return (
    <div>
      <Link href={`/jobs/results/${job.id}`}>{job.title}</Link>
    </div>
  );
}