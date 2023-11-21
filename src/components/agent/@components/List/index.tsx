import { AgentQueries } from '../../../../apis';
import {
  SelectedRepsirShopAndPartsItem,
  selectRepairShopAndPartsList,
} from './select';

const AgentList = () => {
  const { data, isLoading, error } =
    AgentQueries.useRepairShopAndPartsListQuery<SelectedRepsirShopAndPartsItem>(
      {
        page: 1,
        page_size: 10,
      },
      { select: selectRepairShopAndPartsList },
    );

  if (data === undefined || isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div style={{ width: 300 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontWeight: 700,
        }}
      >
        <span>업체명</span>
        <span>대표명</span>
      </div>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          padding: 0,
        }}
      >
        {data.pages.map((i) => (
          <li
            key={i.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>{i.name}</span>
            <span>{i.ownerName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgentList;
