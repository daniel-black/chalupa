import type { NextApiRequest, NextApiResponse } from 'next';
import { JobsData, SearchResult } from '../../types';
import { mapJobApiResponse } from '../../utils/data-mapper';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { query } = req;

  // const searchParams = new URLSearchParams(query);
  
  const request = await fetch(
    `https://data.usajobs.gov/api/search?Keyword=park`, 
    {
      headers: {
        'Authorization-Key': process.env.JOBS_API_KEY || ''
      }
    }
  );

  if (request.status !== 200) {
    res.status(400).json({ result: `ERROR: ${request.status} - ${request.statusText}` });
  }

  const requestData = await request.json();
  const mappedData: JobsData = mapJobApiResponse(requestData.SearchResult as SearchResult);

  res.status(200).json({ result: mappedData });
}
