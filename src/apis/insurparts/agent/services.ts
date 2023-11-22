import { InsurpartsPageResponse, InsurpartsResponse } from '../../@axios/types';
import { request } from '../../@axios/utils';

import AGENT_ENDPOINTS from './endpoints';
import {
  GetRepairShopByIdReq,
  GetRepairShopByIdRes,
  GetRepairShopAndPartsListReq,
  GetRepairShopAndPartsListRes,
} from './types';

const getRepairShopById = (req: GetRepairShopByIdReq) => {
  return request<InsurpartsResponse<GetRepairShopByIdRes>>(
    AGENT_ENDPOINTS.getRepairShopById(req),
  );
};

const getRepairshopAndPartsList = (req: GetRepairShopAndPartsListReq) => {
  return request<InsurpartsPageResponse<GetRepairShopAndPartsListRes>>(
    AGENT_ENDPOINTS.getRepairShopAndPartsList(req),
  );
};

const AgentApis = {
  getRepairShopById,
  getRepairshopAndPartsList,
};

export default AgentApis;
