import { Brewery } from '../../utils';
import { Dispatch, SetStateAction } from 'react';

interface BreweryProps {
  brewery: Brewery;
  setCenter: Dispatch<SetStateAction<[number, number]>>;
  setSelectedId: Dispatch<SetStateAction<string>>;
  isSelected: boolean;
}

export const SingleBrewery = ({ brewery, setCenter, isSelected, setSelectedId }: BreweryProps) => {
  const additionalStyles = isSelected
    ? ' text-grey-900 bg-blue-100 border-blue-700'
    : ' hover:border-blue-400 hover:shadow-xl hover:bg-white';
  return (
    <li
      onClick={() => {
        setCenter([brewery.latitude, brewery.longitude]);
        setSelectedId(brewery.id);
      }}
      className={'border-2 border-blue-600 rounded-md p-2' + additionalStyles}>
      <h3>Name: {brewery.name}</h3>
      {brewery.street && <p>Street: {brewery.street}</p>}
      {brewery.postal_code && <p>Postcode: {brewery.postal_code}</p>}
      {brewery.website_url && <p>Website: {brewery.website_url}</p>}
      {brewery.phone && <p>Phone number: {brewery.phone}</p>}
    </li>
  );
};
