import {
  LocationGetResponse,
  WeatherGetRequest as OWWeatherGetRequest,
  WeatherGetResponse as OWWEatherGetResponse,
  openWeatherProvider,
} from '../providers/open-weather';
import {
  WeatherGetRequest,
  WeatherGetResponse,
} from '@palmetto-assignment/models';

class WeatherService {
  async getWeather(req: WeatherGetRequest): Promise<WeatherGetResponse> {
    const location: LocationGetResponse = await this.getLocation(req);
    if (!location) {
      return null;
    }

    const request: OWWeatherGetRequest = {
      lat: location.lat,
      lon: location.lon,
    };

    const response: OWWEatherGetResponse = await openWeatherProvider.getWeather(
      request
    );

    return {
      city: location.name,
      feelsLike: Math.floor(response.main.feels_like),
      humidity: response.main.humidity,
      pressure: response.main.pressure,
      sunrise: new Date(response.sys.sunrise * 1000).toLocaleString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }),
      state: location.state,
      sunset: new Date(response.sys.sunset * 1000).toLocaleString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }),
      temp: response.main.temp,
      tempMax: Math.floor(response.main.temp_max),
      tempMin: Math.floor(response.main.temp_min),
      weatherDescription: response.weather[0].description,
      weatherIcon: response.weather[0].icon,
      weatherMain: response.weather[0].main,
      windSpeed: Math.floor(response.wind.speed),
    } as WeatherGetResponse;
  }

  private async getLocation(
    request: WeatherGetRequest
  ): Promise<LocationGetResponse> {
    let location: LocationGetResponse | null;

    if (request.zip) {
      location = await openWeatherProvider.getLocationByZip(`${request.zip}`);
    } else {
      let query = request.q;
      const querySplit = request.q.split(',');
      if (querySplit.length > 1) {
        query += ',US';
      }

      const response = await openWeatherProvider.getLocationByName(query);
      if (response && response.length) {
        location = response[0];
      }
    }

    return location;
  }
}

export const weatherService = new WeatherService();
