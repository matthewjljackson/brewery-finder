import { useEffect, useState } from 'react';
import useSWR from 'swr';
import axios, { AxiosResponse } from 'axios';
import { Brewery, BrewerySchema } from './utils';
import { Breweries } from './components';

function App() {
  const [endPoint, _setEndPoint] = useState('');
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
  return (
    <div className='flex flex-col items-center gap-8 w-full'>
      <h1 className='text-3xl font-bold underline text-blue-600'>Brewery finder</h1>
      <div className='grid grid-cols-1 gap-4 w-full'>
        <Breweries breweries={breweries} />
      </div>
    </div>
  );
}

export default App;

const BASE_URL = 'https://api.openbrewerydb.org/breweries';
