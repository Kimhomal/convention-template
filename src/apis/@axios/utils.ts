import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import insurpartsInstance from './instances/insurparts';
import { Endpoint, InsurpartsResponse } from './types';

export const request = async <T>(
  endpoint: Endpoint,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<InsurpartsResponse<T>>> => {
  try {
    switch (endpoint.method) {
      case 'GET': {
        return insurpartsInstance.get(endpoint.url, {
          params: endpoint.params,
          ...options,
        });
      }
      case 'POST':
        return insurpartsInstance.post(endpoint.url, endpoint.data, {
          params: endpoint.params,
          ...options,
        });
      case 'PUT':
        return insurpartsInstance.put(endpoint.url, endpoint.data, {
          params: endpoint.params,
          ...options,
        });
      case 'DELETE':
        return insurpartsInstance.delete(endpoint.url);
      default:
        throw new Error(`Unsupported HTTP method: ${endpoint.method}`);
    }
  } catch (error) {
    throw new Error(
      `Failed to perform HTTP request: ${
        (error as Error | AxiosError).message
      }`,
    );
  }
};
