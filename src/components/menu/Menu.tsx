import React from 'react';
import MenuLink from '../menuLink/MenuLink';

import "./menu.css"

const Menu = () => {
  return (
    <div className="menu">
      <MenuLink title="Home" icon={'home'} />
      <MenuLink title="Deposits" icon={'file-multiple'} active />
      <MenuLink title="Offers" icon={'gift'} />
      <MenuLink title="Payments" icon={'bank'} />
      <MenuLink title="Settings" icon={'cog'} />
    </div>
  );
};

export default Menu;
