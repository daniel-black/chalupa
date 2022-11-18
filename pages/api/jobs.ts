import type { NextApiRequest, NextApiResponse } from 'next';
import { JobsData, SearchResult } from '../../types';
import { mapJobApiResponse } from '../../utils/data-mapper';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { query }: { query: object } = req;

  // @ts-ignore
  const queryString = new URLSearchParams(query);
  const url = `https://data.usajobs.gov/api/search?${queryString.toString()}`;
  
  const options = {
    headers: {
      'Authorization-Key': process.env.JOBS_API_KEY || ''
    }
  };

  console.log(url);

  const request = await fetch(url, options);

  if (request.status !== 200) {
    res.status(400).json({ result: `ERROR: ${request.status} - ${request.statusText}` });
  }

  const requestData = await request.json();
  const mappedData: JobsData = mapJobApiResponse(requestData.SearchResult as SearchResult);

  res.status(200).json({ result: mappedData });
}
