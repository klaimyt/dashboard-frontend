import React from 'react';

import './sortingbar.css'

const SortingBar = () => {
  return (
    <div className="sortingbar">
      <h1 className="sortingbar-property">Property</h1>
      <h1 className="sortingbar-moveindate">Move In Date</h1>
      <h1 className="sortingbar-rent">Rent</h1>
      <h1 className="sortingbar-deposit">Deposit</h1>
      <h1 className="sortingbar-status">Status</h1>
    </div>
  );
};

export default SortingBar;
