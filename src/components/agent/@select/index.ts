import { AxiosResponse } from 'axios';
import { InsurpartsResponse } from '../../../apis/@axios/types';
import { RepairShopById } from '../../../apis/insurparts/agent/types';

export interface SelectedRepsirshopById {
  name: string;
  address: string;
  serviceBadges: RepairShopById['service_badge'];
}

export const selectRepairshopById = (
  response: AxiosResponse<InsurpartsResponse<RepairShopById>>,
): SelectedRepsirshopById => {
  const {
    data: { name, agent_carcenter, agent_virtual_carcenter, service_badge },
  } = response.data;
  const address = (agent_virtual_carcenter ?? agent_carcenter)?.address ?? '';
  const serviceBadges = service_badge.filter((sb) => sb.active);
  return { name, address, serviceBadges };
};
