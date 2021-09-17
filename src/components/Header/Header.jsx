import React from 'react';

import LogoLink from '../LogoLink/LogoLink';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  return(
    <header className="header">
      <LogoLink />
      <Navigation 
        loggedIn={loggedIn}
      />
    </header>
  )
}
  
export default Header;
  