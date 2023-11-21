import { AgentQueries } from '../../../../apis';
import {
  SelectedRepsirShopAndPartsItem,
  selectRepairShopAndPartsList,
} from './select';

const AgentInfiniteList = () => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } =
    AgentQueries.useRepairShopAndPartsListQuery<SelectedRepsirShopAndPartsItem>(
      {
        page_size: 200,
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
    <div
      style={{ width: 360, height: 600, paddingInline: 10, overflow: 'scroll' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontWeight: 700,
        }}
      >
        <span>번호</span>
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
  );
};

export default AgentInfiniteList;
