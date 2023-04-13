import { WeatherGetRequest } from '@palmetto-assignment/models';
import {
  LocationGetResponse,
  WeatherGetRequest as OWWeatherGetRequest,
  WeatherGetResponse as OWWEatherGetResponse,
  openWeatherProvider,
} from '../providers/open-weather';
import { weatherService } from './weather.service';

describe('weatherService', () => {
  describe('getWeather', () => {
    it('should return null trying to find location', async () => {
      jest
        .spyOn(openWeatherProvider, 'getLocationByZip')
        .mockResolvedValue(null);
      jest.spyOn(openWeatherProvider, 'getWeather');

      const request: WeatherGetRequest = { zip: '10000' };
      const result = await weatherService.getWeather(request);

      expect(result).toBeNull();
      expect(openWeatherProvider.getLocationByZip).toHaveBeenCalledWith(
        '10000'
      );
      expect(openWeatherProvider.getWeather).not.toHaveBeenCalled();
    });

    it('should return valid response', async () => {
      const mockedLocationByZipResult = {
        lat: 12,
        lon: 123,
      } as LocationGetResponse;
      jest
        .spyOn(openWeatherProvider, 'getLocationByZip')
        .mockResolvedValue(mockedLocationByZipResult);
      jest.spyOn(openWeatherProvider, 'getWeather').mockResolvedValue({
        main: {},
        sys: { sunrise: 100, sunset: 100 },
        weather: [{}],
        wind: {},
      } as OWWEatherGetResponse);

      const request: WeatherGetRequest = { zip: '10000' };
      const result = await weatherService.getWeather(request);

      expect(result).not.toBeNull();
      expect(openWeatherProvider.getLocationByZip).toHaveBeenCalledWith(
        '10000'
      );
      expect(openWeatherProvider.getWeather).toHaveBeenCalledWith({
        lat: 12,
        lon: 123,
      } as OWWeatherGetRequest);
    });
  });
});
