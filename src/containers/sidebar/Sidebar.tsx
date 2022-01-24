import React from 'react';

import Menu from '../../components/menu/Menu';
import Profile from '../../components/profile/Profile'

import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Profile />
      <Menu />
    </div>
  );
};

export default Sidebar;
