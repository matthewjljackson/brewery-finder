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
    <Map height={300} center={center} defaultZoom={11}>
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
  );
};
