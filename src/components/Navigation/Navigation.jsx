import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

import ProfileButton from '../ProfileButton/ProfileButton';

function Navigation() {
  const NAVIGATION_LINKS = [
		{
			key: 1,
			linkText: 'Фильмы',
			linkPath: '/movies',
			exact: false,
		},
    {
			key: 2,
			linkText: 'Сохранённые фильмы',
			linkPath: '/saved-movies',
			exact: false,
		},
	]

  return (
    <nav className="navigation">
      <ul className="navigation__items">
        <div className="navigation__links-container">
          {NAVIGATION_LINKS.map((item) => (
            <li className="navigation__list-item" key={item.key}>
              <NavLink
                className="navigation__link"
                activeClassName="navigation__link_active"
                to={{ pathname: item.linkPath }}
                exact={item.exact}
              >
                {item.linkText}
              </NavLink>
            </li>
          ))}
        </div>
        <li>
          <ProfileButton />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
