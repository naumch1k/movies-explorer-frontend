import React from 'react';
import Header from '../components/Header/Header';

const HeaderLayout = ({ 
  component: Component,
  loggedIn,
  headerModifier,
  onOpenMenu,
  ...rest
}) => {
  return(
    <>
      <Header loggedIn={loggedIn} headerModifier={headerModifier} onOpenMenu={onOpenMenu} />
      <Component {...rest} />
    </>
  )
}

export  default HeaderLayout;
