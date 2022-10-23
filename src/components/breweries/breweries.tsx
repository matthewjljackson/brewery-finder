import { Brewery } from '../../utils';
import { SingleBrewery } from '../singleBrewery/singleBrewery';
import { Dispatch, SetStateAction } from 'react';

interface BreweriesProps {
  breweries: Brewery[];
  setCenter: Dispatch<SetStateAction<[number, number]>>;
  selectedId: string;
  setSelectedId: Dispatch<SetStateAction<string>>;
}

export const Breweries = ({ breweries, setCenter, selectedId, setSelectedId }: BreweriesProps) => {
  if (!breweries.length) {
    return null;
  }

  return (
    <article className='w-full flex flex-col gap-6 items-center max-h-full md:h-[90%] order-3 md:order-1 md:row-span-4 overflow-hidden'>
      <h2 className='text-2xl font-bold text-blue-600'>Breweries</h2>
      <h3 className='text-lg font-bold text-blue-600 place-self-start px-6 md:px-16'>
        {breweries[0].city}
      </h3>
      <ul className='flex flex-col gap-4 overflow-y-auto w-full px-6 md:px-16'>
        {breweries.map((brewery) => {
          const selected = selectedId === brewery.id ? true : false;
          return (
            <SingleBrewery
              brewery={brewery}
              setCenter={setCenter}
              isSelected={selected}
              setSelectedId={setSelectedId}
              key={brewery.id}
            />
          );
        })}
      </ul>
    </article>
  );
};
