import {
  LocationGetResponse,
  WeatherGetRequest,
  WeatherGetResponse,
} from './models';
import { apiService } from '@palmetto-assignment/utils';
import { LocationGetRequest } from './models/location-get-request';

const BASE_URL = process.env.OPEN_WEATHER_BASE_URL;
const APP_KEY = process.env.OPEN_WEATHER_API_KEY;

class OpenWeatherProvider {
  async getWeather(request: WeatherGetRequest): Promise<WeatherGetResponse> {
    const url = `${BASE_URL}/data/2.5/weather`;
    const response = await apiService.get<
      WeatherGetResponse,
      WeatherGetRequest
    >(url, { ...request, appid: APP_KEY, units: 'imperial' });

    return response;
  }

  async getLocationByName(query: string): Promise<LocationGetResponse[]> {
    const url = `${BASE_URL}/geo/1.0/direct`;
    const request: LocationGetRequest = {
      appid: APP_KEY,
      q: query,
    };

    const response = await apiService.get<
      LocationGetResponse[],
      LocationGetRequest
    >(url, request);

    return response;
  }

  async getLocationByZip(zip: string): Promise<LocationGetResponse> {
    const url = `${BASE_URL}/geo/1.0/zip`;
    const request: LocationGetRequest = {
      appid: APP_KEY,
      zip: zip,
    };

    const response = await apiService.get<
      LocationGetResponse,
      LocationGetRequest
    >(url, request);

    return response;
  }
}

export const openWeatherProvider = new OpenWeatherProvider();
