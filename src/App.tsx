import { useEffect, useState } from 'react';
import useSWR from 'swr';
import axios, { AxiosResponse } from 'axios';
import { Brewery, BrewerySchema } from './utils';

function App() {
  const [endPoint, setEndPoint] = useState('');
  const { data, error } = useSWR<AxiosResponse<unknown>>(BASE_URL + endPoint, axios);
  const [breweries, setBreweries] = useState<Brewery[]>([]);

  useEffect(() => {
    if (data && Array.isArray(data.data)) {
      const latestBreweries: Brewery[] = [];

      data.data.forEach((brewery) => {
        const parsed = BrewerySchema.safeParse(brewery);
        if (parsed.success) {
          latestBreweries.push(parsed.data);
        }
      });

      setBreweries((prev) => {
        return [...prev, ...latestBreweries];
      });
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log({ breweries });
  return <h1 className='text-3xl text-red-500 font-bold underline'>Brewery Finder</h1>;
}

export default App;

const BASE_URL = 'https://api.openbrewerydb.org/breweries';
