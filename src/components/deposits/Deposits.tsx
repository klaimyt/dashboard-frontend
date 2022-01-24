import React from 'react';

import Deposit from '../deposit/Deposit';
import SortingBar from '../sortingBar/SortingBar';
import AllDepositBtn from '../buttons/AllDepositBtn';

import './deposits.css'

const Deposits: React.FC<{ title: string, data: any, count: number }> = ({ title, data, count }) => {
  return (
    <div className="deposits">
      <h1 className="deposits-title">
        {title}
        <div className="deposits-count">
          {count}
        </div>
      </h1>

      <SortingBar />
      {data.map((deposit: any) => (
        <Deposit data={deposit} key={deposit.property.address.street} />
      ))}
      <AllDepositBtn title={title} />
    </div>
  );
};

export default Deposits;
