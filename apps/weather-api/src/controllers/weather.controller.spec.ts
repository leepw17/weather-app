import { Request, Response } from 'express';
import { validationResult, Result, ValidationError } from 'express-validator';
import { weatherController } from './weather.controller';
import { weatherService } from '../services/weather.service';
import { WeatherGetResponse } from '@palmetto-assignment/models';

jest.mock('express-validator');

describe('weatherController', () => {
  describe('get', () => {
    const resp: Partial<Response> = { status: jest.fn(), send: jest.fn() };
    jest.spyOn(resp, 'status');
    jest.spyOn(resp, 'send');

    afterAll(() => {
      jest.resetAllMocks();
    });

    it('should return 412', async () => {
      const req: Partial<Request> = { query: { randomParam: 'test' } };
      jest.mocked(validationResult).mockImplementation((_) => {
        return {
          isEmpty: () => false,
          array: () => [],
        } as Result<ValidationError>;
      });

      await weatherController.get(req as Request, resp as Response);

      expect(resp.status).toHaveBeenCalledWith(412);
    });

    it('should return 404', async () => {
      const req: Partial<Request> = { query: { zip: '23232' } };
      jest.mocked(validationResult).mockImplementation((_) => {
        return {
          isEmpty: () => true,
        } as Result<ValidationError>;
      });

      jest.spyOn(weatherService, 'getWeather').mockResolvedValue(null);

      await weatherController.get(req as Request, resp as Response);

      expect(resp.status).toHaveBeenCalledWith(404);
    });

    it('should return 200', async () => {
      const req: Partial<Request> = { query: { zip: '23232' } };
      jest.mocked(validationResult).mockImplementation((_) => {
        return {
          isEmpty: () => true,
        } as Result<ValidationError>;
      });

      jest
        .spyOn(weatherService, 'getWeather')
        .mockResolvedValue({ city: 'Midlothian' } as WeatherGetResponse);

      const result = await weatherController.get(
        req as Request,
        resp as Response
      );

      expect(result).not.toBeNull();
      expect(resp.status).toHaveBeenCalledWith(200);
    });
  });
});
