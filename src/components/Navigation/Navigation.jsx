import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <ul class="header__nav-links">
      <li>
        <NavLink
          className="header__nav-link"
          to={{ pathname: '/signup' }}
        >
          Регистрация
        </NavLink>
      </li>
      <li>
        <NavLink
          className="header__nav-link"
          to={{ pathname: '/signin' }}
        >
          Войти
        </NavLink>
      </li>
    </ul> 
  )
}

export default Navigation;
