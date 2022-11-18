import { MyApiResponse } from "../../../../types";
import { getBaseUrl } from "../../../../utils/config";
import formatMoney from "../../../../utils/format-money";

export default async function JobPage({ params, searchParams }: {
  params: { jobId: string },
  searchParams?: { id: string },
}) {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append('Keyword', params.jobId);
  
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

  if (numJobsReturned !== 1) return <div>Error</div>;
  
  const job = jobs[0];

  let min = formatMoney(+job.pay.min);
  let max = formatMoney(+job.pay.max);

  return (
    <div className="px-6 py-8">
      <div className="flex items-baseline font-bold justify-between mb-8">
        <h1 className="text-2xl">
          {job.title}
        </h1>
        <a 
          className="border-2 border-neutral-900 py-2 px-4 rounded-lg bg-yellow-400"
          href={job.urlToAppy} 
          target='_blank'
        >
          Apply
        </a>
      </div>

      <div className="space-y-5">
        <h2 className="text-lg font-bold">Details</h2>

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p>{min} - {max} / {job.pay.per.toLowerCase()}</p>
          <p>{job.locations.length > 1 ? `Multiple locations (${job.locations.length})` : job.locations[0].locationName}</p>
        </div>

        {job.summary && (
          <div className="p-2 bg-yellow-100 rounded-lg border border-neutral-900">
            <h3 className="text-lg font-bold mb-1.5">Summary</h3>
            <p className="px-3">{job.summary}</p>
          </div>
        )}
      
        <div className="grid grid-cols-2 bg-yellow-100 border border-neutral-900 rounded-lg">
          <div className="p-2 border-r border-b border-neutral-900">Department</div>
          <div className="p-2 border-b border-neutral-900">{job.dept}</div>
          <div className="p-2 border-r border-neutral-900">Organization</div>
          <div className="p-2">{job.org}</div>
          <div className="p-2 border-r border-t border-neutral-900">Sub-Agency</div>
          <div className="p-2 border-t border-neutral-900">{job?.subAgency ? job.subAgency : 'n/a'}</div>
        </div>

        {job?.duties && job.duties.length > 0 && (
          <details className="p-2 bg-yellow-100 rounded-lg border border-neutral-900">
            <summary className="font-bold">
              Duties
            </summary>
            <ol className="space-y-3 px-3 mt-3">
              {job.duties.map((duty, i) => (
                <li key={i}>
                  <p><span className="font-bold text-lg mr-1">{i+1}</span> {duty}</p>
                </li>
              ))}
            </ol>
            
            {/* <p className="mt-1.5 px-3">{job.requirements}</p> */}
          </details>
        )}

        {job.qualifications && (
          <details className="p-2 bg-yellow-100 rounded-lg border border-neutral-900">
            <summary className="font-bold">
              Qualifications
            </summary>
            <p className="mt-1.5 px-3">{job.qualifications}</p>
          </details>
        )}

        {job.education && (
          <details className="p-2 bg-yellow-100 rounded-lg border border-neutral-900">
            <summary className="font-bold">
              Education
            </summary>
            <p className="mt-1.5 px-3">{job.education}</p>
          </details>
        )}

      {job.requirements && (
          <details className="p-2 bg-yellow-100 rounded-lg border border-neutral-900">
            <summary className="font-bold">
              Requirements
            </summary>
            <p className="mt-1.5 px-3">{job.requirements}</p>
          </details>
        )}

      {job.requiredDocs && (
          <details className="p-2 bg-yellow-100 rounded-lg border border-neutral-900">
            <summary className="font-bold">
              Required Documents
            </summary>
            <p className="mt-1.5 px-3">{job.requiredDocs}</p>
          </details>
        )}

        {job.howToApply && (
          <details className="p-2 bg-yellow-100 rounded-lg border border-neutral-900">
            <summary className="font-bold">
              How to Apply
            </summary>
            <p className="mt-1.5 px-3">{job.howToApply}</p>
          </details>
        )}

      {job.whatToExpectNext && (
          <details className="p-2 bg-yellow-100 rounded-lg border border-neutral-900">
            <summary className="font-bold">
              What to Expect Next
            </summary>
            <p className="mt-1.5 px-3">{job.whatToExpectNext}</p>
          </details>
        )}

      </div>
    </div>
  );
}