import { AxiosResponse } from 'axios';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { InsurpartsResponse } from '../../@axios/types';

import AgentApis from './services';
import { RepairShopById } from './types';

export const useRepairshopByIdQuery = <T>(
  repairshopId: number,
  queryOptions: Omit<
    UseQueryOptions<
      AxiosResponse<InsurpartsResponse<RepairShopById>>,
      Error,
      T,
      (string | number)[]
    >,
    'queryKey' | 'queryFn' | 'enabled'
  >,
) => {
  return useQuery({
    queryKey: ['repairshop', repairshopId],
    queryFn: () => AgentApis.getRepairshopById(repairshopId),
    enabled: !!repairshopId,
    ...queryOptions,
  });
};

const AgentQueries = {
  useRepairshopByIdQuery,
};

export default AgentQueries;
