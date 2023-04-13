export interface Sys {
  /**
   * Country code (GB, JP etc.)
   */
  country: string;

  /**
   * Internal parameter
   */
  id: number;

  /**
   * Sunrise time, unix, UTC
   */
  sunrise: number;

  /**
   * Sunset time, unix, UTC
   */
  sunset: number;
}
