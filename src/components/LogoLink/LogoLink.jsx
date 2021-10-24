import React from 'react';
import './LogoLink.css';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo.svg';

function LogoLink({ logoLinkModifier }) {
  const logoLinkClassName = (
    `logo-link ${!logoLinkModifier ? '' : logoLinkModifier}`
  );

  return(
    <Link
      className={logoLinkClassName}
      to={{ pathname: '/' }}
      aria-label="Home page"
    >
      <img
        src={Logo}
        alt="Movies Explorer logo"
      />
    </Link>
  )
}

export default LogoLink;