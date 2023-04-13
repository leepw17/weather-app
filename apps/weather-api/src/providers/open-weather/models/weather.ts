export interface Weather {
  /**
   * Weather condition within the group
   */
  description: string;

  /**
   * Weather icon id
   */
  icon: string;

  /**
   * Weather condition id
   */
  id: number;

  /**
   * Group of weather parameters (Rain, Snow, Extreme, etc.)
   */
  main: string;
}
