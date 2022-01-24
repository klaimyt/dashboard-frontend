import React from 'react';

import profileImg from '../../assets/images/profilelg.png'

import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="navbar-msg-icon iconify" data-inline="false" data-icon="mdi-light:email"></span>
      <img src={profileImg} alt="profile" className="navbar-profile-img" />
    </div>
  );
};

export default Navbar;
