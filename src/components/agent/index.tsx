import AgentItem from './@components/Item';
import AgentInfiniteList from './@components/InfiniteList';
import AgentPaginationList from './@components/PaginationList';

const Agent = () => {
  return (
    <div style={{ display: 'flex', gap: 80 }}>
      <AgentItem />
      <AgentInfiniteList />
      <AgentPaginationList />
    </div>
  );
};

export default Agent;
