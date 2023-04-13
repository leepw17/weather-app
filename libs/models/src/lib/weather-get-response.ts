/**
 * @swagger
 * components:
 *  schemas:
 *    WeatherGetResponse:
 *      type: object
 *      properties:
 *        city:
 *          type: string
 *          description: City name
 *          example: Richmond
 *        feelsLike:
 *          type: number
 *          description: What the temperature feels like (Fahrenheit)
 *          example: 58.05
 *        state:
 *          type: string
 *          description: State code
 *          example: VA
 *        sunrise:
 *          type: string
 *          description: Sunrise datetime
 *          example: 4/13/2023, 6:37:48 AM
 *        sunset:
 *          type: string
 *          description: Sunset datetime
 *          example: 4/13/2023, 7:42:22 PM
 *        temp:
 *          type: number
 *          description: Current actual temperature outside (Fahrenheit)
 *          example: 59.83
 *        tempMax:
 *          type: number
 *          description: Maximum temperature of the day (Fahrenheit)
 *          example: 64.87
 *        tempMin:
 *          type: number
 *          description: Minimum temperature of the day (Fahrenheit)
 *          example: 53.64
 *        weatherDescription:
 *          type: string
 *          description: Short description of current weather
 *          example: clear
 *        weatherIcon:
 *          type: string
 *          description: Icon id for weather
 *          example: 01n
 *        weatherMain:
 *          type: string;
 *          description: Main weather description
 *          example: Clear
 *        windSpeed:
 *          type: number
 *          description: Wind speed in mph
 *          example: 6.91
 */

export interface WeatherGetResponse {
  city: string;
  feelsLike: number;
  state: string;
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
