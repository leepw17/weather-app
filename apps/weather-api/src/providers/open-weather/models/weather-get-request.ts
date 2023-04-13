import { MeasurementUnitType } from '@palmetto-assignment/models';

export interface WeatherGetRequest {
  /**
   * Your unique API key
   * - Required
   */
  appid?: string;

  /**
   * Geographical coordinates (latitude)
   */
  lat: number;

  /**
   * Geographical coordinates (longitude)
   */
  lon: number;

  /**
   * Units of measurement. Defaults to standard if not provided
   */
  units?: MeasurementUnitType;
}
