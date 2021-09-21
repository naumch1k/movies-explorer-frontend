import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const HeaderFooterLayout = ({ component: Component, loggedIn, ...rest }) =>{
  return(
    <>
      <Header loggedIn={loggedIn} />
      <Component {...rest} />
      <Footer />
    </>
  )
}

export  default HeaderFooterLayout;
