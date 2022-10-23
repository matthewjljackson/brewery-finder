import { Dispatch, SetStateAction, useCallback, useState } from 'react';

interface BreweryFilterProps {
  setEndPoint: Dispatch<SetStateAction<string>>;
}

export const BreweryFilter = ({ setEndPoint }: BreweryFilterProps) => {
  const [city, setCity] = useState('');

  const handleClick = useCallback(() => {
    const lowerCity = city.toLowerCase();
    const searchableCity = lowerCity.split(' ').join('_');
    setEndPoint(BY_CITY + searchableCity);
  }, [city, setEndPoint]);

  return (
    <div className='w-full flex items-start gap-2 order-2 md:order-last justify-center align-start'>
      <label htmlFor='city' className='text-blue-600 font-bold'>
        City:
      </label>
      <input
        className='px-2 border-2 border-blue-600'
        type='text'
        id='city'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className='bg-blue-600 rounded-xl px-4 text-white' onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export const BY_CITY = '?by_city=';
