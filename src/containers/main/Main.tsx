import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import NewDepositBtn from '../../components/buttons/NewDepositBtn';
import Deposits from '../../components/deposits/Deposits'

import depositData from '../../depositData.json'
import './main.css'

const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <NewDepositBtn />
      <Deposits title="Active Deposits" count={2} data={depositData.active} />
      <Deposits title="Closed Deposits" count={8} data={depositData.closed} />
    </div>
  );
};

export default Main;
