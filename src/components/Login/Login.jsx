import React from 'react';
import { Link } from 'react-router-dom'; 

function Login() {
  return (
    <form className="form" name="login-form">
      <h2 className="form__heading">Рады видеть!</h2>
      <fieldset className="form__items">

        <label className="form__label" for="email">E-mail</label>
        <input
          className="form__item form__item_el_email"
          id="email"
          type="email"
          name="email"
          placeholder="E-mail"
          required
        />
        <p className="form__error" id="email-error"></p>

        <label className="form__label" for="password">Пароль</label>
        <input 
          className="form__item form__item_el_password"
          id="password"
          type="password"
          name="password"
          placeholder="Пароль"
          required
        />
        <p className="form__error" id="password-error"></p>
        
      </fieldset>
      <button className="form__submit-btn" type="submit">Войти</button>
      <p className="form__text">
        Ещё не зарегистрированы?
        <Link className="form__link" to="/signup"> Регистрация</Link>
      </p>
    </form>
  )
}

export default Login;
