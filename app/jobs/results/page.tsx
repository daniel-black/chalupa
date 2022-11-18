import { MyApiResponse } from "../../../types";
import { getBaseUrl } from "../../../utils/config";
import Listing from "./Listing";

export default async function ResultsPage({ searchParams }: {
  searchParams: { PositionTitle: string, LocationName: string },
}) {
  const urlSearchParams = new URLSearchParams(searchParams);
  const api = `${getBaseUrl()}/api/jobs?${urlSearchParams.toString()}`;

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
    <div className="px-6 py-8 space-y-6">
      <p className="text-xs text-neutral-700 flex items-center">
        Viewing <span className="highlight">{numJobsReturned}</span>
        of <span className="highlight">{numTotalJobs}</span> listings 
        for <span className="highlight">"{searchParams.PositionTitle}"</span> 
        in <span className="highlight">"{searchParams.LocationName}"</span>
      </p>
  
      <ul className="space-y-5">
        {jobs.map(job => <Listing job={job} key={job.id} />)}
      </ul>
    </div>
  );
}