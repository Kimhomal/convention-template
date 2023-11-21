import { request } from '../../@axios/utils';

import AGENT_ENDPOINTS from './endpoints';
import {
  GetRepairShopByIdReq,
  GetRepairShopByIdRes,
  GetRepairShopAndPartsListReq,
  GetRepairShopAndPartsListRes,
} from './types';

const getRepairShopById = (req: GetRepairShopByIdReq) => {
  return request<GetRepairShopByIdRes>(AGENT_ENDPOINTS.getRepairshopById(req));
};

const getRepairshopAndPartsList = (req: GetRepairShopAndPartsListReq) => {
  return request<GetRepairShopAndPartsListRes>(
    AGENT_ENDPOINTS.getRepairshopAndPartsList(req),
  );
};

const AgentApis = {
  getRepairShopById,
  getRepairshopAndPartsList,
};

export default AgentApis;
