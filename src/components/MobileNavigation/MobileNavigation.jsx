import React from 'react';
import './MobileNavigation.css';
import { NavLink } from 'react-router-dom';

import ProfileButton from '../ProfileButton/ProfileButton';

const MOBILE_NAVIGATION_LINKS = [
  {
    key: 1,
    linkText: 'Главная',
    linkPath: '/',
    exact: true,
  },
  {
    key: 2,
    linkText: 'Фильмы',
    linkPath: '/movies',
    exact: false,
  },
  {
    key: 3,
    linkText: 'Сохранённые фильмы',
    linkPath: '/saved-movies',
    exact: false,
  },
]

function MobileNavigation({ onMobileLink }) {
  return (
    <nav className="mobile-navigation">
      <ul className="mobile-navigation__list">
        {MOBILE_NAVIGATION_LINKS.map((item) => (
          <li className="mobile-navigation__list-item" key={item.key}>
            <NavLink
              className="mobile-navigation__link"
              activeClassName="mobile-navigation__link_active"
              to={{ pathname: item.linkPath }}
              exact={item.exact}
              onClick={onMobileLink}
            >
              {item.linkText}
            </NavLink>
          </li>
        ))}
        <li className="mobile-navigation__list-item">
          <ProfileButton
            onClick={onMobileLink}
          />
        </li>
      </ul>
    </nav>
  )
}

export default MobileNavigation;
