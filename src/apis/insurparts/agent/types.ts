export interface RepairShopById {
  name: string;
  agent_carcenter?: { address: string };
  agent_virtual_carcenter?: { address: string };
  service_badge: { id: number; active: boolean; icon_img: string }[];
}

export interface RepairShopByIdRequest {
  id: number;
}
