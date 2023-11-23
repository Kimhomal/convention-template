import { request } from '../../@axios/utils';
import AGENT_ENDPOINTS from './endpoints';
import { RepairShopById, RepairShopByIdRequest } from './types';

const getRepairshopById = ({ id }: RepairShopByIdRequest) => {
  return request<RepairShopById>(AGENT_ENDPOINTS.getRepairshopById(id));
};

const AgentServices = {
  getRepairshopById,
};

export default AgentServices;
