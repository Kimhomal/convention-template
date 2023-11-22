import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import insurpartsInstance from './instances/insurparts';
import { Endpoint, InsurpartsPageResponse } from './types';

export const request = async <TResponse>(
  endpoint: Endpoint,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<TResponse>> => {
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

export const getPreviousPageParam = (
  firstPage: AxiosResponse<InsurpartsPageResponse<unknown>>,
) => {
  return firstPage.data.meta.page.links.previous
    ? firstPage.data.meta.page.current_page - 1
    : undefined;
};

export const getNextPageParam = (
  lastPage: AxiosResponse<InsurpartsPageResponse<unknown>>,
) => {
  return lastPage.data.meta.page.links.next
    ? lastPage.data.meta.page.current_page + 1
    : undefined;
};
