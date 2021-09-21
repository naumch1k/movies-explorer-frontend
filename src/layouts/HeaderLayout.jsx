import React from 'react';
import Header from '../components/Header/Header';

const HeaderLayout = ({ component: Component, loggedIn, ...rest }) =>{
  return(
    <>
      <Header loggedIn={loggedIn} />
      <Component {...rest} />
    </>
  )
}

export  default HeaderLayout;
