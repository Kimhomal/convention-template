import AgentItem from './@components/Item';
import AgentInfiniteList from './@components/InfiniteList';

const Agent = () => {
  return (
    <div style={{ display: 'flex', gap: 80 }}>
      <AgentItem />
      <AgentInfiniteList />
    </div>
  );
};

export default Agent;
