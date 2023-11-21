import { request } from '../../@axios/utils';
import AGENT_ENDPOINTS from './endpoints';
import { RepairShopById, RepairShopByIdResponse } from './types';

const getRepairshopById = ({ id }: RepairShopByIdResponse) => {
  return request<RepairShopById>(AGENT_ENDPOINTS.getRepairshopById(id));
};

export default {
  getRepairshopById,
};
