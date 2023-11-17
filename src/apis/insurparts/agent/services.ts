import { request } from '../../@axios/utils';
import AGENT_ENDPOINTS from './endpoints';

export interface RepairShopById {
  name: string;
  agent_carcenter?: { address: string };
  agent_virtual_carcenter?: { address: string };
  service_badge: { id: number; active: boolean; icon_img: string }[];
}

export const getRepairshopById = (repairshopId: number) => {
  return request<RepairShopById>(
    AGENT_ENDPOINTS.getRepairshopById(repairshopId),
  );
};
