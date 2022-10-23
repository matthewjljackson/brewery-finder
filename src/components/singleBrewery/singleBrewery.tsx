import { Brewery } from '../../utils';
import { Dispatch, SetStateAction } from 'react';

interface BreweryProps {
  brewery: Brewery;
  setCenter: Dispatch<SetStateAction<[number, number]>>;
}

export const SingleBrewery = ({ brewery, setCenter }: BreweryProps) => {
  return (
    <li
      onClick={() => {
        setCenter([brewery.latitude, brewery.longitude]);
      }}>
      <h3>{brewery.name}</h3>
      <p>{brewery.city}</p>
    </li>
  );
};
