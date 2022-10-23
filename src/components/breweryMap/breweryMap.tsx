import { Dispatch, SetStateAction, useState } from 'react';
import { Map, Marker } from 'pigeon-maps';
import { Brewery } from '../../utils';

interface BreweryMapProps {
  breweries: Brewery[];
  center: [number, number];
  selectedId: string;
  setSelectedId: Dispatch<SetStateAction<string>>;
}

export const BreweryMap = ({ breweries, center, setSelectedId, selectedId }: BreweryMapProps) => {
  return (
    <article className='w-[90%] h-[250px] mx-[5%] border-2 border-blue-600 md:order-last md:h-[90%]'>
      <Map center={center} defaultZoom={11}>
        {breweries.length &&
          breweries.map((brewery) => {
            const coordinates: [number, number] = [brewery.latitude, brewery.longitude];
            const color = selectedId === brewery.id ? '#90caf9' : '#1e88e5';
            return (
              <Marker
                width={40}
                anchor={coordinates}
                color={color}
                onClick={() => setSelectedId(brewery.id)}
              />
            );
          })}
      </Map>
    </article>
  );
};
