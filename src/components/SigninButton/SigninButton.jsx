import React from 'react';
import './SigninButton.css';
import { NavLink } from 'react-router-dom';

function SigninButton() {
  return (
    <NavLink
      className="signin-btn"
      to={{ pathname: '/signin' }}
    >
      Войти
    </NavLink>
  );
}
  
export default SigninButton;
