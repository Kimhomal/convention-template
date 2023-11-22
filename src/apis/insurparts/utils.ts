import { AxiosResponse } from 'axios';
import { InsurpartsPageResponse } from '../@axios/types';

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
