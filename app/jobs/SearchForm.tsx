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
    <form className="space-y-8 py-8 px-6 md:border-r border-b md:rounded-lg rounded-t-none md:rounded-l-none border-neutral-900" onSubmit={handleSubmit}>
      <div className="relative">
        <label 
          className="input-label"
          htmlFor="title"
        >
          Job&nbsp;Title
        </label>
        <input 
          className="text-input"
          id="title"
          type="text" 
          placeholder="Park Ranger" 
          value={title} 
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </div>

      <div className="relative">
        <label className="input-label" htmlFor="title">
          Location
        </label>
        <input
          className="text-input"
          id="location" 
          type="text" 
          placeholder="Boulder, CO" 
          value={location} 
          onChange={(e) => setLocation(e.currentTarget.value)}
        />
      </div>

      <input
        className="w-full bg-neutral-900 py-2 text-yellow-50 rounded-lg border border-neutral-900 cursor-pointer hover:bg-neutral-800" 
        type="submit" 
        value={'Search'} 
      />
    </form>
  );
}