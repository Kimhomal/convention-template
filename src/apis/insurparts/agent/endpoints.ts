import { Endpoint } from '../../@axios/types';
import { GetRepairShopByIdReq, GetRepairShopAndPartsListReq } from './types';

type AgentEndpoints = {
  getRepairShopById: (req: GetRepairShopByIdReq) => Endpoint;
  getRepairShopAndPartsList: (req: GetRepairShopAndPartsListReq) => Endpoint;
};

const AgentEndpoints: AgentEndpoints = {
  getRepairShopById: (req: GetRepairShopByIdReq) => ({
    url: `/agent/carcenter/${req.id}`,
    method: 'GET',
  }),
  getRepairShopAndPartsList: (req: GetRepairShopAndPartsListReq) => ({
    url: '/agent/carcenter-parts/list',
    method: 'GET',
    params: { ...req },
  }),
};

export default AgentEndpoints;
