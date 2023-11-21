import { useState } from 'react';
import { AgentQueries } from '../../../../apis';
import {
  SelectedRepsirShopAndPartsItem,
  selectRepairShopAndPartsList,
} from './select';

const AgentPaginationList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data,
    status,
    fetchPreviousPage,
    hasPreviousPage,
    isFetchingPreviousPage,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } =
    AgentQueries.useRepairShopAndPartsListQuery<SelectedRepsirShopAndPartsItem>(
      {
        page: currentPage,
        page_size: 200,
      },
      { select: selectRepairShopAndPartsList },
    );

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

      <div style={{ height: '100%' }}>
        {status === 'loading' ? (
          <div>Loading...</div>
        ) : status === 'error' ? (
          <div>Error!</div>
        ) : (
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
        )}
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
              setCurrentPage((c) => c - 1);
              fetchPreviousPage();
            }}
            disabled={!hasPreviousPage || isFetchingPreviousPage}
          >
            {isFetchingPreviousPage
              ? 'Loading more...'
              : hasPreviousPage
                ? 'Previous Page'
                : 'First Page'}
          </button>
          <span>{currentPage}</span>
          <button
            onClick={() => {
              setCurrentPage((c) => c + 1);
              fetchNextPage();
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
