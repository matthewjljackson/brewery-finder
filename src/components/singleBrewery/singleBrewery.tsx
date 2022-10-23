import { Brewery } from '../../utils';

interface BreweryProps {
  brewery: Brewery;
}

export const SingleBrewery = ({ brewery }: BreweryProps) => {
  return (
    <li>
      <h3>{brewery.name}</h3>
      <p>{brewery.city}</p>
    </li>
  );
};
