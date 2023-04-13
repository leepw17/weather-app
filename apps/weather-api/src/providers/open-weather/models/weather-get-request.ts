import { WeatherUnit } from './weather-unit-type';

export interface WeatherGetRequest {
  /**
   * Geographical coordinate, latitude
   * - Required
   */
  lat: number;

  /**
   * Geographical coordinate, longitude
   * - Required
   */
  lon: number;

  /**
   * Units of measurement, defaults to standard
   * - Optional
   */
  units: WeatherUnit;
}
