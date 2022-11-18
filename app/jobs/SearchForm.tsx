'use client';

import { FormEvent, useState } from "react";
import { useRouter } from 'next/navigation';

export default function SearchForm() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('PositionTitle', title);
    urlSearchParams.append('LocationName', location);

    router.push(`/jobs/results?${urlSearchParams.toString()}`);
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