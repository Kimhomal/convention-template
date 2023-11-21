import { AxiosResponse } from 'axios';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { InsurpartsResponse } from '../../@axios/types';

import { RepairShopById, RepairShopByIdResponse } from './types';
import { AgentApis } from '../..';

export const useRepairshopByIdQuery = <T>(
  axiosOptions: RepairShopByIdResponse,
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
    queryFn: () => AgentApis.getRepairshopById({ id: axiosOptions.id }),
    enabled: !!queryOptions.enabled,
    ...queryOptions,
  });
};

const AgentQueries = {
  useRepairshopByIdQuery,
};

export default AgentQueries;
