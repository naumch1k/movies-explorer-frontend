import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import HeaderLogo from '../../images/header-logo.svg';

function Header({ loggedIn }) {
  return(
    <header className="header">
      <Link
        className=""
        to={{ pathname: '/' }}
      >
        <img 
          className=""
          src={HeaderLogo}
          alt="Логотип сервиса Movies Explorer"
        />
      </Link>
      <Navigation 
        loggedIn={loggedIn}
      />
    </header>
  )
}
  
export default Header;
  