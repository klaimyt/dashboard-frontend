import React from "react";

import useTheme from "../../hooks/useTheme";
import profileImage from "../../assets/images/profilelg.jpg";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";

import "./navbar.css";

const Navbar = () => {
  const [changeTheme, isLight] = useTheme();

  return (
    <div className="navbar">
      <span className={`navbar-theme-icon ${!isLight ? 'theme__active' : ''}`} onClick={changeTheme}>
        <ThemeToggleButton isLight={isLight} />
      </span>
      <span className="navbar-msg-icon iconify" data-inline="false" data-icon="mdi-light:email"></span>
      <img src={profileImage} alt="profile" className="navbar-profile-img" />
    </div>
  );
};

export default Navbar;
