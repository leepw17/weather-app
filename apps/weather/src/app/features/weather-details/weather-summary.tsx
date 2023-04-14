import { WeatherGetResponse } from '@palmetto-assignment/models';
import { Card } from '../../components/card';

export interface WeatherSummaryProps {
  data: Partial<WeatherGetResponse>;
}

export function WeatherSummary(props: WeatherSummaryProps) {
  const { city, state, weatherMain, temp, tempMin, tempMax, weatherIcon } =
    props.data;
  return (
    <Card>
      <div className="flex justify-between items-start">
        <div>
          <h1 className="font-bold text-lg">
            {city}, {state}
          </h1>
          <span className="font-bold text-6xl">
            {temp}
            <span>&#176;</span>
          </span>
          <p>
            {weatherMain}
            <br />
            Day {tempMax}
            <span>&#176;</span> - Night {tempMin}
            <span>&#176;</span>
          </p>
        </div>
        <div>
          <img
            alt="weather icon"
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          />
        </div>
      </div>
    </Card>
  );
}
