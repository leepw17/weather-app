import { ApiError } from './api-errors';

class ApiService {
  async get<T, U>(url: string, queryParams?: U): Promise<T | null> {
    const options = {
      method: 'GET',
    };

    let endPoint = url;
    if (queryParams) {
      endPoint += `?${new URLSearchParams(
        queryParams as Record<string, string>
      ).toString()}`;
    }

    const response = await fetch(endPoint, options);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }

      throw new ApiError(response.statusText, response.status);
    }

    return await response.json();
  }

  // async post
  // async put
  // async delete
}

export const apiService = new ApiService();
