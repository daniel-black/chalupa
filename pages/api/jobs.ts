import type { NextApiRequest, NextApiResponse } from 'next';

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

  const requestData = await request.json();

  res.status(200).json(requestData);
}
