import { request } from '../../@axios/utils';

import AGENT_ENDPOINTS from './endpoints';
import { RepairShopById } from './types';

const getRepairshopById = (repairshopId: number) => {
  return request<RepairShopById>(
    AGENT_ENDPOINTS.getRepairshopById(repairshopId),
  );
};

const AgentApis = {
  getRepairshopById,
};

export default AgentApis;
