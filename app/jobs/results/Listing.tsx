import Link from "next/link";
import { Job } from "../../../types";
import formatMoney from "../../../utils/format-money";

interface ListingProps {
  job: Job;
}

export default function Listing({ job }: ListingProps) {
  let min = formatMoney(+job.pay.min);
  let max = formatMoney(+job.pay.max);

  
  // if (min.includes(',')) {
  //   min = min.split(',')[0] + 'K';
  // }
  // if (max.includes(',')) {
  //   max = max.split(',')[0] + 'K';
  // }
  

  return (
    <div className="text-sm border bg-yellow-100 border-neutral-900 rounded-lg px-3 py-2 space-y-2">
      <Link 
        className="text-base font-bold block" 
        href={`/jobs/results/${job.id}`}
      >
        {job.title}
      </Link>
      
      <div className="space-y-0.5">
        <p>{min} - {max} / {job.pay.per.toLowerCase()}</p>
        <p>Dept: {job.dept}</p>
        <p>Org: {job.org}</p>
        {job.subAgency && <p>Sub-Agency: {job.subAgency}</p>}
      </div>
      
    </div>
  );
}