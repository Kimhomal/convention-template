import { InsurpartsPageResponse, InsurpartsResponse } from '../../@axios/types';
import { request } from '../../@axios/utils';
import AgentEndpoints from './endpoints';
import {
  GetRepairShopByIdReq,
  GetRepairShopByIdRes,
  GetRepairShopAndPartsListReq,
  GetRepairShopAndPartsListRes,
} from './types';

const getRepairShopById = (req: GetRepairShopByIdReq) => {
  return request<InsurpartsResponse<GetRepairShopByIdRes>>(
    AgentEndpoints.getRepairShopById(req),
  );
};

const getRepairshopAndPartsList = (req: GetRepairShopAndPartsListReq) => {
  return request<InsurpartsPageResponse<GetRepairShopAndPartsListRes>>(
    AgentEndpoints.getRepairShopAndPartsList(req),
  );
};

const AgentServices = {
  getRepairShopById,
  getRepairshopAndPartsList,
};

export default AgentServices;
