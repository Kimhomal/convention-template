import { AgentQueries } from '../../apis';
import { SelectedRepairshopById, selectRepairshopById } from './select';

const Agent = () => {
  const { data, isLoading, error } =
    AgentQueries.useRepairshopByIdQuery<SelectedRepairshopById>(
      { id: 417 },
      {
        queryKey: [417],
        select: selectRepairshopById,
      },
    );

  if (data === undefined || isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  console.log('data', data);
  return (
    <>
      <h2>{data.name}</h2>
      <p>{data.address}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
        {data.serviceBadges.map((sb) => (
          <button
            key={sb.id}
            style={{
              width: 50,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
            }}
          >
            <img src={sb.icon_img} width={40} height={40} />
          </button>
        ))}
      </div>
    </>
  );
};

export default Agent;
