export interface WeatherGetResponse {
  feelsLike: number;
  sunrise: string;
  sunset: string;

  temp: number;
  tempMax: number;
  tempMin: number;
  weatherDescription: string;
  weatherIcon: string;
  weatherMain: string;
  windSpeed: number;
}
