import React from 'react';

import './alldepositbtn.css'

const AllDepositBtn: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="all-deposit-btn">
      <a href="#t" className="all-btn">{title}</a>
    </div>
  );
};

export default AllDepositBtn;
