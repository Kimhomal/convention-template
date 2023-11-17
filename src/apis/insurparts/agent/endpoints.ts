import { Endpoint } from '../../@axios/types';

type AgentEndpoints = {
  getRepairshopById: (repairshopId: number) => Endpoint;
};

const AGENT_ENDPOINTS: AgentEndpoints = {
  getRepairshopById: (repairshopId: number) => ({
    url: `/agent/carcenter/${repairshopId}`,
    method: 'GET',
  }),
};

export default AGENT_ENDPOINTS;
