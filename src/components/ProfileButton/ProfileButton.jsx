import React from 'react';
import './ProfileButton.css';
import { NavLink } from 'react-router-dom';

import { ReactComponent as ProfileIcon } from '../../images/profile-icon.svg';

function ProfileButton({ onClick }) {
  return (
    <NavLink
      className="profile-btn"
      to={{ pathname: '/profile' }}
      onClick={onClick}
    >
      <ProfileIcon
        className="profile-btn__icon"
        fill="currentColor"
      />
      Аккаунт
    </NavLink>
  );
}
  
export default ProfileButton;
