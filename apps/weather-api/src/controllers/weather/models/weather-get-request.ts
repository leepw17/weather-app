import {} from '@palmetto-assignment/models';

/**
 * @swagger
 * components:
 *  schemas:
 *    WeatherGetRequest:
 *      type: object
 *      properties:
 *        city:
 *          type: string;
 *          description: The city you are requesting weather for
 */

export interface WeatherGetRequest {
  city: string;
}
