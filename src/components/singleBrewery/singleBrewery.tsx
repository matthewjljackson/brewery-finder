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
      }}
      className='border-2 border-blue-600 rounded-md hover:bg-white p-2 hover:border-blue-400'>
      <h3>Name: {brewery.name}</h3>
      <p>City: {brewery.city}</p>
    </li>
  );
};
