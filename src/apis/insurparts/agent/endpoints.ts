import { Endpoint } from '../../@axios/types';
import { GetRepairShopByIdReq, GetRepairShopAndPartsListReq } from './types';

type AgentEndpoints = {
  getRepairshopById: (req: GetRepairShopByIdReq) => Endpoint;
  getRepairshopAndPartsList: (req: GetRepairShopAndPartsListReq) => Endpoint;
};

const AGENT_ENDPOINTS: AgentEndpoints = {
  getRepairshopById: (req: GetRepairShopByIdReq) => ({
    url: `/agent/carcenter/${req.repairShopId}`,
    method: 'GET',
  }),
  getRepairshopAndPartsList: (req: GetRepairShopAndPartsListReq) => ({
    url: '/agent/carcenter-parts/list',
    method: 'GET',
    params: { ...req },
  }),
};

export default AGENT_ENDPOINTS;
