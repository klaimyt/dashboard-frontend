import React from 'react';
import './deposit.css'

const StatusIndicator: React.FC<{ color: string }> = ({ color }) => <div className="status-indicator" style={{ color }} />


const Deposit: React.FC<{ data: any }> = ({ data }) => {
  const { property, moveInDate, rent, deposit, status } = data;

  return (
    <div className="deposit">
      <div className="deposit-property">
        <img src={require(`../../assets/images/${property.imageUrl}`)} alt="property" className="deposit-property-img" />
        <div className="deposit-property-text">
          <h1 className="deposit-street">{property.address.street}</h1>
          <h1 className="deposit-subtitle">{property.address.city} {property.address.state}</h1>
        </div>
      </div>
      <h1 className="deposit-moveindate">{moveInDate}</h1>
      <h1 className="deposit-rent">{rent}</h1>
      <div className="depositWrapper">
        <h1>${deposit.amount}</h1>
        <h1 className="deposit-subtitle">{deposit.type}</h1>
      </div>
      <div className="deposit-status">
        <h1>{status.message}</h1>
        {(() => {
          // TODO
          switch (status.level) {
            case 1: return <StatusIndicator color="#F17E7E" />;
            case 2: return <StatusIndicator color="#FFD056" />;
            case 3: return <StatusIndicator color="#75C282" />;
            default: return <StatusIndicator color="#AAA5A5" />;
          }
        })}
      </div>
    </div>
  );
};

export default Deposit;
