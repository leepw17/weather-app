export interface LocationGetRequest {
  /**
   * Your unique API key
   * - Required
   */
  appid: string;

  /**
   * City name, state code, and country code divided by comma.
   * Ex: q={cityname}, q={cityname},{statecode}, q={cityname},{statecode},{countrycode}
   * - Required unless zip is provided
   */
  q?: string;

  /**
   * Zip code
   * Ex: zip={zipcode}, zip={zipcode},{countrycode}
   * - Required unless q is provided
   */
  zip?: string;
}
