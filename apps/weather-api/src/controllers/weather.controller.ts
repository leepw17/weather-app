import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { WeatherGetRequest } from '@palmetto-assignment/models';
import { ApiError } from '@palmetto-assignment/utils';

import { weatherService } from '../services/weather.service';

class WeatherController {
  async get(req: Request, resp: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(412).json({ errors: errors.array() });
    }

    const request = req.query as unknown as WeatherGetRequest;

    try {
      const response = await weatherService.getWeather(request);
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
