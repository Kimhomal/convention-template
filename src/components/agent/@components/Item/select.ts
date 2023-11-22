import { AxiosResponse } from 'axios';
import { InsurpartsResponse } from '../../../../apis/@axios/types';
import { GetRepairShopByIdRes } from '../../../../apis/insurparts/agent/types';

export interface SelectedRepairShopById {
  name: string;
  address: string;
  serviceBadges: GetRepairShopByIdRes['service_badge'];
}

export const selectRepairshopById = (
  response: AxiosResponse<InsurpartsResponse<GetRepairShopByIdRes>>,
): SelectedRepairShopById => {
  const {
    data: { name, agent_carcenter, agent_virtual_carcenter, service_badge },
  } = response.data;
  const address = (agent_virtual_carcenter ?? agent_carcenter)?.address ?? '';
  const serviceBadges = service_badge.filter((sb) => sb.active);
  return { name, address, serviceBadges };
};
