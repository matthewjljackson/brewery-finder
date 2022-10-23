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
    <>
      <h2>Breweries</h2>
      <ul>
        {breweries.map((brewery) => (
          <SingleBrewery brewery={brewery} setCenter={setCenter} key={brewery.id} />
        ))}
      </ul>
    </>
  );
};
