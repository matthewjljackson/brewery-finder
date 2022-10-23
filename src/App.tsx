import { useEffect, useState } from 'react';
import useSWR from 'swr';
import axios, { AxiosResponse } from 'axios';
import { Brewery, BrewerySchema } from './utils';
import { Breweries, BreweryMap } from './components';

function App() {
  const [endPoint, _setEndPoint] = useState('?by_city=san_diego');
  const { data, error } = useSWR<AxiosResponse<unknown>>(BASE_URL + endPoint, axios);
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [center, setCenter] = useState<[number, number]>([32.7157, -117.1611]); // San Diego

  useEffect(() => {
    if (data && Array.isArray(data.data)) {
      const latestBreweries: Brewery[] = [];

      data.data.forEach((brewery) => {
        const parsed = BrewerySchema.safeParse(brewery);
        if (parsed.success) {
          latestBreweries.push(parsed.data);
        }
      });

      setBreweries(latestBreweries);
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className='flex flex-col items-center gap-8 w-full'>
      <h1 className='text-3xl font-bold underline text-blue-600'>Brewery finder</h1>
      <div className='grid grid-cols-1 gap-4 w-full'>
        <Breweries breweries={breweries} setCenter={setCenter} />
        <BreweryMap breweries={breweries} center={center} />
      </div>
    </div>
  );
}

export default App;

const BASE_URL = 'https://api.openbrewerydb.org/breweries';
