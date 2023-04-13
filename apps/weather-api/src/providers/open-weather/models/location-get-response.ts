export interface LocationGetResponse {
  /**
   * Country of found location
   */
  country: string;

  /*
   * Geographical coordinates of the found location (latitude)
   */
  lat: number;

  /**
   * Geographical coordinates of the found location (latitude)
   */
  lon: number;

  /**
   * Name of the found location
   */
  name: string;

  /**
   * State code of the found location
   */
  state: string;
}
