import { MyApiResponse } from "../../../types";
import Listing from "./Listing";

export default async function ResultsPage({ searchParams }: {
  searchParams: { PositionTitle: string, LocationName: string },
}) {
  const urlSearchParams = new URLSearchParams(searchParams);

  // figure out some good method for using the vercel url in prod

  const base = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://https://chalupa.vercel.app';

  const api = `${base}/api/jobs?${urlSearchParams.toString()}`;

  const apiResponse = await fetch(api);
  
  if (apiResponse.status !== 200) {
    console.log('Dang, that did not work');
    console.warn(apiResponse.status);
    console.warn(apiResponse.statusText);
  }

  const { result } = await apiResponse.json() as MyApiResponse;

  if (typeof result === 'string') return <p>{result}</p>;

  const { numJobsReturned, numTotalJobs, jobs } = result;

  return (
    <div className="bg-rose-100">
      <p>
        Viewing {numJobsReturned} of {numTotalJobs} listings 
        for "{searchParams.PositionTitle}" in "{searchParams.LocationName}"
      </p>
  
      <ul>
        {jobs.map(job => <Listing job={job} key={job.id} />)}
      </ul>
    </div>
  );
}