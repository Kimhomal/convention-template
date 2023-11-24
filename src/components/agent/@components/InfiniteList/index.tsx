import { AgentQueries } from '../../../../apis';
import {
  SelectedRepsirShopAndPartsItem,
  selectRepairShopAndPartsList,
} from './select';

const repairShopAndPartsAxiosOptions = {
  page_size: 200,
};

const AgentInfiniteList = () => {
  const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } =
    AgentQueries.useRepairShopAndPartsListQuery<SelectedRepsirShopAndPartsItem>(
      repairShopAndPartsAxiosOptions,
      {
        queryKey: ['repairShopAndParts', repairShopAndPartsAxiosOptions],
        select: selectRepairShopAndPartsList,
      },
    );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'error') {
    return <div>Error!</div>;
  }

  return (
    <div
      style={{
        width: 360,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontWeight: 700,
          marginBottom: 16,
        }}
      >
        <span>번호</span>
        <span>업체명</span>
        <span>대표명</span>
      </div>

      <div style={{ height: 540, paddingInline: 10, overflowY: 'scroll' }}>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            padding: 0,
            margin: 0,
          }}
        >
          {data.pages.map((d) => (
            <li
              key={d.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>{d.id}</span>
              <span>{d.name}</span>
              <span>{d.ownerName}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </button>
      </div>
    </div>
  );
};

export default AgentInfiniteList;
