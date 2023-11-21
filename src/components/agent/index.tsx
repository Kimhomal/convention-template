import AgentItem from './@components/Item';
import AgentList from './@components/List';

const Agent = () => {
  return (
    <div style={{ display: 'flex', gap: 80 }}>
      <AgentItem />
      <AgentList />
    </div>
  );
};

export default Agent;
