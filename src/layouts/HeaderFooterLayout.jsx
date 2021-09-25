import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const HeaderFooterLayout = ({
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
      <Footer />
    </>
  )
}

export  default HeaderFooterLayout;
