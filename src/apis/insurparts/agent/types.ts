import { PageReq } from '../../@axios/types';

export interface GetRepairShopByIdReq {
  repairShopId: number;
}

export interface GetRepairShopByIdRes {
  name: string;
  agent_carcenter?: { address: string };
  agent_virtual_carcenter?: { address: string };
  service_badge: { id: number; active: boolean; icon_img: string }[];
  // 생략
}

export interface GetRepairShopAndPartsListReq extends PageReq {
  agent_type?: 'CARCENTER' | 'PARTS';
  activate?: 'WAIT' | 'ACTIVE' | 'DEACTIVE';
  // 생략
}

export interface GetRepairShopAndPartsListRes {
  id: number;
  name: string;
  owner_name: string;
  // 생략
}

export interface RepairShopByIdRequest {
  id: number;
}
