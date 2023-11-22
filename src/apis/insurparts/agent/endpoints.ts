import { Endpoint } from '../../@axios/types';
import { GetRepairShopByIdReq, GetRepairShopAndPartsListReq } from './types';

type AgentEndpoints = {
  getRepairShopById: (req: GetRepairShopByIdReq) => Endpoint;
  getRepairShopAndPartsList: (req: GetRepairShopAndPartsListReq) => Endpoint;
};

const AGENT_ENDPOINTS: AgentEndpoints = {
  getRepairShopById: (req: GetRepairShopByIdReq) => ({
    url: `/agent/carcenter/${req.repairShopId}`,
    method: 'GET',
  }),
  getRepairShopAndPartsList: (req: GetRepairShopAndPartsListReq) => ({
    url: '/agent/carcenter-parts/list',
    method: 'GET',
    params: { ...req },
  }),
};

export default AGENT_ENDPOINTS;
