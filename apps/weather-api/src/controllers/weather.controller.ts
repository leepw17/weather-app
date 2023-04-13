import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import {
  WeatherGetRequest,
  WeatherGetResponse,
} from '@palmetto-assignment/models';
import { ApiError } from '@palmetto-assignment/utils';

import { weatherService } from '../services/weather.service';

class WeatherController {
  /**
   * @swagger
   * /api/weather:
   *  get:
   *    summary: Retrieve location's weather
   *    description: Retrieve location's weather either by {city},{statecode} query or zip
   *    parameters:
   *      - in: query
   *        name: q
   *        schema:
   *          type: string
   *        description: City name, state code, and country code divided by comma. Required unless zip is provided.
   *      - in: query
   *        name: zip
   *        schema:
   *          type: string
   *        description: Zip code. Required unless q is provided.
   *    responses:
   *      200:
   *        description: Location's weather
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/WeatherGetResponse'
   *      412:
   *        description: Pre-condition failed
   *      404:
   *        description: Not found
   *      5XX:
   *        description: Internal server error
   */
  async get(req: Request, resp: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(412).json({ errors: errors.array() });
    }

    const request = req.query as unknown as WeatherGetRequest;

    try {
      const response: WeatherGetResponse = await weatherService.getWeather(
        request
      );

      if (!response) {
        return resp.status(404).send({ message: 'Not found' });
      }

      return resp.status(200).send(response);
    } catch (err) {
      const error = err as ApiError;

      return resp.status(error.statusCode).send({ message: error.message });
    }
  }
}

export const weatherController = new WeatherController();
