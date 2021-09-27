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
      aria-label="Перейти на страницу о проекте"
    >
      <img
        src={Logo}
        alt="Логотип сервиса Movies Explorer"
      />
    </Link>
  )
}

export default LogoLink;