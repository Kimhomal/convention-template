import { InfiniteData } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { InsurpartsResponse } from '../../../../apis/@axios/types';
import { GetRepairShopAndPartsListRes } from '../../../../apis/insurparts/agent/types';

export interface SelectedRepsirShopAndPartsItem {
  id: number;
  name: string;
  ownerName: string;
}

export const selectRepairShopAndPartsList = (
  response: InfiniteData<
    AxiosResponse<InsurpartsResponse<GetRepairShopAndPartsListRes>>
  >,
): InfiniteData<SelectedRepsirShopAndPartsItem> => {
  const currentItem = response.pages[0].data.data.results;

  return {
    pages: currentItem.map((r) => ({
      id: r.id,
      name: r.name,
      ownerName: r.owner_name,
    })),
    pageParams: response.pageParams,
  };
};
