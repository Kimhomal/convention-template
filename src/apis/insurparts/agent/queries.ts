import { AxiosResponse } from 'axios';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { InsurpartsResponse } from '../../@axios/types';

import { RepairShopById, RepairShopByIdRequest } from './types';
import AgentServices from './services';

export const useRepairshopByIdQuery = <T>(
  axiosOptions: RepairShopByIdRequest,
  queryOptions: Omit<
    UseQueryOptions<
      AxiosResponse<InsurpartsResponse<RepairShopById>>,
      Error,
      T,
      (string | number)[]
    >,
    'queryFn'
  >,
) => {
  // TODO: 이부분 개선 필요
  const queryKey: (string | number)[] = ['repairshop'];
  if (queryOptions.queryKey) {
    queryOptions.queryKey.forEach((item) => queryKey.push(item));
  }
  return useQuery({
    queryKey: queryKey,
    queryFn: () => AgentServices.getRepairshopById({ id: axiosOptions.id }),
    enabled: !!queryOptions.enabled,
    ...queryOptions,
  });
};

const AgentQueries = {
  useRepairshopByIdQuery,
};

export default AgentQueries;
