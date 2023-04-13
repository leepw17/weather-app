import { Request, Response } from 'express';
import { WeatherGetRequest } from './models';

class WeatherController {
  get(request: Request<WeatherGetRequest>, response: Response): void {
    const getRequest = request.query as WeatherGetRequest;

    response.send({ city: getRequest.city });
  }
}

export const weatherController = new WeatherController();
