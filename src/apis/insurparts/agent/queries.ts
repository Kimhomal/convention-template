import { InsurpartsResponse } from '../../@axios/types';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { getRepairshopById } from './services';
import { RepairShopById } from './types';
import { AxiosResponse } from 'axios';

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
    queryFn: () => getRepairshopById(repairshopId),
    enabled: !!repairshopId,
    ...queryOptions,
  });
};
