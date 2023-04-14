import { WeatherGetResponse } from '@palmetto-assignment/models';
import { Card } from '../../components/card';

export interface WeatherDetailsProps {
  data: Partial<WeatherGetResponse>;
}

export function WeatherDetails(props: WeatherDetailsProps) {
  const {
    feelsLike,
    tempMin,
    tempMax,
    humidity,
    pressure,
    windSpeed,
    sunrise,
    sunset,
  } = props.data;

  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span>Feels like</span>
          <span>
            {feelsLike}
            <span>&#176;</span>
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span>Sunrise</span>
          <span>{sunrise}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Sunset</span>
          <span>{sunset}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Temp Min</span>
          <span>
            {tempMin}
            <span>&#176;</span>
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span>Temp Max</span>
          <span>
            {tempMax}
            <span>&#176;</span>
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span>Humidity</span>
          <span>{humidity}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Pressure</span>
          <span>{pressure} hPa</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Windspeed</span>
          <span>{windSpeed} mph</span>
        </div>
      </div>
    </Card>
  );
}
