'use client';

import { FormEvent, useState } from "react";
import { MyApiResponse } from "../../types";

export default function SearchForm() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('PositionTitle', title);
    urlSearchParams.append('LocationName', location);

    const api = `/api/jobs?${urlSearchParams.toString()}`;

    const apiResponse = await fetch(api);
    
    if (apiResponse.status !== 200) {
      console.log('Dang, that did not work');
      console.warn(apiResponse.status);
      console.warn(apiResponse.statusText);
    }

    const x = await apiResponse.json() as MyApiResponse;

    console.log(x.result);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Job Title</label>
        <input 
          type="text" 
          placeholder="Park Ranger" 
          value={title} 
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </div>

      <div>
        <label htmlFor="title">Location</label>
        <input 
          type="text" 
          placeholder="Boulder, CO" 
          value={location} 
          onChange={(e) => setLocation(e.currentTarget.value)}
        />
      </div>

      <input type="submit" value={'Search'} />
    </form>
  );
}