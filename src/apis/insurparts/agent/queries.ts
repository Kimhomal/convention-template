import { AxiosResponse } from 'axios';
import {
  UseInfiniteQueryOptions,
  UseQueryOptions,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';

import { InsurpartsPageResponse, InsurpartsResponse } from '../../@axios/types';
import { getNextPageParam, getPreviousPageParam } from '../../@axios/utils';

import AgentApis from './services';
import {
  GetRepairShopByIdRes,
  GetRepairShopAndPartsListReq,
  GetRepairShopAndPartsListRes,
  GetRepairShopByIdReq,
} from './types';

type RepairShopByIdRes = AxiosResponse<
  InsurpartsResponse<GetRepairShopByIdRes>
>;

const useRepairShopByIdQuery = <TData>(
  axiosOptions: GetRepairShopByIdReq,
  queryOptions?: Omit<
    UseQueryOptions<
      RepairShopByIdRes,
      Error,
      TData,
      (string | GetRepairShopByIdReq)[]
    >,
    'queryKey' | 'queryFn' | 'enabled'
  >,
) => {
  const { repairShopId } = axiosOptions;
  return useQuery({
    queryKey: ['repairShop', axiosOptions],
    queryFn: () => AgentApis.getRepairShopById({ repairShopId }),
    enabled: !!repairShopId,
    ...queryOptions,
  });
};

type RepairShopAndPartsListRes = AxiosResponse<
  InsurpartsPageResponse<GetRepairShopAndPartsListRes>
>;

const useRepairShopAndPartsListQuery = <TData>(
  axiosOptions: GetRepairShopAndPartsListReq,
  queryOptions?: Omit<
    UseInfiniteQueryOptions<
      RepairShopAndPartsListRes,
      Error,
      TData,
      RepairShopAndPartsListRes,
      (string | GetRepairShopAndPartsListReq)[]
    >,
    'queryKey' | 'queryFn'
  >,
) => {
  return useInfiniteQuery({
    queryKey: ['repairShopAndParts', axiosOptions],
    queryFn: ({ pageParam = 1 }) =>
      AgentApis.getRepairshopAndPartsList({ page: pageParam, ...axiosOptions }),
    getPreviousPageParam,
    getNextPageParam,
    ...queryOptions,
  });
};

const AgentQueries = {
  useRepairShopByIdQuery,
  useRepairShopAndPartsListQuery,
};

export default AgentQueries;
