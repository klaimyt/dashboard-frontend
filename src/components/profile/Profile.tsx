import React from 'react';
import profileImage from '../../assets/images/profilelg.jpg';

import "./profile.css"

const Profile = () => {
  return (
    <div className='profile'>
      <img src={profileImage} alt='profile' className="profile-img" />
      <h1 className="profile-name">Ivan Klaimyt</h1>
    </div>
  );
};

export default Profile;
