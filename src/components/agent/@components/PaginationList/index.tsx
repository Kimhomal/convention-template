import { useState } from 'react';
import { AgentQueries } from '../../../../apis';
import {
  SelectedRepsirShopAndPartsItem,
  selectRepairShopAndPartsList,
} from './select';

const AgentPaginationList = () => {
  const [page, setPage] = useState(1);

  const {
    data,
    status,
    fetchPreviousPage, // page 상태를 따로 관리하지 않을 경우 setPage(page - 1) 대체 가능
    hasPreviousPage,
    isFetchingPreviousPage,
    fetchNextPage, // page 상태를 따로 관리하지 않을 경우 setPage(page + 1) 대체 가능
    hasNextPage,
    isFetchingNextPage,
  } =
    AgentQueries.useRepairShopAndPartsListQuery<SelectedRepsirShopAndPartsItem>(
      { page, page_size: 200 },
      { select: selectRepairShopAndPartsList, keepPreviousData: true },
    );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'error') {
    return <div>Error!</div>;
  }

  return (
    <div style={{ width: 360, height: 540, paddingInline: 10 }}>
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
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            onClick={() => {
              setPage(page - 1);
            }}
            disabled={!hasPreviousPage || isFetchingPreviousPage}
          >
            {isFetchingPreviousPage
              ? 'Loading more...'
              : hasPreviousPage
                ? 'Previous Page'
                : 'First Page'}
          </button>
          <span>{page}</span>
          <button
            onClick={() => {
              setPage(page + 1);
            }}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? 'Loading more...'
              : hasNextPage
                ? 'Next Page'
                : 'Last Page'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentPaginationList;
