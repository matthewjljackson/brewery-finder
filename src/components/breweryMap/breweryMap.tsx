import { useState } from 'react';
import { Map, Marker } from 'pigeon-maps';
import { Brewery } from '../../utils';

interface BreweryMapProps {
  breweries: Brewery[];
  center: [number, number];
}

export const BreweryMap = ({ breweries, center }: BreweryMapProps) => {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;

  return (
    <article className='w-[90%] h-[250px] mx-[5%] border-2 border-blue-600 md:order-last md:h-[90%]'>
      <Map center={center} defaultZoom={11}>
        {breweries.length &&
          breweries.map((brewery) => (
            <Marker
              width={50}
              anchor={[brewery.latitude, brewery.longitude]}
              color={color}
              onClick={() => setHue(hue + 20)}
            />
          ))}
      </Map>
    </article>
  );
};
