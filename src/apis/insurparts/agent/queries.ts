import { AxiosResponse } from 'axios';
import {
  UseInfiniteQueryOptions,
  UseQueryOptions,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';

import { InsurpartsPageResponse, InsurpartsResponse } from '../../@axios/types';
import { getNextPageParam, getPreviousPageParam } from '../utils';

import AgentServices from './services';
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
    UseQueryOptions<RepairShopByIdRes, Error, TData, (string | number)[]>,
    'queryFn'
  >,
) => {
  const { repairShopId } = axiosOptions;
  // TODO: 이부분 개선 필요
  const queryKey: (string | number)[] = ['repairshop'];
  if (queryOptions?.queryKey) {
    queryOptions.queryKey.forEach((item) => queryKey.push(item));
  }
  return useQuery({
    queryFn: () => AgentServices.getRepairShopById({ repairShopId }),
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
      AgentServices.getRepairshopAndPartsList({
        page: pageParam,
        ...axiosOptions,
      }),
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
