import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation({ loggedIn }) {
  return (
    <>
      {!loggedIn &&
        (<ul className="header__nav-links">
          <li>
            <NavLink
              className="header__nav-link"
              activeClassName="header__nav-link_active"
              to={{ pathname: '/signup' }}
            >
              Регистрация
            </NavLink>
          </li>
          <li>
            <NavLink
              className="header__nav-link"
              activeClassName="header__nav-link_active"
              to={{ pathname: '/signin' }}
            >
              Войти
            </NavLink>
          </li>
        </ul>)
      }
      {loggedIn &&
        (<ul className="header__nav-links">
          <li>
            <NavLink
              className="header__nav-link"
              activeClassName="header__nav-link_active"
              to={{ pathname: '/movies' }}
            >
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink
              className="header__nav-link"
              activeClassName="header__nav-link_active"
              to={{ pathname: '/saved-movies' }}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li>
            <NavLink
              className="header__nav-link"
              activeClassName="header__nav-link_active"
              to={{ pathname: '/profile' }}
            >
              Аккаунт
            </NavLink>
          </li>
        </ul>)
      }
    </>
  )
}

export default Navigation;
