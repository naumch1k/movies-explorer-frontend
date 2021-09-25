import React from 'react';
import './Header.css';

import LogoLink from '../LogoLink/LogoLink';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import BurgerButton from '../BurgerButton/BurgerButton';

function Header({ loggedIn, headerModifier, onOpenMenu }) {
  const headerClassName = (
    `header ${!headerModifier ? '' : headerModifier} page__header`
  );

  return(
    <header className={headerClassName}>
      <div className="header__container">
        <LogoLink />
        {loggedIn ? (
          <Navigation />
        )
        : (
          <AuthNavigation />
        )}
        {loggedIn && (
          <BurgerButton 
            onOpenMenu={onOpenMenu}
          />
        )}
      </div>
    </header>
  )
}
  
export default Header;
  