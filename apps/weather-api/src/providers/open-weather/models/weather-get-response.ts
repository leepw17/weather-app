import { Clouds } from './clouds';
import { Coordinate } from './coordinate';
import { Main } from './main';
import { Precipitation } from './precipitation';
import { Sys } from './sys';
import { Weather } from './weather';
import { Wind } from './wind';

export interface WeatherGetResponse {
  /**
   * Internal parameter
   */
  base: string;

  /**
   * Cloud informatoin
   */
  clouds: Clouds;

  /**
   * Internal parameter
   */
  cod: number;

  /**
   * Coordinate information
   */
  coor: Coordinate;

  /**
   * Time of data calculation, unix, UTC
   */
  dt: number;

  /**
   * City ID
   */
  id: number;

  /**
   * Main weather response
   */
  main: Main;

  /**
   * City name
   */
  name: string;

  /**
   * Rain information (if applicalb)e)
   */
  rain: Precipitation;

  /**
   * Snow information (if applicable)
   */
  snow: Precipitation;

  /**
   * Weather system information
   */
  sys: Sys;

  /**
   * Shift in seconds from UTC
   */
  timezone: number;

  /**
   * Visibility, meter. The maximum value of the visibility is 10km
   */
  visibility: number;

  /**
   * Known weather informatoin
   */
  weather: Weather;

  /**
   * Wind information
   */
  wind: Wind;
}
