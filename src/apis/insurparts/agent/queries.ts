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
  return useQuery({
    queryFn: () => AgentServices.getRepairShopById(axiosOptions),
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
    'queryFn'
  >,
) => {
  return useInfiniteQuery({
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
