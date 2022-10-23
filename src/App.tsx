import { useEffect, useState } from 'react';
import useSWR from 'swr';
import axios, { AxiosResponse } from 'axios';
import { Brewery, BrewerySchema } from './utils';
import { Breweries, BreweryFilter, BreweryMap, NoBreweries } from './components';

function App() {
  const [endPoint, setEndPoint] = useState('?by_city=san_diego');
  const { data, error } = useSWR<AxiosResponse<unknown>>(BASE_URL + endPoint, axios);
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [center, setCenter] = useState<[number, number]>([32.7157, -117.1611]); // San Diego
  const [selectedId, setSelectedId] = useState('');
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
      if (latestBreweries.length) {
        setCenter([latestBreweries[0].latitude, latestBreweries[0].longitude]);
        setSelectedId(latestBreweries[0].id);
      }
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className='flex flex-col items-center gap-8 w-full bg-[#f5f5f5] md:h-screen'>
      <h1 className='text-3xl font-bold underline text-blue-600 mt-6'>BREWERY FINDER</h1>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-6 md:h-[90%]'>
        <BreweryMap
          breweries={breweries}
          center={center}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        {breweries.length ? (
          <Breweries
            breweries={breweries}
            setCenter={setCenter}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ) : (
          <NoBreweries endPoint={endPoint} />
        )}
        <BreweryFilter setEndPoint={setEndPoint} />
      </div>
    </div>
  );
}

export default App;

const BASE_URL = 'https://api.openbrewerydb.org/breweries';
