import { useContext, useEffect, useState } from 'react';

import { apiService, isValidUSZip } from '@palmetto-assignment/utils';
import {
  WeatherDetails,
  WeatherNotFound,
  WeatherSummary,
} from '../../features/weather-details';
import {
  WeatherGetRequest,
  WeatherGetResponse,
} from '@palmetto-assignment/models';
import { LocationContext } from '../../app';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const { location } = useContext(LocationContext);
  const [summary, setSummary] = useState<WeatherGetResponse | null>(null);
  const [details, setDetails] = useState<WeatherGetResponse | null>(null);
  const [started, setStarted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (location) {
      if (!started) {
        setStarted(true);
      }

      const request: WeatherGetRequest = {};
      if (isValidUSZip(location)) {
        request.zip = location;
      } else request.q = location;

      setLoading(true);

      apiService
        .get<WeatherGetResponse, WeatherGetRequest>('/api/weather', request)
        .then(
          (result: WeatherGetResponse | null) => {
            setSummary(result);
            setDetails(result);
            setLoading(false);
          },
          (err) => {
            setSummary(null);
            setDetails(null);
            setLoading(false);
          }
        );
    }
  }, [location]);

  return (
    <div className="w-full sm:w-8/12 sm:mx-auto p-4 flex flex-col gap-4">
      {started && summary && details ? (
        <>
          <WeatherSummary data={summary} />
          <WeatherDetails data={details} />
        </>
      ) : started && !loading ? (
        <WeatherNotFound />
      ) : null}
    </div>
  );
}
