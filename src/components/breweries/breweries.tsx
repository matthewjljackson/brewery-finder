import { Brewery } from '../../utils';
import { SingleBrewery } from '../singleBrewery/singleBrewery';

interface BreweriesProps {
  breweries: Brewery[];
}

export const Breweries = ({ breweries }: BreweriesProps) => {
  if (!breweries.length) {
    return null;
  }

  return (
    <>
      <h2>Breweries</h2>
      <ul>
        {breweries.map((brewery) => (
          <SingleBrewery brewery={brewery} key={brewery.id} />
        ))}
      </ul>
    </>
  );
};
