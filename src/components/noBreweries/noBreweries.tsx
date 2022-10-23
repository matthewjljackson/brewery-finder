import { BY_CITY } from '../breweryFilters/breweryFilters';

interface NoBreweriesProps {
  endPoint: string;
}

export const NoBreweries = ({ endPoint }: NoBreweriesProps) => {
  const city = endPoint.split(BY_CITY)[1].split('_').join(' ');
  return (
    <div className='md:order-first md:row-span-4 flex items-center justify-center mx-[5%]'>
      {city && (
        <h3 className='text-2xl'>
          No breweries were found in the city {city}. Consider trying san diego
        </h3>
      )}
    </div>
  );
};
