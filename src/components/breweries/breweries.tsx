import { Brewery } from '../../utils';
import { SingleBrewery } from '../singleBrewery/singleBrewery';
import { Dispatch, SetStateAction } from 'react';

interface BreweriesProps {
  breweries: Brewery[];
  setCenter: Dispatch<SetStateAction<[number, number]>>;
}

export const Breweries = ({ breweries, setCenter }: BreweriesProps) => {
  if (!breweries.length) {
    return null;
  }

  return (
    <article className='w-full flex flex-col gap-6 items-center max-h-full md:h-[90%] overflow-hidden'>
      <h2 className='text-2xl font-bold text-blue-600'>Breweries</h2>
      <ul className='flex flex-col gap-4 overflow-y-auto w-full px-6 md:px-16'>
        {breweries.map((brewery) => (
          <SingleBrewery brewery={brewery} setCenter={setCenter} key={brewery.id} />
        ))}
      </ul>
    </article>
  );
};
