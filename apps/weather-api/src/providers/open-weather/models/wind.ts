export interface Wind {
  /**
   * Wind direction, degrees (meteorological)
   */
  deg: number;

  /**
   * Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
   */
  gust: number;

  /**
   * Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
   */
  speed: number;
}
