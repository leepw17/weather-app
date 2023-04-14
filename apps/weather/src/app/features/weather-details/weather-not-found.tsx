import { useContext } from 'react';
import { LocationContext } from '../../app';
import { Card } from '../../components/card';

export function WeatherNotFound() {
  const { location } = useContext(LocationContext);

  return (
    <Card>
      <div className="w-full text-center py-12">
        <h1 className="text-5xl font-bold mb-4">Uh oh.</h1>
        <p>
          Looks like we can't find {location}. Please try again either with a
          zip code (23232) or city, statecode (Richmond, VA).
        </p>
      </div>
    </Card>
  );
}
